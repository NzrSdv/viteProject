<script setup>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
import { useStore } from "vuex";
// import { useStore } from "vuex";
// import { computed } from "vue";
// const store = useStore();
// store.dispatch('fetchProducts')
// const products = computed(() => store.getters.getProducts())
// console.log(products);
</script>

<template>
  <HeaderComponent />
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <FooterComponent />
</template>

<script>
export default {
  computed: {
    showProducts() {
      console.log(this.$store.getters("getProducts"));
    },
  },
  methods: {
    load() {
      this.$store.dispatch("fetchProducts");
    },
  },
  created() {
    this.load();
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
</style>
