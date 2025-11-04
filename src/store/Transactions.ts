import { defineStore } from "pinia";
import ApiService from "../core/services/ApiService";
import { ref } from "vue";
import type { AxiosRequestConfig } from "axios";

interface Transactions {
  invoiceNo: string;
  customerId: string;
  stockCode: string;
  quantity: number;
  invoiceDate: Date;
  unitPrice: number;
}

export const useTransactionsStore = defineStore("transactions", () => {
  // State
  const transactions = ref<Transactions[]>([]);
  const totalSales = ref();
  const monthlySales = ref();
  const transactionsCount = ref();
  const salesByCountry = ref();
  const lastTransactions = ref();
  const isLoading = ref(true);

  // Actions
  function getTransactions(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/sales", config)
      .then(({ data }) => {
        transactions.value = data.sales;
        transactionsCount.value = data.total;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTotalSales(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/sales/totalSales", config)
      .then(({ data }) => {
        totalSales.value = data.totalSales;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMonthlySales(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/sales/monthlySales", config)
      .then(({ data }) => {
        monthlySales.value = data.monthlySales;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSalesByCountry(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/sales/salesByCountry", config)
      .then(({ data }) => {
        salesByCountry.value = data.salesByCountry;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getLastTransactions(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/sales/lastTransactions", config)
      .then(({ data }) => {
        lastTransactions.value = data.lastTransactions;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    transactions,
    isLoading,
    totalSales,
    transactionsCount,
    monthlySales,
    salesByCountry,
    lastTransactions,
    getTransactions,
    getTotalSales,
    getMonthlySales,
    getSalesByCountry,
    getLastTransactions,
  };
});
