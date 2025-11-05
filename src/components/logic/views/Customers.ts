import { onMounted, ref } from "vue";
import { useCustomerStore } from "../../../store/Customers";
import debounce from "../../../utils/debounce";
import { FilterMatchMode } from "@primevue/core/api";

export function Customers() {
  const customersStore = useCustomerStore();
  const limit = ref(20);
  const filters = ref({
    country: { value: null, matchMode: FilterMatchMode.CONTAINS },
    customerId: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const sortField = ref("");
  const sortOrder = ref();
  const loading = ref(true);

  const loadCustomers = async (page = 1) => {
    loading.value = true;
    await customersStore.getCustomers({
      page,
      limit: limit.value,
      sortField: sortField.value,
      sortOrder: sortOrder.value,
      filters: JSON.stringify(filters.value),
    });
    loading.value = false;
  };

  onMounted(() => {
    loadCustomers();
  });

  const onPage = async (event: any) => {
    await loadCustomers(event.page + 1);
  };

  const onSort = async (event: any) => {
    sortField.value = event.sortField;
    sortOrder.value = event.sortOrder;
    await loadCustomers();
  };

  const onFilter = async (event: any) => {
    filters.value = event.filters;
    // планируем отложенную загрузку (сбрасываем на первую страницу)
    debounceLoad(1);
  };

  // дебаунс для загрузки данных
  const debounceLoad = debounce((page = 1) => {
    // не await внутри, debounce не ожидает промис
    loadCustomers(page);
  }, 800);

  const onFilterInput = (filterModel: any, filterCallback: Function) => {
    // уведомляем DataTable о новом значении фильтра (это триггерит onFilter)
    filterCallback(filterModel.value);
    // НЕ вызываем debounce здесь — onFilter обработает и запустит debounceLoad
  };

  return {
    customersStore,
    limit,
    onPage,
    loading,
    filters,
    sortField,
    sortOrder,
    onSort,
    onFilter,
    onFilterInput,
  };
}
