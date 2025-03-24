<script setup>
import FooterLinksComponent from "./FooterLinksComponent.vue";
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <h2 class="title">Присоединяйтесь</h2>
      </div>
      <div class="right">
        <FooterLinksComponent
          v-for="(item, index) in footerInfo"
          :key="index"
          :info="item"
        />
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
  components: { FooterLinksComponent },
  data() {
    return {
      footerInfo: [
        {
          title: "каталог",
          linkRoute: { name: "Catalog" },
          links: [
            { name: "Шкафы (МДФ)" },
            { name: "Шкафы (распашные)" },
            { name: "Шкафы (купе)" },
            { name: "Спальные гарнитуры" },
            { name: "Кровати" },
            { name: "Диваны" },
            { name: "Пуфики" },
            { name: "Кухонные гарнитуры" },
            { name: "Столы" },
            { name: "Прихожие" },
            { name: "Комоды" },
            { name: "Стеллажи" },
            { name: "Б/У" },
          ],
        },
        {
          title: "навигация",
          linkRoute: { base: "Catalog" },

          links: [
            { name: "О компании" },
            { name: "Акции" },
            { name: "Доставка и оплата" },
          ],
        },
        {
          title: "контакты",
          linkRoute: { base: "Catalog" },
          links: [{ name: "Cвяжитесь с нами" }],
        },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  margin-top: 100px;
  min-height: 346px;
  background-color: #141414;
  padding: 34px 57px;
}
.footer .container {
  display: flex;
  justify-content: flex-start;
  gap: 125px;
  flex-wrap: wrap;
  padding-bottom: 38px;
  border-bottom: 1px solid #ffffff1a;
}
.title {
  color: white;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;
}
.right {
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
