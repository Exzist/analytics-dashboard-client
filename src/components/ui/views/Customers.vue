<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Customers</h1>
    <p>Тут буде список клієнтів та сегментація.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Customers } from "../../logic/views/Customers";

export default defineComponent({
  name: "Customers",
  components: {},
  setup() {
    return Customers();
  },
});
</script>
