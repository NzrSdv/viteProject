<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const currentPage = computed(() => store.state.currentPage);
const currentPages = computed(() => store.state.currentPages);
</script>
<template>
  <div class="flex items-center h-10 justify-center gap-6">
    <div
      class="w-17 h-full flex justify-center items-center border border-solid border-[#bcbcbc] rounded-md"
      @click="
        () => {
          if (currentPage > 0) {
            $emit('pageChange', currentPage - 1);
          }
        }
      "
    >
      <
    </div>
    <div class="numberPages">
      <div
        :class="['pageButton', currentPage === item - 1 ? 'active' : '']"
        v-for="(item, index) in currentPages"
        :key="index"
        @click="$emit('pageChange', item - 1)"
      >
        {{ item }}
      </div>
    </div>
    <div
      class="w-17 h-full flex justify-center items-center border border-solid border-[#bcbcbc] rounded-md"
      @click="
        () => {
          console.log(currentPage)
          console.log(pages);
          if (currentPage < (pages - 1)) {
            $emit('pageChange', currentPage + 1);
          }
        }
      "
    >
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "PaginationComponent",
  props: {
    pages: Number,
    currentPage: Number,
    currentPages: Array,
  },
  created() {
    console.log(this.currentPage);
    console.log(this.pages);
  },
};
</script>
<style scoped>
/* .pages {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
} */
/* .arrowButton {
  width: 68px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bcbcbc;
  border-radius: 7px;
} */
.numberPages {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pageButton {
  width: 30px;
  height: 42px;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
}
.active {
  color: white;
  background-color: #ffc844;
}
</style>
