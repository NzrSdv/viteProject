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
.section--gap .container {
  margin-top: 55px;
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
.content{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap:30px;
}
</style>
