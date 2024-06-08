import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")),
};

const selectProducts = (state) => state.products;
const selectProductId = (state, itemId) => itemId;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Assign list of products
    assignProducts(state, action) {
      state.products = JSON.parse(JSON.stringify(action.payload));
    },
  },
  selectors: {
    // Get all the products
    allProducts: (state) => state.products,
    // Get shoes products
    allShoes: (state) => state.products.filter((item) => item.type === "Shoes"),
    // Get pharmacy products
    allPharmacy: (state) =>
      state.products.filter((item) => item.type === "Pharmacy"),
    // Get clothes products
    allClothes: (state) =>
      state.products.filter((item) => item.type === "Clothes"),
    // Get product by ID
    selectProductById: createSelector(
      [selectProducts, selectProductId],
      (products, itemId) => products.find(p => p.id === itemId)
    ),
  },
});

export const { assignProducts } =
  productsSlice.actions;
export const { allProducts, selectProductById } = productsSlice.selectors;
export default productsSlice.reducer;
