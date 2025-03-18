<template>
  <div class="header--upper">
    <router-link to="/">
      <div class="header--logo">
        <img src="@/assets/Logo_icon.svg" />
        <h2 class="extra-text">Hello</h2>
      </div>
    </router-link>
    <div class="header--business">
      <div class="business--btn">
        <label
          ><img src="@/assets/Search_icon.svg" />
          <h2 class="extra-text">Поиск</h2>
          <!-- <input placeholder="" v-model="searchInput" /> -->
        </label>
      </div>
      <div class="business--btn" @click="() => console.log('clicked')">
        <label>
          <img src="@/assets/Cart_icon.svg" />
          <h2 class="extra-text">Корзина</h2>
        </label>
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
<style scoped>
.header--upper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header--logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 33px;
  font-weight: 600;
  font-size: 26px;
}
.header--business {
  display: flex;
  justify-content: flex-end;
  gap: 27px;
}
.business--btn,
.business--btn label {
  width: 1fr;
  color: #b5b5b5;
  display: flex;
  gap: 8px;
  align-items: center;
  vertical-align: center;
}
.business--btn input,
.business--btn input::placeholder,
label {
  /* typography */
  font-family: "Lato";
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .extra-text {
    display: none;
  }
}
</style>
