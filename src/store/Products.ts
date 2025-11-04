import { defineStore } from "pinia";
import ApiService from "../core/services/ApiService";
import { ref } from "vue";
import type { AxiosRequestConfig } from "axios";

interface Products {
  stockCode: string;
  description: string;
  unitPrice: number;
}

interface TopProducts {
  totalSold: number;
  product: string;
}

export const useProductsStore = defineStore("products", () => {
  // State
  const products = ref<Products[]>([]);
  const topProducts = ref<TopProducts[]>([]);
  const isLoading = ref(true);

  // Actions
  function getProducts(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/products", config)
      .then(({ data }) => {
        products.value = data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTopProducts(params: any) {
    const config: AxiosRequestConfig = {
      params: params,
    };
    return ApiService.query("/api/products/topProducts", config)
      .then(({ data }) => {
        // console.log(data);
        topProducts.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { products, topProducts, isLoading, getProducts, getTopProducts };
});
