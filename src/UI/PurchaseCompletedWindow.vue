<script setup>
import CheckCircle from "@/assets/icons/CheckCircle_icon.svg";
import GradientButton from "./GradientButton.vue";
</script>

<template lang="">
  <section
    class="w-full h-full flex items-center justify-center static top-0 bottom-0 left-0 right-0 bg-black/20"
  >
    <div
      class="w-90 h-67 rounded-xl flex flex-col items-center gap-6 bg-white p-6"
    >
      <div class="flex flex-col w-76 items-center justify-center gap-5">
        <div
          class="size-12 bg-[#039855]/10 rounded-full flex items-center justify-center"
        >
          <div
            class="size-10 bg-[#039855]/20 rounded-full flex items-center justify-center"
          >
            <img :src="CheckCircle" alt="" />
          </div>
        </div>
        <div class="w-full flex flex-col items-center justify-center gap-2">
          <h2 class="font-[Inter] font-medium text-lg/7 text-center">
            Успешно оплачено
          </h2>
          <p
            class="w-full font-[Inter] font-normal text-sm/5 text-center text-[#667085]"
          >
            Ваш заказ успешно оплачен, ожидайте пожалуйста доставка в течений
            1-3 дней
          </p>
        </div>
      </div>

      <GradientButton
        class="w-full py-2.5 px-25"
        @click="clicked()"
        text="Продолжить"
      />
    </div>
  </section>
</template>
<script>
export default {
    props:{
        clicked:Function
    },
  components: { GradientButton },
};
</script>
<style lang=""></style>
