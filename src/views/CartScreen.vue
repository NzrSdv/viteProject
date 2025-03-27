<script setup>
import cart from "../business/cart";
import CartCardComponent from "../cart/CartCardComponent.vue";

</script>

<template>
  <main class="main">
    <section class="section--gap">
      <div class="container">
        <CartCardComponent :product="cart[0]"/>

      </div>
    </section>
  </main>
</template>
<script>
export default {
  components: { CartCardComponent },
};
</script>
<style scoped></style>
