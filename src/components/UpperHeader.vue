<template >
<div class="header--upper">
        <a href="#">
          <div class="header--logo">
            <img src="../assets/Logo_icon.svg" />
            Hello
          </div>
        </a>
        <div class="header--business">
          <div class="business--btn">
            <label
              ><img src="../assets/Search_icon.svg" />
              Поиск
              <!-- <input placeholder="" v-model="searchInput" /> -->
            </label>
          </div>
          <div class="business--btn" @click="() => console.log('clicked')">
            <label>
              <img src="../assets/Cart_icon.svg" />
              Корзина
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
}
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
  font-size:26px;
}
.header--business {
  display: flex;
  justify-content: flex-end;
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
  width: 100px;
  /* typography */
  font-family: "Lato";
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0%;
  text-transform: uppercase;
}

</style>