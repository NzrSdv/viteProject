<template>
  <button @click="clickFunction" class="inverse-gradient-button">
    <p>
      {{ text }}
    </p>
  </button>
</template>

<script>
export default {
  name: "InverseGradientButton",
  props: {
    text: String,
    clickFunction: Function,
  },
};
</script>
<style scoped>
.inverse-gradient-button {
  border-radius: 5px;
  background-color: white;
  padding: 18px 48px;

  transition: .2s;
}
.inverse-gradient-button p {
  /* typography */
  font-family: "Raleway";
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;


  background: linear-gradient(96deg, #f35c37, #f88d3d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.inverse-gradient-button:hover {
  background-color: rgb(237, 237, 237);
}
</style>
