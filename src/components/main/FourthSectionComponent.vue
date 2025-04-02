<script setup>
import CategoryCard from "../../UI/CategoryCard.vue";

import Category1 from "@/assets/photos/Category1_photo.png";
import Category2 from "@/assets/photos/Category2_photo.png";
import Category3 from "@/assets/photos/Category3_photo.png";
import LineDivision from "../../UI/LineDivision.vue";
</script>
<template>
  <seciton class="section--gap">
    <div class="container">
      <h2 class="section--title">Наши категории товаров</h2>
      <div class="content">
        <CategoryCard v-for="(item, index) in info" :key="index" :info="item" />
      </div>
      <LineDivision />
    </div>
  </seciton>
</template>
<script>
export default {
  name: "FourthSectionComponent",
  components: {
    CategoryCard,
    LineDivision,
  },
  data() {
    return {
      info: [
        {
          img: Category1,
          title: "Шкафы (МДФ)",
          subTitle:
            "Стильные и прочные шкафы из МДФ для хранения и организации пространства.",
          link: "/catalog/Шкафы (МДФ)",
        },
        {
          img: Category2,
          title: "Шкафы (распашные)",
          subTitle:
            "Классические распашные шкафы с удобными дверцами для вашего интерьера.",
          link: "/catalog/Шкафы (распашные)",
        },
        {
          img: Category3,
          title: "Шкафы (купе)",
          subTitle:
            "Классические распашные шкафы с удобными дверцами для вашего интерьера.",
          link: "/catalog/Шкафы (купе)",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>
