<template>
  <div class="w-full flex flex-row justify-between items-center">
    <router-link :to="{ name: 'Home' }">
      <div
        class="flex items-center justify-center gap-8 font-semibold text-2xl"
      >
        <img src="@/assets/Logo_icon.svg" />
        <h2 class="md:block hidden">Hello</h2>
      </div>
    </router-link>
    <div class="flex justify-end gap-7 font-[Lato] font-medium font-xs uppercase">
      <div class="w-1/2 text-light-455 flex items-center justify-center">
        <label class="flex flex-row gap-2"
          ><img src="@/assets/Search_icon.svg" />
          <h2 class="md:block hidden">Поиск</h2>
          <!-- <input placeholder="" v-model="searchInput" /> -->
        </label>
      </div>
      <div
        class="w-1/2 text-light-455 flex g-2 items-center justify-center"
        @click="() => console.log('clicked')"
      >
        <router-link to="/cart">
          <label class="flex flex-row gap-2">
            <img src="@/assets/Cart_icon.svg" />
            <h2 class="md:block hidden">Корзина</h2>
          </label>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
};
</script>
