<script setup>
import FirstSectionComponent from "./FirstSectionComponent.vue";
import ProductsRow from "../product/ProductsRow.vue";
import ThirdSectionComponent from "./ThirdSectionComponent.vue";
import FourthSectionComponent from "./FourthSectionComponent.vue";
import FifthSectionComponent from "./FifthSectionComponent.vue";
import { useStore } from "vuex";
import { computed } from "vue";
// import madeProducts from "../../business/products";
const store = useStore();
const products = computed(() => store.state.products);
console.log(products.value)
</script>
<template>
  <main class="main">
    <FirstSectionComponent />
    <ProductsRow line="false" title="Популярные товары" :products="products.slice(0,4)" />
    <ThirdSectionComponent />
    <FourthSectionComponent />
    <FifthSectionComponent />
  </main>
</template>

<script>
export default {
  components: {
    FirstSectionComponent,
    ProductsRow,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
  },
};
</script>
<style>
.main {
  margin-top: 45px;
}
</style>
