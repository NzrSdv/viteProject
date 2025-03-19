<template>
  <div class="round">
    {{ discount }}
  </div>
</template>
<script>
export default {
  name: "DiscountMarker",
  props: {
    discount: Number,
  },
};
</script>
<style scoped>
.round {
  margin: 15px;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc844;

  /* typo */
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
}
</style>
