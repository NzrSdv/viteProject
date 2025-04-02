<script setup>
import BottomHeader from './BottomHeader.vue';
import UpperHeader from './UpperHeader.vue';


</script>
<template>
  <header class="flex justify-center h-29 bg-white pt-4 shadow-md ">
    <div class="container w-full flex flex-col items-stretch gap-3">
      <UpperHeader/>
      <BottomHeader/>
    </div>
  </header>
</template>
<script>
export default {
  
};
</script>
<style scoped>
</style>
