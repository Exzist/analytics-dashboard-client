<template>
  <Chart type="pie" :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PieChart } from "../../logic/chart/PieChart";
import Chart from "primevue/chart";

export default defineComponent({
  name: "PieChart",
  components: { Chart },
  props: { data: { type: Array, required: true } },
  setup(props: any) {
    return PieChart(props);
  },
});
</script>
