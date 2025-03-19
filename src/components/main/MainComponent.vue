<script setup>
import FirstSectionComponent from "./FirstSectionComponent.vue";
import SecondSectionComponent from "./SecondSectionComponent.vue";
import ThirdSectionComponent from "./ThirdSectionComponent.vue";
</script>
<template>
  <main class="main">
    <FirstSectionComponent />
    <SecondSectionComponent />
    <ThirdSectionComponent />
  </main>
</template>

<script>
export default {
  components: {
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
  },
};
</script>
<style>
.main {
  margin-top: 45px;
}
.section--gap{
  margin-top: 55px;
}
.section--gap .container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 65px;
}
.section--title {
  font-family: "Raleway";
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  letter-spacing: 0%;
  vertical-align: bottom;
}
</style>
