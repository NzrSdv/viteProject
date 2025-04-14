<script setup>
import NeutralButton from "@/UI/NeutralButton.vue";
import Delete from "@/assets/icons/delete_icon (2).svg";
import { useStore } from "vuex";
const store = useStore();
</script>

<template>
  <div class="w-full flex flex-col gap-6">
    <div
      class="w-full md:h-50 flex flex-col gap-10 md:flex-row justify-between items-center"
    >
      <div
        class="left flex h-full flex-col md:flex-row items-center gap-9 md:gap-7"
      >
        <div
          class="w-50 h-50 rounded-[13px] overflow-hidden h-full border border-solid border-light-45"
        >
          <img class="w-full h-auto" :src="cartProduct.img" alt="" />
        </div>
        <div
          class="flex flex-col h-full justify-between items-center md:gap-0 gap-3 md:items-start"
        >
          <div class="flex flex-col text-center md:text-start gap-3">
            <h2 class="font-[Raleway] font-semibold font-base/5">
              {{ cartProduct.name }}
            </h2>
            <h5 class="font-[Raleway] font-normal text-[9px] text-dark-5">
              Код Товара: {{ cartProduct.code }}
            </h5>
            <h3 class="font-[Inter] font-normal text-normal/5">
              {{ cartProduct.currentPrice }}₸
            </h3>
            <h4
              v-if="cartProduct.oldPrice != 0"
              class="line-through text-light-5 font-[Inter] text-[10px]"
            >
              {{ cartProduct.oldPrice }}₸
            </h4>
          </div>
          <router-link :to="`/order/${cartProduct.id}`">
            <NeutralButton text="Оформить заказ" />
          </router-link>
        </div>
      </div>
      <div class="right">
        <button
          @click="store.commit('removeCart', cartProduct.id)"
          class="flex flex-row gap-2 font-[Inter] text-[14px] text-dark-2 duration-200 hover:scale-120 border border-slate-200 border-solid px-3 py-3 rounded-sm"
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
