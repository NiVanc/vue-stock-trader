import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";

import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);

Vue.filter("currency", (value) => {
  return "€" + value.toLocaleString("de-DE");
});

const router = new VueRouter({
  mode: "history",
  routes,
});

axios.defaults.baseURL = "https://vue-stock-trader-edc59.firebaseio.com/";

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
