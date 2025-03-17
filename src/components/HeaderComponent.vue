<script setup>
import BottomHeader from './BottomHeader.vue';
import UpperHeader from './UpperHeader.vue';


</script>
<template>
  <header class="header">
    <div class="container">
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
.header {
  display: flex;
  justify-content: space-between;
  height: 115px;
  background-color: var(--color-block);
  padding-top: 15px;
  box-shadow: 0px 0px 5px rgba(0,0,0,.2);
}
.header .container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14px;
}


</style>
