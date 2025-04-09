<script setup>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
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

<script></script>
<style>
.slide-enter-active,
.slide-leave-active{
  transition: all .4s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
</style>
