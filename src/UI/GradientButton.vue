<template>
  <button
    @click="clickFunction"
    class="gradient-button"
    :style="{ width: width }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "GradientButton",
  props: {
    text: String,
    clickFunction: Function,
    width: String,
  },
};
</script>
<style scoped>
.gradient-button {
  height: 47px;
  border-radius: 5px;
  background: #f35c37;
  background: linear-gradient(101deg, #f35c37, #f88d3d);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  /* typography */
  font-family: "Raleway";
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  pointer-events: visible;
  transition: 1s ease-in-out;
}
.gradient-button:hover {
  background: linear-gradient(101deg, #d16044, #f35c37);
}
</style>
