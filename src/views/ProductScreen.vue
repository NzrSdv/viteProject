<script setup>
import AccentButton from "../UI/AccentButton.vue";
import AccentButtonTwo from "../UI/AccentButtonTwo.vue";
import ProductsRow from "../components/product/ProductsRow.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import AccordionBase from "../UI/accordion/AccordionBase.vue";
import { computed } from "vue";
import { watch } from "vue";
const store = useStore();

const route = useRoute();
const router = useRouter();

const products = computed(() => store.state.products);
console.log(products);
// const product = computed(
//   () => products.filter((element, index) => index == route.params.id - 1)[0]
// );
const product = computed(() => store.getters.getOneProduct(route.params.id));

watch(() => {
  route.params.id,
    (newId) => {
      product = computed(() => store.getters.getOneProduct(newId));
    };
});
</script>

<template>
  <main class="main">
    <section class="section--gap px-2">
      <div class="flex flex-column items-center justify-center">
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-40"
        >
          <div
            class="w-full px-2 md:w-lg grid gap-4 grid-cols-4 grid-rows-5 row-span-1"
          >
            <div
              class="border-2 border-solid border-blue-500 col-span-4 row-span-4"
            >
              <img class="h-auto max-w-full" :src="product.img" alt="" />
            </div>
            <div class="flex flex-row gap-4 col-span-4">
              <div class="w-1/4">
                <img class="h-auto max-w-full" :src="product.img" alt="" />
              </div>
              <div class="w-1/4">
                <img class="h-auto max-w-full" :src="product.img" alt="" />
              </div>
              <div class="w-1/4">
                <img class="h-auto max-w-full" :src="product.img" alt="" />
              </div>
              <div class="w-1/4">
                <img class="h-auto max-w-full" :src="product.img" alt="" />
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-start gap-13 max-w-md pt-9">
            <div class="flex flex-col lg:text-start text-center gap-9">
              <div class="flex flex-col gap-4">
                <h1 class="title">{{ product.name }}</h1>
                <h5 class="sub-title">Код Товара: {{ product.code }}</h5>
              </div>
              <div class="flex flex-col lg:items-start items-center gap-5">
                <h3 class="price">{{ product.currentPrice }}₸</h3>
                <h4 v-if="product.oldPrice != 0" class="oldPrice">
                  {{ product?.oldPrice }}₸
                </h4>
                <div
                  class="w-full flex flex-row items-center justify-between gap-6"
                >
                  <AccentButton
                    text="В корзину"
                    @click="
                      () => store.commit('addCart', { ...product, quantity: 1 })
                    "
                  />
                  <AccentButtonTwo
                    text="Купить в 1 клик"
                    @click="
                      () => {
                        store.commit('addCart', { ...product, quantity: 1 });
                        router.push(`/order/${product.id}`);
                      }
                    "
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-5">
              <h3 class="font-[Raleway] text-base/6 uppercase font-bold">
                Описание товара:
              </h3>
              <div class="h-[1px] w-full bg-light-4"></div>
              <p class="font-[Raleway] font-normal text-base/6 text-dark-4">
                Это текст о компании. Он необходим для дальнейшего продвижения
                Вашего сайта. Вам будет необходимо предоставить исходные данные.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section--gap">
      <div class="container flex flex-col gap-12">
        <h2 class="section--title w-full flex flex-col gap-5">
          Подробнее о товаре
          <div class="h-[1px] w-full bg-light-4"></div>
        </h2>
        <div class="w-full">
          <div
            class="border border-solid border-[#EAEAEA] rounded-3xl py-12 px-15"
          >
            <AccordionBase
              :titles="['Характеристики', 'Оплата', 'Доставка', 'Гарантии']"
              :extraInfo="product.characteristics"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section--gap">
      <div class="container">
        <ProductsRow
          line="true"
          title="Похожие товары"
          :products="products.slice(0, 4)"
        />
        <ProductsRow
          line="true"
          title="Вы смотрели"
          :products="products.slice(0, 4)"
        />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  components: { AccentButton, AccentButtonTwo, ProductsRow },
  // data() {
  //   return {};
  // },
  // mounted() {
  //   product = products.filter(
  //     (item, index) => item.id == this.$route.params.id
  //   )[0];
  // },
  // updated() {
  //   product = products.filter(
  //     (element, index) => index == this.$route.params.id - 1
  //   )[0];
  //   console.log(
  //     products.filter((element, index) => index == this.$route.params.id - 1)
  //   );
  // },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
}
h1.title {
  font-family: "Raleway";
  font-weight: 600;
  font-size: 30px;
  line-height: 39px;
  letter-spacing: 0%;
}
h5.sub-title {
  font-family: "Raleway";
  font-weight: 400;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: 0%;
  color: #7c7c7c;
}
.price {
  font-family: "Inter";
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0%;
}
.oldPrice {
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0%;
  text-decoration: line-through;
  color: #999999;
}
</style>
