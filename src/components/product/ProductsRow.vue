<script setup>
import ProductCard from "./ProductCard.vue";
import LineDivision from "@/UI/LineDivision.vue";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title flex flex-col gap-5 w-full">
        {{ title }}
        <div v-if="line" class="w-full h-[1px] bg-light-4"></div>
      </h2>
      <div class="content">
        <ProductCard
          v-for="(item, index) in products"
          :key="index"
          :product="item"
        />
        <LineDivision />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ProductsRow",
  components: { ProductCard, LineDivision },
  props: {
    line: Boolean,
    title: String,
    products: Array,
  },
};
</script>
<style scoped>
section {
  margin-top: 45px;
}
</style>
