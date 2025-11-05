<template>
  <div class="p-9">
    <h1 class="text-black text-2xl font-bold mb-5">
      E-commerce Data Analytics Dashboard
    </h1>
    <!-- Статусы: адаптивная сетка 1/2/4 колонки -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-5">
      <StatsCard
        title="Total Sales"
        :data="transactionsStore.totalSales"
        :formatter="(val) => formatCurrency(val)"
      >
        <span
          class="pi pi-dollar text-black bg-gray-300 p-1.5 rounded-md"
        ></span>
      </StatsCard>
      <StatsCard
        title="Transactions"
        :data="transactionsStore.transactionsCount"
      >
        <span
          class="pi pi-shopping-cart text-black bg-gray-300 p-1.5 rounded-md"
        ></span>
      </StatsCard>
      <StatsCard title="Customers" :data="customersStore.customersCount">
        <span class="pi pi-user text-black bg-gray-300 p-1.5 rounded-md"></span>
      </StatsCard>
      <StatsCard title="Countries" :data="customersStore.countriesCount">
        <span
          class="pi pi-globe text-black bg-gray-300 p-1.5 rounded-md"
        ></span>
      </StatsCard>
    </div>

    <!-- Основная область: двухколоночная на lg+, одиночная на мобильных -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
      <!-- Большой график (заполняет 2/3 ширины на lg) -->
      <div class="bg-white rounded-md p-3 lg:col-span-2">
        <h2 class="text-black text-xl font-bold mb-3">Sales over time</h2>
        <LineChart :data="transactionsStore.monthlySales" />
      </div>

      <!-- Правая колонка: можно добавить несколько карточек или вертикальную колонку -->
      <div class="space-y-5">
        <div class="bg-white rounded-md p-3">
          <h2 class="text-black text-xl font-bold mb-3">Sales by country</h2>
          <PieChart :data="transactionsStore.salesByCountry" />
        </div>
        <div class="bg-white rounded-md p-3">
          <h2 class="text-black text-xl font-bold mb-3">Top products</h2>
          <HorizontalBarChart :data="productsStore.topProducts" />
        </div>
      </div>
    </div>

    <!-- Таблица на всю ширину -->
    <div class="bg-white rounded-md p-3">
      <h2 class="text-black text-xl font-bold mb-3">Latest transactions</h2>
      <DataTable :value="transactionsStore.lastTransactions">
        <Column
          v-for="col of tableColumns"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        >
          <template v-if="col.field === 'invoiceDate'" #body="slotProps">
            {{ dateTemplate(slotProps.data.invoiceDate) }}
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Dashboard } from "../../logic/views/Dashboard";
import StatsCard from "../cards/StatsCard.vue";
import LineChart from "../chart/LineChart.vue";
import HorizontalBarChart from "../chart/HorizontalBarChart.vue";
import PieChart from "../chart/PieChart.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default defineComponent({
  name: "Dashboard",
  components: {
    StatsCard,
    LineChart,
    HorizontalBarChart,
    PieChart,
    DataTable,
    Column,
  },
  setup() {
    return Dashboard();
  },
});
</script>
