<script setup>
import NeutralButton from "@/UI/NeutralButton.vue";
import Delete from "@/assets/delete_icon (2).svg";
</script>

<template>
  <div class="w-full flex flex-col gap-6">
    <div class="w-full h-50 flex flex-row justify-between items-center">
      <div class="left flex h-full flex-row items-center gap-7">
        <div
          class="w-50 rounded-[13px] overflow-hidden h-full border border-solid border-light-45"
        >
          <img class="w-full h-auto" :src="cartProduct.img" alt="" />
        </div>
        <div class="flex flex-col h-full justify-between items-start">
          <div class="flex flex-col gap-3">
            <h2 class="font-[Raleway] font-semibold font-base/5">
              {{ cartProduct.name }}
            </h2>
            <h5 class="font-[Raleway] font-normal text-[9px] text-dark-5">
              Код Товара: {{ cartProduct.code }}
            </h5>
            <h3 class="font-[Inter] font-normal text-normal/5">
              {{ cartProduct.price.currentPrice.value }}
            </h3>
            <h4
              v-if="cartProduct.price.oldPrice != undefined"
              class="line-through text-light-5 font-[Inter] text-[10px]"
            >
              {{ cartProduct.price.oldPrice?.value }}
            </h4>
          </div>
          <router-link :to="`/order/${cartProduct.id}`">
            <NeutralButton text="Оформить заказ" />
          </router-link>
        </div>
      </div>
      <div class="right">
        <button
          class="flex flex-row gap-2 font-[Inter] text-[14px] text-dark-2"
        >
          <img :src="Delete" alt="" /> Удалить с корзины
        </button>
      </div>
    </div>
    <div class="h-[1px] w-full bg-light-4" v-if="line"></div>
  </div>
</template>
<script>
export default {
  name: "CartCardComponent",
  props: {
    line: Boolean,
    cartProduct: Object,
  },
  components: {
    NeutralButton,
  },
};
</script>
<style scoped></style>
