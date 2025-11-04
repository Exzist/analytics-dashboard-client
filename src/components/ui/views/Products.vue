<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Products</h1>
    <p>Тут буде список продуктів.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Products } from "../../logic/views/Products";

export default defineComponent({
  name: "Products",
  components: {},
  setup() {
    return Products();
  },
});
</script>
