<template>
  <button
    class="py-3 px-6 rounded bg-light-3 hover:bg-accent hover:text-white transition duration-300 text-dark-2"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "NeutralButton",
  props: {
    text: String,
    click: Function,
  },
};
</script>
<style></style>
