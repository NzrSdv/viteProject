<script setup>
import GradientButton from "./GradientButton.vue";
</script>
<template>
  <div
    class="h-131 bg-[#f6f6f6] rounded-2xl flex flex-col items-center justify-between p-2 pb-6"
  >
    <div
      class="w-382/400 h-62 rounded-2xl bg-cover bg-no-repeat bg-center overflow-hidden"
      :style="{ backgroundImage: `url(${info.img})` }"
    ></div>
    <div
      class="flex flex-col items-start justify-start gap-6 md:pl-7 font-[Raleway] text-center md:text-start"
    >
      <h2 class="w-full text-[#151515] font-semibold text-3xl/7">{{ info.title }}</h2>
      <p class="text-[#666666] font-medium text-base/6">
        {{ info.description }}
      </p>
    </div>
    <GradientButton text="Подбробнее" width="250px" />
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
/* .card {
  width: 400px;
  height: 515px;
  background-color: #f6f6f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 26px;
} */
/* .card--img {
  width: 383px;
  height: 248px;
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
} */
/* .information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap:24px;
  padding-left: 28px;
} */
/* .title {
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
} */
</style>
