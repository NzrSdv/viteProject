<template>
  <div class="category-card" :style="{ backgroundImage: `url(${info.img})` }">
    <div class="bg--gradient">
      <div class="content">
        <div class="text">
          <h2 class="title">{{ info.title }}</h2>
          <h4 class="sub--title">{{ info.subTitle }}</h4>
        </div>
        <a :href="info.link" class="round--button">
          <img src="@/assets/LinkArrow_icon.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryCard",
  props: {
    info: Object,
  },
};
</script>
<style scoped>
.category-card {
  width: 396px;
  height: 486px;
  border-radius: 15px;
  overflow: hidden;
  object-fit: cover;
  background-repeat: no-repeat;
  color: white;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.25);
}
.bg--gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -135deg,
    rgba(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.7)
  );
}
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 34px 0 16px 32px;
}
.text {
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: center;
  align-items: flex-start;
}
.title {
  max-width: 225px;
  color: white;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0%;
}
.sub--title {
  max-width: 275px;

  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
}

.round--button {
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  transition: .1s ease-in-out;
}

.round--button:hover {
    transform: scale(1.1);
  background-color: rgb(237, 237, 237);
}
</style>
