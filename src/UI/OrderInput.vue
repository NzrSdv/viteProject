<template>
  <div class="flex flex-col gap-1">
    <label
      class="font-[Raleway] font-medium font-base/7 text-dark-1 opacity-55"
      for="input"
      >{{ title }}</label
    >
    <input
      class="rounded-xl border border-solid border-light-35 py-5 px-6 font-[Raleway] font-medium font-base/7 placeholder:text-light-46"
      type="text"
      id="input"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  name: "OrderInput",
  props: {
    title: String,
    placeholder: String,
  },
};
</script>
<style></style>
