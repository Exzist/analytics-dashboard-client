import { computed, ref } from "vue";

export function LineChart(props: any) {
  const chartData = ref();
  const chartOptions = ref();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const salesData = computed(() => {
    return months.map((_, index) => {
      const found = props.data?.find((d: any) => d.month === index + 1);
      return found ? found.totalSales : 0;
    });
  });

  chartData.value = {
    labels: months,
    datasets: [
      {
        label: "Total Sales",
        data: salesData,
        fill: false,
        borderColor: "#42A5F5",
        backgroundColor: "#42A5F5",
        tension: 0.3,
      },
    ],
  };

  chartOptions.value = {
    responsive: true,
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
