import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
