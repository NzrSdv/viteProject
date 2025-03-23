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
        <FooterLinksComponent v-for="(item, index) in footerInfo" :key="index" :info="item"/>
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
          links: [
            { name: "Шкафы (МДФ)", link: "" },
            { name: "Шкафы (распашные)", link: "" },
            { name: "Шкафы (купе)", link: "" },
            { name: "Спальные гарнитуры", link: "" },
            { name: "Кровати", link: "" },
            { name: "Диваны", link: "" },
            { name: "Пуфики", link: "" },
            { name: "Кухонные гарнитуры", link: "" },
            { name: "Столы", link: "" },
            { name: "Прихожие", link: "" },
            { name: "Комоды", link: "" },
            { name: "Стеллажи", link: "" },
            { name: "Б/У", link: "" },
          ],
        },
        {
          title: "навигация",
          links: [
            { name: "О компании", link: "" },
            { name: "Акции", link: "" },
            { name: "Доставка и оплата", link: "" },
          ],
        },
        {
          title: "контакты",
          links: [
            { name: "Cвяжитесь с нами", link: "" },
          ],
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
.footer .container{
    display: flex;
    justify-content: flex-start;
    gap:125px;
    flex-wrap: wrap;
    padding-bottom: 38px;
    border-bottom: 1px solid #FFFFFF1A;
}
.title {
  color: white;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;
}
.right{
    display:flex;
    gap:60px;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>
