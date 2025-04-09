import { createStore } from "vuex";
const initalState = {
  cart: [],
  purchased: [],
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
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.cart.find((element) => element.id == id);
    },
    getCartLength: (state) => {
      return state.cart.length;
    },
  },
});
