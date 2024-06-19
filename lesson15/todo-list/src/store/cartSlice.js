import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { getCart, addToCart, deleteFromCart } from "../requests/cartRequests";

const initialState = {
  cart: [],
};

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    const todos = await getCart();
    return todos;
  }
);

export const addProductToCart = createAsyncThunk(
  "cart/addToCart",
  async (todo, thunkAPI) => {
    const todos = await addToCart(todo);
    return todos;
  }
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (todo, thunkAPI) => {
    const todos = await deleteFromCart(todo);
    return todos;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      state.cart = JSON.parse(JSON.stringify(action.payload));
    });
    builder.addCase(removeProductFromCart.fulfilled, (state, action) => {
      state.cart = JSON.parse(JSON.stringify(action.payload));
    });
  },
  selectors: {
    // Get all products in cart
    allProducts: (state) => state.cart,
    getTotalPrice: (state) => {
      if (!state.cart.length) return 0;
      const totalPrice = state.cart.reduce(
        (acc, next) => acc + next.price * next.amount,
        0
      );      
      return totalPrice;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const { allProducts, getTotalPrice } = cartSlice.selectors;
export default cartSlice.reducer;
