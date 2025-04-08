<template>
  <div
    class="pt-2 border-t border-solid border-light-445 flex items-center justify-start"
  >
    <nav class="flex md:flex-row flex-col md:gap-8">
      <div
        class="size-6 flex flex-col items-stretch justify-between"
        @click="() => (status = !status)"
      >
        <div class="w-full h-[2px] bg-black"></div>
        <div class="w-full h-[2px] bg-black"></div>
        <div class="w-full h-[2px] bg-black"></div>
      </div>
      <ul
        :class="[
          'flex flex-col md:flex-row md:shadow-none z-20 p-2 rounded items-center justify-center gap-8 text-dark-05 font-[Raleway] font-medium text-base/6',
          status ? 'shadow-md bg-none' : 'shadow-none ',
        ]"
      >
        <li class="hover:bg-grey-500" v-if="status">
          <router-link to="/catalog/Шкафы (МДФ)">Каталог товаров</router-link>
        </li>
        <li class="hover:bg-grey-500" v-if="status">
          <router-link to="/catalog/Шкафы (МДФ)">Акции</router-link>
        </li>
        <li class="hover:bg-grey-500" v-if="status">
          <router-link :to="{path:$route.path,hash:'#footerAnchor'}">О нас</router-link>
        </li>
        <li class="hover:bg-grey-500" v-if="status">
          <router-link :to="{path:$route.path,hash:'#footerAnchor'}">Контакты </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: true,
    };
  },
};
</script>
<style scoped>
/* .header--bottom {
  padding-top: 14px;
  border-top: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
} */

/* .nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  color: #151515;
  font-family: "Raleway";
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0%;
} */
/* .burger--menu {
  width: 21px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
} */
</style>
