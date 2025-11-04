import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Lara from "@primeuix/themes/lara";
import ApiService from "./core/services/ApiService";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
});
ApiService.init(app);
app.mount("#app");
