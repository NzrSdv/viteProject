<script setup>
import madeProducts from "../business/products";
import AccentButton from "../UI/AccentButton.vue";
import AccentButtonTwo from "../UI/AccentButtonTwo.vue";
import ProductsRow from "../components/product/ProductsRow.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();

const router = useRouter();
</script>

<template>
  <main class="main">
    <section class="section--gap">
      <div class="flex flex-column items-center justify-center">
        <div class="flex flex-row items-start gap-40">
          <div class="w-lg grid gap-4 grid-cols-4 grid-rows-5 row-span-1">
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
            <div class="flex flex-col gap-9">
              <div class="flex flex-col gap-4">
                <h1 class="title">{{ product.name }}</h1>
                <h5 class="sub-title">Код Товара: {{ product.code }}</h5>
              </div>
              <div class="flex flex-col gap-5">
                <h3 class="price">{{ product.currentPrice }}</h3>
                <h4 v-if="product.oldPrice != 0" class="oldPrice">
                  {{ product?.oldPrice }}
                </h4>
                <div class="flex flex-row gap-6">
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
                        store.commit('addCart', { ...product, quantity: 1 })
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
        <div class="border border-solid border-light-4 w-full">
          <div class="accordion"></div>
        </div>
      </div>
    </section>
    <section class="section--gap">
      <div class="container">
        <ProductsRow
          line="true"
          title="Похожие товары"
          :products="madeProducts[0].slice(0, 4)"
        />
        <ProductsRow
          line="true"
          title="Вы смотрели"
          :products="madeProducts[0].slice(0, 4)"
        />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  components: { AccentButton, AccentButtonTwo, ProductsRow },
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.product = madeProducts
      .flat()
      .filter((element, index) => index == this.$route.params.id - 1)[0];
    console.log(
      madeProducts
        .flat()
        .filter((element, index) => index == this.$route.params.id - 1)
    );
  },
  updated() {
    this.product = madeProducts
      .flat()
      .filter((element, index) => index == this.$route.params.id - 1)[0];
    console.log(
      madeProducts
        .flat()
        .filter((element, index) => index == this.$route.params.id - 1)
    );
  },
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
