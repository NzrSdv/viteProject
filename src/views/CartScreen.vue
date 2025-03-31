<script setup>
import CartCardComponent from "@/components/cart/CartCardComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cartStore = computed(() => store.state.cart);
</script>

<template>
  <main class="main">
    <section class="section--gap">
      <div class="container flex flex-col">
        <div
          class="flex w-full flex-col"
          v-for="(item, index) in cart"
          :key="index"
        >
          <CartCardComponent :line="true" :cartProduct="item" />
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
  created() {
    const store = useStore();
    this.cart = computed(() => store.state.cart);
    console.log(this.cart);
  },
};
</script>
<style scoped></style>
