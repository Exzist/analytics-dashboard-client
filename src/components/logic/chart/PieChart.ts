import { computed, ref } from "vue";

export function PieChart(props: any) {
  const chartData = computed(() => {
    return {
      labels: props.data?.map((item: any) => item.country),
      datasets: [
        {
          data: props.data?.map((item: any) => item.totalSales),
        },
      ],
    };
  });

  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#495057",
          font: { size: 13 },
        },
      },
    },
  });

  return { chartData, chartOptions };
}
