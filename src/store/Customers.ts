import { defineStore } from "pinia";
import ApiService from "../core/services/ApiService";
import { ref } from "vue";
import type { AxiosRequestConfig } from "axios";

interface Customer {
  customerId: string;
  country: string;
}

export const useCustomerStore = defineStore("customers", () => {
  // State
  const customers = ref<Customer[]>([]);
  const customersCount = ref();
  const countriesCount = ref();
  const isLoading = ref(true);

  // Actions
  function getCustomers(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/customers", config)
      .then(({ data }) => {
        customers.value = data.customers;
        customersCount.value = data.total;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCustomersCount(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/customers/customersCount", config)
      .then(({ data }) => {
        customersCount.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCountriesCount(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/customers/countriesCount", config)
      .then(({ data }) => {
        countriesCount.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    customers,
    isLoading,
    customersCount,
    countriesCount,
    getCustomers,
    getCustomersCount,
    getCountriesCount,
  };
});
