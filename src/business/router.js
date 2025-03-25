import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";
import CatalogScreen from "@/views/CatalogScreen.vue";

const routes = [
  { path: "/", name: "Home", component: HomeScreen },
  {
    path: "/catalog/:category(.*)*",
    name: "Catalog",
    component: CatalogScreen,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return {
        el:to.hash
      }
    }
  }
});

export default router;
