<script setup>
import madeProducts from '../business/products';

import CartCardComponent from "../cart/CartCardComponent.vue";
</script>

<template>
  <main class="main">
    <section class="section--gap">
      <div class="container flex flex-col">
        <div class="flex w-full flex-col">
          <div v-for="(prod,index) in cart" :key="index" >
            <CartCardComponent :cartProduct="prod"/>
          </div>
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
      cart: madeProducts[0].slice(0,4),
    };
  },
};
</script>
<style scoped></style>
