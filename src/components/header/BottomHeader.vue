<template>
  <div class="header--bottom">
    <nav class="nav">
      <ul>
        <li>
          <div class="burger--menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </li>
        <li>
          <router-link to="/catalog">Каталог товаров</router-link>
        </li>
        <li>
          <router-link to="/">Акции</router-link>
        </li>
        <li>
          <router-link to="/">О нас</router-link>
        </li>
        <li>
          <router-link to="/">Контакты </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header--bottom {
  padding-top: 14px;
  border-top: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  /* typography */
  color: #151515;
  font-family: "Raleway";
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0%;
}
.burger--menu {
  width: 21px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}
.burger--menu .line {
  width: 100%;
  height: 3px;
  background: black;
}

@media (max-width: 768px) {
  .nav ul {
    flex-direction: column;
    background-color: var(--color-block);
    display: none;
  }
}
</style>
