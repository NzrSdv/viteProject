<script setup></script>
<template>
  <div class="pages">
    <div class="arrowButton" @click="() => {
          if (currentPage > 0 ) {
            $emit('pageChange', currentPage - 1);
          }
        }">
      <
    </div>
    <div class="numberPages">
      <div
        :class="['pageButton', currentPage === index ? 'active' : '']"
        v-for="(item, index) in pages"
        :key="index"
        @click="$emit('pageChange', index)"
      >
        {{ item }}
      </div>
    </div>
    <div
      class="arrowButton"
      @click="
        () => {
          if (currentPage < pages-1) {
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
  },
};
</script>
<style scoped>
.pages {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
}
.arrowButton {
  width: 68px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bcbcbc;
  border-radius: 7px;
}
.numberPages {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pageButton {
  width: 30px;
  height: 42px;
  border-radius: 7px;

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
