<template>
  <div
  class="max-w-90 border-b border-solid border-[#EAEAEA] flex justify-between items-center"
  ><h4 class="text-[#999999]">{{ info.type }}:</h4> {{ info.value }}</div>
</template>
<script>

export default {
  props: {
    info: Object,
  },
};
</script>
<style></style>
