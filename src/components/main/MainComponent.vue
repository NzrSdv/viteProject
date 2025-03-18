<template>
  <main class="main">
    <section class="first--section">
      <div class="section--imgs">
        <img class="bg--img" src="@/assets/Home_photo.png" alt="" />
        
      </div>
      <div class="section--content">
        <div class="left--arrow arrow"><</div>
        <div class="left">
          <div class="text">
            <h2 class="title">Полная обстановка за один день!</h2>
            <h4 class="sub-title">Гарантируем качество и долговечность.</h4>
          </div>
          <GradientButton
            text="Подробнее"
            :clickFunction="() => console.log('clicked the button gradient')"
          />
        </div>
      </div>
      <div class="front--imgs">
        <img class="deliver--img" src="@/assets/Deliverer_photo.png" />
      </div>
    </section>
  </main>
</template>

<script>
import GradientButton from "../../UI/GradientButton.vue";
export default {
  components: { GradientButton },
};
</script>
<style scoped>
.main {
  margin-top: 45px;
}
.first--section {
  width: 100%;
  position: relative;
}
.section--imgs {
  position: absolute;
  
  z-index: 1;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.bg--img {
  width: 100%;
  height: auto;
  object-fit: fill;
}

.section--content {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(255, 255, 255, 0) 100%
  );
  color: white;
  display: flex;
  justify-content: flex-start;
}

.left {
  width: 573px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 35px;
  gap: 23px;
}
.arrow {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px;
}
.title {
  /* typo */
  font-family: "Raleway";
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 0%;
  vertical-align: bottom;
}
.sub-title {
  max-width: 306px;
  font-family: "Raleway";
  font-weight: 400;
  font-size: 27px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
}

.front--imgs{
  position: relative;
  width: 100%;
  height: 78dvh;
  background-color: transparent;
  z-index: 4;
}
.deliver--img {
  height: 100%;
  object-fit: cover;
  position: absolute;
  right: min(100px,7dvw);
  top: 0;
  bottom: 0;
  z-index: 4;
}

@media (max-width: 768px) {
  .deliver--img {
    display: none;
  }
}
</style>
