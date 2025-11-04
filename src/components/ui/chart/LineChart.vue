<template>
  <Chart type="line" :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LineChart } from "../../logic/chart/LineChart";
import Chart from "primevue/chart";

export default defineComponent({
  name: "LineChart",
  components: { Chart },
  props: { data: { type: Array, required: true } },
  setup(props: any) {
    return LineChart(props);
  },
});
</script>
