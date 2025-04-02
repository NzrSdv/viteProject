<script setup>
import GradientButton from "./GradientButton.vue";
</script>
<template>
  <div class="card">
    <div
      class="card--img"
      :style="{ backgroundImage: `url(${info.img})` }"
    ></div>
    <div class="information">
      <h2 class="title">{{ info.title }}</h2>
      <p class="description">{{ info.description }}</p>
    </div>
    <GradientButton text="Подбробнее" width="250px"/>
  </div>
</template>
<script>
export default {
  name: "DeliveryCard",
  props: {
    info: Object,
  },
  components: { GradientButton },
};
</script>
<style scoped>
.card {
  width: 400px;
  height: 515px;
  background-color: #f6f6f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 26px;
}
.card--img {
  width: 383px;
  height: 248px;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}
.information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap:24px;
  padding-left: 28px;
}
.title {
  color: #151515;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 27px;
  line-height: 30px;
  letter-spacing: 0%;
  vertical-align: bottom;
}
.description {
  color: #666666;
  font-family: "Raleway";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
}
</style>
