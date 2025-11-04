import { onMounted } from "vue";
import { useTransactionsStore } from "../../../store/Transactions";
import { formatCurrency } from "../../../utils/formatters";
import { useCustomerStore } from "../../../store/Customers";
import { useProductsStore } from "../../../store/Products";

export function Dashboard() {
  const transactionsStore = useTransactionsStore();
  const customersStore = useCustomerStore();
  const productsStore = useProductsStore();

  const tableColumns = [
    { field: "invoiceNo", header: "#" },
    { field: "customerId", header: "Customer" },
    { field: "stockCode", header: "Item" },
    { field: "unitPrice", header: "Item price" },
    { field: "quantity", header: "Quantity" },
    { field: "invoiceDate", header: "Date" },
  ];

  const dateTemplate = (rowData: any) => {
    return new Date(rowData).toLocaleDateString("uk-UA");
  };

  onMounted(async () => {
    try {
      await Promise.all([
        transactionsStore.getTransactions({}),
        transactionsStore.getTotalSales({}),
        transactionsStore.getMonthlySales({}),
        customersStore.getCustomersCount({}),
        customersStore.getCountriesCount({}),
        productsStore.getTopProducts({}),
        transactionsStore.getSalesByCountry({}),
        transactionsStore.getLastTransactions({}),
      ]);
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  });

  return {
    formatCurrency,
    transactionsStore,
    customersStore,
    productsStore,
    tableColumns,
    dateTemplate,
  };
}
