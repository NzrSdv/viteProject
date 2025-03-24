<template>
  <div class="wrapper">
    <h3 class="links-title">{{ info.title }}</h3>
    <ul class="links">
      <li v-for="(item, index) in info.links" :key="index">
        <router-link :to="`/catalog/${item.name}`">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FooterLinksComponent",
  props: {
    info: Object,
  },
};
</script>
<style scoped>
.wrapper {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:18px;
}
.links-title {
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2%;
  text-transform: uppercase;
}
ul.links {
  max-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  column-gap: 43px;
  row-gap: 7px;
  flex-wrap: wrap;
}
ul li {
  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0%;
}
</style>
