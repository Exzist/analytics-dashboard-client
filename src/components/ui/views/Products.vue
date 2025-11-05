<template>
  <div class="p-9">
    <h1 class="text-black text-2xl font-bold mb-5">Products</h1>
    <div class="bg-white rounded-md p-3">
      <DataTable
        :value="productsStore.products"
        :lazy="true"
        :paginator="true"
        :rows="limit"
        :totalRecords="productsStore.productsCount"
        @page="onPage"
        @sort="onSort"
        @filter="onFilter"
        :loading="loading"
        :filters="filters"
        :sortField="sortField"
        :sortOrder="sortOrder"
        filterDisplay="row"
      >
        <Column field="stockCode" header="Stock code" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="w-42"
              style="max-width: 200px"
              placeholder="Search stock code"
              @input="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
        <Column field="description" header="Description" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="w-42"
              style="max-width: 200px"
              placeholder="Search description"
              @input="onFilterInput(filterModel, filterCallback)"
            />
          </template>
        </Column>
        <Column field="unitPrice" header="Unit price" sortable>
          <template #filter="{ filterModel, filterCallback }">
            <div class="flex">
              <InputText
                v-model="filterModel.value"
                type="number"
                class="w-42"
                style="max-width: 200px"
                placeholder="Search unit price"
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
import { Products } from "../../logic/views/Products";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";

export default defineComponent({
  name: "Products",
  components: { DataTable, Column, InputText },
  setup() {
    return Products();
  },
});
</script>
