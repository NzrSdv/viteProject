<template>
  <div class="round">New</div>
</template>
<script>
export default {
  name: "NewMarker",
};
</script>
<style scoped>
.round {
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;

  background: linear-gradient(129deg, #f35c37, #f88d3d);

  margin: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  /* typo */
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
}
</style>
