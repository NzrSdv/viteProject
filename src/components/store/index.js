import { createStore } from "vuex";

const initalState = {
  products: [],
  cart: [],
  purchased: [],

  categories: [
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

  currentPage: 0,
  currentPages: [1, 2, 3, 4],
  currentProducts: [],
  currentCategory: "Шкафы (МДФ)",

  sortedProducts: [],
};

if (localStorage.getItem("Cart") != undefined) {
  initalState.cart = JSON.parse(localStorage.getItem("Cart"));
}

export default createStore({
  state: initalState,
  mutations: {
    addCart(state, product) {
      let status = false;
      let index;
      state.cart.forEach((element, inex) => {
        if (element.id == product.id) {
          status = true;
          index = inex;
        }
      });
      if (status) {
        state.cart[index].quantity += product.quantity;
      } else {
        state.cart.push(product);
      }

      localStorage.setItem("Cart", JSON.stringify(state.cart));
    },
    removeCart(state, id) {
      state.cart = state.cart.filter((element) => element.id != id);
      console.log(state.cart);
      console.log(state.purchased);
      console.log("deleted");
      localStorage.setItem("Cart", JSON.stringify(state.cart));
    },
    buyProduct(state, product) {
      state.purchased.push(product);
    },
    setSavedProducts(state, products) {
      state.products = products;
      state.currentProducts = products.slice(0, 15);
    },
    forwardPage(state, newPage) {
      state.currentPage = newPage;
      state.currentProducts = state.products.slice(
        15 * state.currentPage,
        (state.currentPage + 1) * 15
      );
      state.currentPages = [];
      if (state.currentPage + 4 < Math.ceil(state.products.length / 15)) {
        for (let i = state.currentPage + 1; i < state.currentPage + 5; i++) {
          state.currentPages.push(i);
        }
      } else {
        for (
          let i = Math.ceil(state.products.length / 15);
          i > Math.ceil(state.products.length / 15) - 4;
          i--
        ) {
          state.currentPages.push(i);
        }
        state.currentPages = state.currentPages.reverse();
      }
    },
    forwardCategory(state, newCategory) {
      state.currentCategory = newCategory;
    },

    sortCurrentProducts(state, sortingKey) {
      state.currentProducts.sort((first, second) => {
        if (first[sortingKey] < second[sortingKey]) {
          return 1;
        } else if (first[sortingKey] > second[sortingKey]) {
          return -1;
        }
        return 0;
      });
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.cart.find((element) => element.id == id);
    },
    getCartLength: (state) => {
      return state.cart.length;
    },
    getProducts: (state) => {
      return state.products;
    },
    getOneProduct: (state) => (id) => {
      return state.products.find((element) => element.id == id);
    },
    getCurrentPage: (state) => {
      return state.currentPage;
    },
  },
  actions: {
    async fetchProducts(context) {
      let products = [];
      const response = await fetch("/apiProducts");
      const resData = await response.json();

      resData.forEach((prod) => {
        const product = {
          id: prod.id,
          category: prod.category,
          name: prod.name,
          classification: prod.classification,
          img: prod.img,
          code: prod.code,
          oldPrice: prod.oldPrice,
          currentPrice: prod.currentPrice,
          discountProduct: prod.discountProduct,
          newProduct: prod.newProduct,
          characteristics: prod.characteristics,
        };
        products.push(product);
      });
      context.commit("setSavedProducts", products);
    },
  },
});
