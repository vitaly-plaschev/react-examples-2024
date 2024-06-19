import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    cart: cartReducer,    
  },
});

export default store;
