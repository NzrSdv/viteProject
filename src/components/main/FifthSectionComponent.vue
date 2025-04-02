<script setup>
import DeliveryCard from "../../UI/DeliveryCard.vue";
import Delivery1 from "@/assets/photos/Delivery1_photo.png";
import Delivery2 from "@/assets/photos/Delivery2_photo.png";
import Delivery3 from "@/assets/photos/Delivery3_photo.png";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">Доставка и оплата</h2>
      <div class="content">
        <DeliveryCard v-for="(item, index) in info" :key="index" :info="item"/>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FifthSectionComponent",
  components: { DeliveryCard },
  data() {
    return {
      info: [
        {
          img:Delivery1,
          title:"Условия доставки",
          description:"Узнайте подробности о нашей бесплатной доставке и профессиональной сборке."
        },
        {
          img:Delivery2,
          title:"Условия оплаты",
          description:"Откройте все доступные способы оплаты и условия рассрочки."
        },
        {
          img:Delivery3,
          title:"О компании",
          description:"Узнайте больше о компании и наших преимуществах."
        },
      ],
    };
  },
};
</script>
<style scoped>

</style>
