<template>
  <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HorizontalBarChart } from "../../logic/chart/HorizontalBarChart";
import Chart from "primevue/chart";

export default defineComponent({
  name: "HorizontalBarChart",
  components: { Chart },
  props: { data: { type: Array, required: true } },
  setup(props: any) {
    return HorizontalBarChart(props);
  },
});
</script>
