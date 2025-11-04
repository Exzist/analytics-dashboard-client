<template>
  <div class="flex items-center gap-x-4 bg-white rounded-md p-3">
    <div><slot></slot></div>
    <div>
      <h3 class="text-black">{{ title }}</h3>
      <p class="text-black font-bold">
        {{ formatter ? formatter(data) : data }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { StatsCard } from "../../logic/cards/StatsCard";

export default defineComponent({
  name: "StatsCard",
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Number,
      required: true,
    },
    formatter: {
      type: Function as PropType<(val: number) => string>,
      required: false,
    },
  },
  setup() {
    return StatsCard();
  },
});
</script>
