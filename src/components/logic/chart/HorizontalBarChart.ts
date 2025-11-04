import { computed, ref } from "vue";

export function HorizontalBarChart(props: any) {
  // const chartData = ref();
  const chartOptions = ref();

  const chartData = computed(() => ({
    labels: props.data.map((item: any) => item.product),
    datasets: [
      {
        label: "Кількість продажів",
        data: props.data.map((item: any) => item.totalSold),
        fill: false,
        borderColor: "#42A5F5",
        backgroundColor: "#42A5F5",
        tension: 0.3,
      },
    ],
  }));

  chartOptions.value = {
    responsive: true,
    indexAxis: "y",
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#495057" },
        grid: { color: "#ebedef" },
      },
      y: {
        ticks: { color: "#495057" },
        grid: { color: "#ebedef" },
      },
    },
  };

  return { chartData, chartOptions };
}
