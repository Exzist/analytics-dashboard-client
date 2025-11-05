<template>
  <div class="p-9">
    <h1 class="text-black text-2xl font-bold mb-5">Customers</h1>
    <div class="bg-white rounded-md p-3">
      <DataTable
        :value="customersStore.customers"
        :lazy="true"
        :paginator="true"
        :rows="limit"
        :totalRecords="customersStore.customersCount"
        @page="onPage"
        @sort="onSort"
        @filter="onFilter"
        :loading="loading"
        :filters="filters"
        :sortField="sortField"
        :sortOrder="sortOrder"
        filterDisplay="row"
      >
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
        <Column field="country" header="Country" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <div class="flex">
              <InputText
                v-model="filterModel.value"
                type="text"
                class="w-40"
                style="max-width: 200px"
                placeholder="Search country"
                @input="onFilterInput(filterModel, filterCallback)"
              />
            </div>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Customers } from "../../logic/views/Customers";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";

export default defineComponent({
  name: "Customers",
  components: { DataTable, Column, InputText },
  setup() {
    return Customers();
  },
});
</script>
