import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "./views/HomeScreen.vue";
import CatalogScreen from "./views/CatalogScreen.vue";

const routes = [
  { path: "/", name: "", component: HomeScreen },
  { path: "/catalog", name: "", component: CatalogScreen },
];

const router = createRouter({
    routes,history:createWebHistory()
})

export default router;
