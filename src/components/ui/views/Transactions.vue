<template>
  <div class="p-9">
    <h1 class="text-black text-2xl font-bold mb-5">Transactions</h1>
    <div class="bg-white rounded-md p-3">
      <DataTable
        :value="transactionsStore.transactions"
        :lazy="true"
        :paginator="true"
        :rows="limit"
        :totalRecords="transactionsStore.transactionsCount"
        @page="onPage"
        @sort="onSort"
        @filter="onFilter"
        :loading="loading"
        :filters="filters"
        :sortField="sortField"
        :sortOrder="sortOrder"
        filterDisplay="row"
      >
        <Column field="invoiceNo" header="#" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <!-- Ограничение ширины фильтра -->
            <div class="flex">
              <InputText
                v-model="filterModel.value"
                type="text"
                class="w-40"
                style="max-width: 200px"
                placeholder="Search invoice #"
                @input="onFilterInput(filterModel, filterCallback)"
              />
            </div>
          </template>
        </Column>
        <Column field="customerId" header="Customer id" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="number"
              class="w-40"
              style="max-width: 200px"
              placeholder="Search customer id"
              @input="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
        <Column field="stockCode" header="Stock code" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="number"
              class="w-40"
              style="max-width: 200px"
              placeholder="Search stock code"
              @input="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
        <Column field="unitPrice" header="Unit price" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="number"
              class="w-40"
              style="max-width: 200px"
              placeholder="Search unit price"
              @input="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
        <Column field="quantity" header="Quantity" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="number"
              class="w-40"
              style="max-width: 200px"
              placeholder="Search quantity"
              @input="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
        <Column field="invoiceDate" header="Invoice date" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <DatePicker
              v-model="filterModel.value"
              class="w-40"
              style="max-width: 200px"
              placeholder="Search invoice date"
              @date-select="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Transactions } from "../../logic/views/Transactions";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import DatePicker from "primevue/datepicker";

export default defineComponent({
  name: "Transactions",
  components: { DataTable, Column, InputText, DatePicker },
  setup() {
    return Transactions();
  },
});
</script>
