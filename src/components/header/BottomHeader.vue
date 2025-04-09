<template>
  <div
    class="pt-2 px-4 border-t border-solid border-light-445 flex items-center justify-start"
  >
    <div
      v-if="status"
      class="fixed w-screen h-screen bg-black/20 top-0 left-0 md:hidden z-50"
    ></div>
    <nav class="flex md:flex-row flex-col md:gap-8">
      <div
        class="size-6 flex flex-col items-stretch justify-between md:hidden"
        @click="() => (status = !status)"
      >
        <div class="w-full h-[2px] bg-black"></div>
        <div class="w-full h-[2px] bg-black"></div>
        <div class="w-full h-[2px] bg-black"></div>
      </div>
      <ul
        :class="[
          'fixed top-0 left-0 px-3 h-screen md:h-min bg-white md:bg-transparent md:static flex flex-col md:flex-row z-60 p-2 rounded items-center pt-10 md:pt-0 gap-6 md:gap-8 justify-start md:justify-center text-dark-05 font-[Raleway] font-medium text-base/6',
          status ? 'md:flex' : 'md:flex hidden',
        ]"
      >
        <li
          v-if="$route.path != '/'"
          @click="() => (status = !status)"
          class="py-4 md:border-none border-b border-solid px-4 border-black/20 w-full text-center hover:bg-black/20 duration-300"
        ><router-link to="/">Главная</router-link></li>
        <li
          @click="() => (status = !status)"
          class="py-4 md:border-none border-b border-solid px-4 border-black/20 w-full text-center hover:bg-black/20 duration-300"
        >
          <router-link to="/catalog/Шкафы (МДФ)">Каталог товаров</router-link>
        </li>
        <li
          @click="() => (status = !status)"
          class="py-4 md:border-none border-b border-solid px-4 border-black/20 w-full text-center hover:bg-black/20 duration-300"
        >
          <router-link to="/catalog/Шкафы (МДФ)">Акции</router-link>
        </li>
        <li
          @click="() => (status = !status)"
          class="py-4 md:border-none border-b border-solid px-4 border-black/20 w-full text-center hover:bg-black/20 duration-300"
        >
          <router-link :to="{ path: $route.path, hash: '#footerAnchor' }"
            >О нас</router-link
          >
        </li>
        <li
          @click="() => (status = !status)"
          class="py-4 md:border-none border-b border-solid px-4 border-black/20 w-full text-center hover:bg-black/20 duration-300"
        >
          <router-link :to="{ path: $route.path, hash: '#footerAnchor' }"
            >Контакты
          </router-link>
        </li>
        <li
          class="py-4 text-3xl text-red-700 hover:bg-black/20 cursor-pointer w-full text-center"
          @click="() => (status = !status)"
        >
          X
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
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
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
