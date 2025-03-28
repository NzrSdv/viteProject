import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";
import CatalogScreen from "@/views/CatalogScreen.vue";
import ProductScreen from "../views/ProductScreen.vue";
import CartScreen from "../views/CartScreen.vue";

const routes = [
  { path: "/", name: "Home", component: HomeScreen },
  {
    path: "/catalog/:category(.*)*",
    name: "Catalog",
    component: CatalogScreen,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductScreen,
  },
  { path: "/cart", name: "Cart", component: CartScreen },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
});

export default router;
