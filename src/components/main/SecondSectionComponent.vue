<script setup>
import ProductCard from "../product/ProductCard.vue";

// imgs
import Wardrobe_1 from "@/assets/Wardrobe1_photo.png";
import Wardrobe_2 from "@/assets/Wardrobe2_photo.png";
import Wardrobe_3 from "@/assets/Wardrobe3_photo.png";
import Wardrobe_4 from "@/assets/Wardrobe4_photo.png";
import LineDivision from "../../UI/LineDivision.vue";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">Популярные товары</h2>
      <div class="content">
        <ProductCard
          v-for="(item, index) in products"
          :key="index"
          :product="item"
        />
        <LineDivision />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SecondSectionComponent",
  components: { ProductCard, LineDivision },
  data() {
    return {
      products: [
        {
          name: "Комфорт 4 дуб сонома белый без ящика",
          classification: "Офисные кресла",
          img: Wardrobe_1,
          price: {
            oldPrice: {
              value: "25 000",
            },
            currentPrice: {
              value: "15 000",
            },
          },
          emphasis: {
            type: "discount",
            value: "-50%",
          },
        },
        {
          name: "Комфорт 3 дуб бунратти с зеркалом",
          classification: "Мебель для персонала",
          img: Wardrobe_2,
          price: {
            currentPrice: {
              value: "15 000",
            },
          },
          emphasis: {
            type: "new",
          },
        },
        {
          name: "Версаль бетон пайн",
          classification: "Мебель для персонала",
          img: Wardrobe_3,
          price: {
            currentPrice: {
              value: "15 000",
            },
          },
        },
        {
          name: "Комфорт 3 дуб сонома серый",
          classification: "Офисные кресла",
          img: Wardrobe_4,
          price: {
            oldPrice: {
              value: "25 000",
            },
            currentPrice: {
              value: "15 000",
            },
          },
          emphasis: {
            type: "discount",
            value: "-50%",
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
section {
  margin-top: 45px;
}

</style>
