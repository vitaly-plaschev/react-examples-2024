import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to cart
    addProduct: {
      reducer: (state, action) => {
        state.products.push(action.payload);
      },
      prepare: (product) => {
        const id = nanoid();
        return { payload: { id, ...product } };
      },
    },
    // Remove product from cart
    removeProduct: {
      reducer: (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      },
      prepare: (id) => {
        return { payload: id };
      },
    },
  },
  selectors: {
    // Get all products in cart
    allProducts: (state) => state.cart,
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const { allTodos } = cartSlice.selectors;
export default cartSlice.reducer;
