<script setup>
import PaginationComponent from "./PaginationComponent.vue";
import ProductCard from "@/components/product/ProductCard.vue";
</script>
<template>
  <section class="section--gap">
    <div class="container">
      <h2 class="section--title">Акции, скидки</h2>

      <div class="content">
        <nav class="product--nav">
          <h4 class="sub--title">Категория </h4>
          <div class="links">
            <div
              :class="[
                'link',
                current === item.name ? 'selected' : '',
                index == 0 ? 'top' : '',
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
        <div class="products">
          <select name="" id="">
            <option value="">по популярности</option>
          </select>
          <div class="cards">
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
    };
  },
  methods: {
    pageClick(newPage) {
      console.log(newPage);
      this.currentPage = newPage;
      this.currentProducts = this.products[this.currentPage];
      this.currentPages = [];
      for (let i = this.currentPage + 1; i < this.currentPage + 5; i++) {
        this.currentPages.push(i);
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
.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  align-items: flex-start;
  gap: 32px;
  justify-content: center;
}
.product--nav {
  border: 1px solid #e5e5e5;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 23px 25px 37px 20px;
  justify-content: stretch;
  gap: 12px;
}
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
.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 12px;
}
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
.products {
  grid-column: 2/-1;
  display: subgrid;
  flex-direction: column;
  align-items: stretch;
}
.cards {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
</style>
