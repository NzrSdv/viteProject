<template>
  <button
    class="bg-accent px-11 py-2 rounded-sm hover:bg-yellow-600 transition duration-200 text-white font-[Raleway] text-base font-bold"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "AccentButton",
  props: {
    text: String,
  },
};
</script>
<style></style>
