<script setup>
import AccordionSelector from "./AccordionSelector.vue";
</script>

<template>
  <div v-for="(title, titleindex) in titles" :key="titleindex">
    <div
      class="border-b border-solid border-[#EAEAEA] pb-2 pt-5"
      @click="
        () => {
          if (currentShow != titleindex) {
            currentShow = titleindex;
          }
          else{
            currentShow = -1;
          }
        }
      "
    >
      <h2
        class="font-[Raleway] font-normal text-lg/5 text-[#333333] cursor-pointer"
      >
        {{ title }}
      </h2>
    </div>
    <div
      v-if="currentShow == titleindex"
      v-for="(info, index) in extraInfo"
      :key="index"
    >
      <AccordionSelector :info="info" />
    </div>
  </div>
</template>
<script>
export default {
  name: "AccordionBase",
  components: { AccordionSelector },
  props: {
    titles: Array,
    extraInfo: Array,
  },
  data() {
    return {
      currentShow: -1,
    };
  },
};
</script>
<style></style>
