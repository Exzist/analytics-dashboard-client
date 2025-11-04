import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/ui/views/Dashboard.vue"),
  },
  {
    path: "/products",
    component: () => import("../components/ui/views/Products.vue"),
  },
  {
    path: "/customers",
    component: () => import("../components/ui/views/Customers.vue"),
  },
  {
    path: "/transactions",
    component: () => import("../components/ui/views/Transactions.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
