<script setup>
import DiscountMarker from "@/UI/DiscountMarker.vue";
import NewMarker from "@/UI/NewMarker.vue";
</script>
<template>
  <router-link :to="`/product/${product.id}`">
    <div
      class="card w-[232px] h-[312px] md:w-[290px] md:h-[390px] rounded flex flex-col justify-start items-start gap-6"
    >
      <div
        class="card--img w-full h-[176px] md:h-[220px] bg-cover bg-no-repeat relative bg-center"
        :style="{ backgroundImage: `url(${product.img})` }"
      >
        <DiscountMarker
          v-if="product.emphasis?.type == 'discount'"
          :discount="product.emphasis?.value"
        />
        <NewMarker v-if="product.emphasis?.type == 'new'" />
      </div>
      <div
        class="font-[Raleway] font-normal card--content w-full h-20 md:h-25 flex flex-col justify-between items-center md:items-start"
      >
        <div
          class="text flex flex-col items-center md:items-start justify-start max-w-67 gap-2"
        >
          <h4 class="md:text-xs/4 text-[#999999]">
            {{ product.classification }}
          </h4>
          <h2 class="name">{{ product.name }}</h2>
        </div>
        <div class="price">
          <h3 class="oldPrice" v-if="product.price?.oldPrice">
            {{ product.price.oldPrice.value }}
          </h3>
          <h3 class="currentPrice">{{ product.price.currentPrice.value }}</h3>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProductCard",
  components: { DiscountMarker, NewMarker },
  props: {
    product: Object,
  },
};
</script>
<style scoped>
/* .card {
  background-color: var(--color-block);
  width: 290px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
  border-radius: 10px 10px 0 0;
} */
/* .card--img {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;

  background-position: center;
  border: 1px solid var(--color-bg);
} */
/* .card--content {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
} */
/* .text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 270px;
  gap: 10px;
} */
/* .classification {
  font-family: "Raleway";
  font-weight: 400;
  font-size: 13px;
  line-height: 122%;
  letter-spacing: 0%;
  color: #999999;
} */
.name {
  font-family: "Raleway";
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0%;
  color: #333333;
}
.price {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
}
.currentPrice {
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  line-height: 20px;
  letter-spacing: 0%;
}
.oldPrice {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0%;
  text-decoration: line-through;
  color: #999999;
}
</style>
