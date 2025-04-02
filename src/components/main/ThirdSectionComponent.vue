<script setup>
import InverseGradientButton from "../../UI/InverseGradientButton.vue";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">Акции, скидки</h2>

      <div class="content">
        <div class="section--card first--card">
          <div class="card--content">
            <div class="date--info">
              <h3>9–16 сентября</h3>
            </div>
            <div class="info">
              <h2 class="card--title">Осенние скидки</h2>
              <h4 class="card--subTitle">На распашные шкафы</h4>
            </div>
            <InverseGradientButton text="Подробнее" />
          </div>
        </div>
        <div class="section--card second--card">
          <div class="card--content">
            <div class="info">
              <h2 class="card--title">Кухонные столы</h2>
              <h4 class="card--subTitle">По спец. цене</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: { InverseGradientButton },
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 520px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap:32px;

  align-items: stretch;
}
.section--card {
  border-radius: 20px;
  object-fit: contain;
}
.first--card {
  background: url("@/assets/photos/Chair1_photo.png") no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 60px;
}

.card--content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 44px;
}
.date--info {
  padding: 13px 15px;
  border-radius: 60px;
  background-color: rgba(255, 255, 255, 0.2);

  /* typography */
  font-family: "Raleway";
  font-weight: 400;
  font-size: 23px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: white;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
}
.first--card .card--title {
  max-width: 200px;

  /* typography */
  font-family: "Raleway";
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: 0%;
  vertical-align: bottom;
}

.first--card .card--subTitle {
  color: #303030;

  /* typography */
  font-family: "Raleway";
  font-weight: 400;
  font-size: 23px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
}
.second--card {
  background: url("@/assets/photos/Chair2_photo.png") no-repeat;
  background-position:right ;
  object-fit: cover;
  padding: 53px 0 0 0;
  justify-self: stretch;
}
.second--card .card--content{
    justify-content: flex-start ;
    align-items: center;
}
.second--card .card--title {
  max-width: 200px;

  /* typography */
  font-family: "Raleway";
  font-weight: 600;
  font-size: 45px;
  line-height: 49px;
  letter-spacing: 0%;
  vertical-align: bottom;
}

.second--card .card--subTitle {
  color: #303030;

  /* typography */
  font-family: "Raleway";
  font-weight: 400;
  font-size: 25px;
  line-height: 34px;
  letter-spacing: 0%;
  vertical-align: middle;
}
</style>
