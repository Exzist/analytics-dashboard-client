import { onMounted, ref } from "vue";
import { useProductsStore } from "../../../store/Products";
import { FilterMatchMode } from "@primevue/core";
import debounce from "../../../utils/debounce";

export function Products() {
  const productsStore = useProductsStore();
  const limit = ref(20);
  const filters = ref({
    stockCode: { value: null, matchMode: FilterMatchMode.CONTAINS },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    unitPrice: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const sortField = ref("");
  const sortOrder = ref();
  const loading = ref(true);

  const loadProducts = async (page = 1) => {
    loading.value = true;
    await productsStore.getProducts({
      page,
      limit: limit.value,
      sortField: sortField.value,
      sortOrder: sortOrder.value,
      filters: JSON.stringify(filters.value),
    });
    loading.value = false;
  };

  onMounted(() => {
    loadProducts();
  });

  const onPage = async (event: any) => {
    await loadProducts(event.page + 1);
  };

  const onSort = async (event: any) => {
    sortField.value = event.sortField;
    sortOrder.value = event.sortOrder;
    await loadProducts();
  };

  const onFilter = async (event: any) => {
    filters.value = event.filters;
    // планируем отложенную загрузку (сбрасываем на первую страницу)
    debounceLoad(1);
  };

  // дебаунс для загрузки данных
  const debounceLoad = debounce((page = 1) => {
    // не await внутри, debounce не ожидает промис
    loadProducts(page);
  }, 800);

  const onFilterInput = (filterModel: any, filterCallback: Function) => {
    // уведомляем DataTable о новом значении фильтра (это триггерит onFilter)
    filterCallback(filterModel.value);
    // НЕ вызываем debounce здесь — onFilter обработает и запустит debounceLoad
  };

  return {
    productsStore,
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
