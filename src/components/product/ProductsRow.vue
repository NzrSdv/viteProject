<script setup>
import ProductCard from "./ProductCard.vue";
import LineDivision from "@/UI/LineDivision.vue";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">{{ title }}</h2>
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
  props:{
    title:String,
    products:Array
  },
};
</script>
<style scoped>
section {
  margin-top: 45px;
}

</style>
