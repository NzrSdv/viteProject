<script setup>
import FirstSectionComponent from "./FirstSectionComponent.vue";
import ProductsRow from "../product/ProductsRow.vue";
import ThirdSectionComponent from "./ThirdSectionComponent.vue";
import FourthSectionComponent from "./FourthSectionComponent.vue";
import FifthSectionComponent from "./FifthSectionComponent.vue";
import madeProducts from "../../business/products";

</script>
<template>
  <main class="main">
    <FirstSectionComponent />
    <ProductsRow title="Популярные товары" :products="madeProducts[0].slice(0,4)" />
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
