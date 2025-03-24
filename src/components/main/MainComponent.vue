<script setup>
import FifthSectionComponent from "./FifthSectionComponent.vue";
import FirstSectionComponent from "./FirstSectionComponent.vue";
import FourthSectionComponent from "./FourthSectionComponent.vue";
import SecondSectionComponent from "./SecondSectionComponent.vue";
import ThirdSectionComponent from "./ThirdSectionComponent.vue";
</script>
<template>
  <main class="main">
    <FirstSectionComponent />
    <SecondSectionComponent />
    <ThirdSectionComponent />
    <FourthSectionComponent/>
    <FifthSectionComponent/>
  </main>
</template>

<script>
export default {
  components: {
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent
  },
};
</script>
<style>
.main {
  margin-top: 45px;
}

</style>
