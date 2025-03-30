<script setup>
import madeProducts from "../business/products";

import CartCardComponent from "../cart/CartCardComponent.vue";
</script>

<template>
  <main class="main">
    <section class="section--gap">
      <div class="container flex flex-col">
        <div class="flex w-full flex-col" v-for="(item, index) in cart" :key="index">
          <CartCardComponent :line="true" :cartProduct="item"/>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  components: { CartCardComponent },
  data() {
    return {
      cart: [],
    };
  },
  created(){
    for(let i = 0; i < 4 ; i++){
      this.cart.push(madeProducts[0][i])
    }
  }
};
</script>
<style scoped></style>
