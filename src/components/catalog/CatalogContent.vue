<script setup>
import PaginationComponent from "./PaginationComponent.vue";

import SortIcon from "@/assets/icons/Sorting_icon.svg";
import ProductCard from "@/components/product/ProductCard.vue";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">Акции, скидки</h2>

      <div
        class="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8"
      >
        <div>
          <button
            class="lg:hidden flex px-4 py-2 rounded border border-solid border-[#e5e5e5]"
            @click="
              () => {
                responsiveCategory = true;
              }
            "
          >
            Category : <span class="text-[#026D4E]">{{ this.current }}</span>
          </button>
        </div>
        <nav
          class="w-1/4 border border-solid border-[#e5e5e5] rounded-xl hidden lg:flex flex-col items-stretch px-6 pt-6 pb-9 justify-stretch"
        >
          <h4 class="sub--title">Категория</h4>
          <div class="w-61 flex flex-col justify-center items-stretch gap-3">
            <div
              :class="[
                'pt-3 border-t border-solid border-[#e5e5e5]',
                current === item.name ? 'selected' : '',
                index == 0 ? 'border-t border-solid border-[#e5e5e5]' : '',
              ]"
              v-for="(item, index) in links"
              :key="index"
            >
              <router-link
                :to="{ name: 'Catalog', params: { category: item.name } }"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        </nav>
        <div
          class="lg:w-3/4 w-full flex flex-col items-center justify-center lg:justify-start gap-7"
        >
          <div
            class="flex items-center justify-start gap-3 px-5 py-2 rounded border border-solid border-[#E5E5E5]"
          >
            <label for="sort" class="flex items-center justify-center gap-3">
              <img class="" :src="SortIcon" alt="" />
              Сортировка:
            </label>
            <select
              class="text-[#026D4E] underlined decoration-"
              name=""
              id="sort"
            >
              <option class="text-black" value="">по популярности</option>
              <option class="text-black" value="">по цене</option>
            </select>
          </div>
          <div
            class="flex flex-wrap gap-8 justify-center lg:justify-start items-center"
          >
            <ProductCard
              v-for="(item, index) in currentProducts"
              :key="index"
              :product="item"
            />
          </div>
          <PaginationComponent
            @pageChange="pageClick"
            :pages="products.length"
            :currentPage="currentPage"
            :currentPages="currentPages"
          />
        </div>
      </div>
    </div>
    <div
      v-if="responsiveCategory"
      class="lg:hidden flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 bg-black/20 z-60"
      @click="
        () => {
          responsiveCategory = false;
        }
      "
    >
      <div
        class="bg-white absolute left-0 top-0 bottom-0 flex flex-col items-center justify-start pt-5"
      >
        <ul>
          <li
            class="py-2 px-8 border-b border-b-solid border-[#e5e5e5]"
            v-for="(link, index) in links"
            :key="index"
            @click="
              () => {
                responsiveCategory = false;
              }
            "
          >
            <router-link
              :to="{ name: 'Catalog', params: { category: link.name } }"
              >{{ link.name }}</router-link
            >
          </li>
          <li
            class="py-2 px-4 text-center text-red-600 text-2xl/10"
            @click="
              () => {
                responsiveCategory = false;
              }
            "
          >
            X
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import madeProducts from "@/business/products";

export default {
  name: "CatalogContent",
  components: { ProductCard, PaginationComponent },
  data() {
    return {
      products: madeProducts,
      currentPage: 0,
      currentPages: [1, 2, 3, 4],
      currentProducts: [],
      links: [
        { name: "Шкафы (МДФ)" },
        { name: "Шкафы (распашные)" },
        { name: "Шкафы (купе)" },
        { name: "Спальные гарнитуры" },
        { name: "Кровати" },
        { name: "Диваны" },
        { name: "Пуфики" },
        { name: "Кухонные гарнитуры" },
        { name: "Столы" },
        { name: "Прихожие" },
        { name: "Комоды" },
        { name: "Стеллажи" },
        { name: "Б/У" },
      ],
      current: "",
      responsiveCategory: false,
    };
  },
  methods: {
    pageClick(newPage) {
      this.currentPage = newPage;
      this.currentProducts = this.products[this.currentPage];
      this.currentPages = [];
      if (this.currentPage + 4 < this.products.length) {
        for (let i = this.currentPage + 1; i < this.currentPage + 5; i++) {
          this.currentPages.push(i);
        }
      } else {
        for (let i = this.products.length; i > this.products.length - 4; i--) {
          this.currentPages.push(i);
        }
        this.currentPages = this.currentPages.reverse();
      }
    },
  },
  created() {
    // current page
    this.currentProducts = this.products[this.currentPage];

    // current category
    this.current =
      this.$route.params.category.length === 1
        ? this.$route.params.category[0]
        : this.$route.params.category;

    this.$watch(
      () => this.$route.params.category,
      (newCategory, oldCategory) => {
        this.current =
          newCategory.length === 1
            ? newCategory[0]
            : newCategory.length === 2
            ? newCategory.join("/")
            : newCategory;
      }
    );
  },
};
</script>
<style scoped>
/* .content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  align-items: flex-start;
  gap: 32px;
  justify-content: space-between;
} */
/* .product--nav {
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 23px 25px 37px 20px;
  justify-content: stretch;
  gap: 12px;
} */
h4.sub--title {
  color: #151515;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  text-transform: uppercase;
  padding-bottom: 14px;
  border-bottom: 1px solid #e5e5e5;
}
/* .links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 12px;
} */
.top {
  border-top: 1px solid transparent !important;
}
.selected {
  color: #ffc844;
}
.link {
  width: 100%;
  padding-top: 12px;
  border-top: 1px solid #e5e5e5;
  position: relative;
  padding-left: 26px;
}
.link::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #b5b5b5;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(50%);
}
.selected::before {
  background-color: #ffc844;
}
/* .products {
  grid-column: 2/-1;
  display: subgrid;
  flex-direction: column;
  align-items: stretch;
} */
/* .cards {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
} */
</style>
