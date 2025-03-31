import { createStore } from "vuex";
const initalState = {
  cart: [],
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
  },
});
