import { onMounted, ref } from "vue";
import { useTransactionsStore } from "../../../store/Transactions";
import { FilterMatchMode } from "@primevue/core/api";
import debounce from "../../../utils/debounce";

export function Transactions() {
  const transactionsStore = useTransactionsStore();
  const limit = ref(20);
  const filters = ref({
    invoiceNo: { value: null, matchMode: FilterMatchMode.CONTAINS },
    customerId: { value: null, matchMode: FilterMatchMode.EQUALS },
    stockCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
    unitPrice: { value: null, matchMode: FilterMatchMode.EQUALS },
    quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
    invoiceDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const sortField = ref("");
  const sortOrder = ref();
  const loading = ref(true);

  const loadTransactions = async (page = 1) => {
    loading.value = true;
    await transactionsStore.getTransactions({
      page,
      limit: limit.value,
      sortField: sortField.value,
      sortOrder: sortOrder.value,
      filters: filters.value,
    });
    loading.value = false;
  };

  onMounted(() => {
    loadTransactions();
  });

  const onPage = async (event: any) => {
    await loadTransactions(event.page + 1);
  };

  const onSort = async (event: any) => {
    sortField.value = event.sortField;
    sortOrder.value = event.sortOrder;
    await loadTransactions();
  };

  const onFilter = async (event: any) => {
    filters.value = event.filters;
    // планируем отложенную загрузку (сбрасываем на первую страницу)
    debounceLoad(1);
  };

  // дебаунс для загрузки данных
  const debounceLoad = debounce((page = 1) => {
    // не await внутри, debounce не ожидает промис
    loadTransactions(page);
  }, 800);

  const onFilterInput = (filterModel: any, filterCallback: Function) => {
    // уведомляем DataTable о новом значении фильтра (это триггерит onFilter)
    filterCallback(filterModel.value);
    // НЕ вызываем debounce здесь — onFilter обработает и запустит debounceLoad
  };

  return {
    transactionsStore,
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
