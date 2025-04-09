<script setup>
import InverseGradientButton from "../../UI/InverseGradientButton.vue";
import FirstImg from "@/assets/photos/Chair1_photo.png";
import SecondImg from "@/assets/photos/Chair2_photo.png";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">Акции, скидки</h2>

      <div
        class="w-full min-h-130 flex lg:flex-row flex-col justify-center lg:items-stretch gap-8"
      >
        <div
          class="w-full lg:w-2/3 min-h-full sm:px-15 py-10 md:py-25 rounded-3xl flex flex-col items-center md:items-start justify-end md:justify-center relative overflow-hidden"
        >
          <div
            class="w-full h-full absolute top-0 bottom-0 right-0 left-0 z-10"
          >
            <img class="w-auto h-full object-cover" :src="FirstImg" alt="" />
          </div>
          <div
            class="h-full flex flex-col items-start justify-center gap-11 z-20 font-[Raleway] text-white"
          >
            <div class="py-2 px-4 bg-white/20 rounded-full text-2xl/8">
              <h3 class="">9–16 сентября</h3>
            </div>
            <div
              class="flex flex-col items-start justify-center gap-8 font-[Raleway] text-[#303030]"
            >
              <h2 class="max-w-50 font-bold text-5xl/14">Осенние скидки</h2>
              <h4 class="font-normal text-2xl/8">На распашные шкафы</h4>
            </div>
            <InverseGradientButton text="Подробнее" />
          </div>
        </div>
        <div
          class="lg:w-1/3 w-full lg:min-h-full min-h-130 py-13 px-11 rounded-3xl object-cover flex flex-col items-center lg:items-start justify-center relative overflow-hidden"
        >
          <div
            class="w-full h-full  absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center"
          >
            <img class="h-full object-cover " :src="SecondImg" alt="" />
          </div>
          <div
            class="h-full flex flex-col items-center justify-start gap-11 z-30"
          >
            <div
              class="flex flex-col items-start justify-center gap-8 font-[Raleway] text-[#303030]"
            >
              <h2 class="max-w-50 font-semibold text-5xl/12">Кухонные столы</h2>
              <h4 class="font-normal text-2xl/8">По спец. цене</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: { InverseGradientButton },
};
</script>
<style scoped>
/* .content {
  width: 100%;
  height: 520px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap:32px;

  align-items: stretch;
} */
/* 
.section--card {
  border-radius: 20px;
  object-fit: contain;
} */
/* .first--card { */
/* background: url() no-repeat; */
/* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 60px; */
/* } */

/* .card--content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 44px;
} */
/* .date--info {
  padding: 13px 15px;
  border-radius: 60px;
  background-color: rgba(255, 255, 255, 0.2);

  typography
  font-family: "Raleway";
  font-weight: 400;
  font-size: 23px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: white;
} */
/* .info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
} */
/* .first--card .card--title {
  max-width: 200px;

  typography
  font-family: "Raleway";
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: 0%;
  vertical-align: bottom;
} */

/* .first--card .card--subTitle {
  color: #303030;

  typography
  font-family: "Raleway";
  font-weight: 400;
  font-size: 23px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
} */
/* .second--card {
  background: url() no-repeat;
  background-position:right ;
  object-fit: cover;
  padding: 53px 0 0 0;
  justify-self: stretch;
} */
/* .second--card .card--content {
  justify-content: flex-start;
  align-items: center;
} */
.second--card .card--title {
  max-width: 200px;

  /* typography */
  font-family: "Raleway";
  font-weight: 600;
  font-size: 45px;
  line-height: 49px;
  letter-spacing: 0%;
  vertical-align: bottom;
}

.second--card .card--subTitle {
  color: #303030;

  /* typography */
  font-family: "Raleway";
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
}
</style>
