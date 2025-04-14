import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "@/views/HomeScreen.vue";
import CatalogScreen from "@/views/CatalogScreen.vue";
import ProductScreen from "../views/ProductScreen.vue";
import CartScreen from "../views/CartScreen.vue";
import OrderScreen from "../views/OrderScreen.vue";
import ErrorScreen from "../views/ErrorScreen.vue";

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
  { path: "/order/:id", name: "Order", component: OrderScreen },
  {path:"/:pathMatch(.*)*",name:"Error",component:ErrorScreen}
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if(to.hash){
      return {
        el:to.hash,
        behavior:'smooth'
      }
    }
    return {top:0,behavior:'smooth'}
  },
});

export default router;
