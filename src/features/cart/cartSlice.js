import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartAPI";

const initialState = {
  value: 0,
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      });
  },
});

export const selectItems = state => state.cart.value;
export const cartReducer = cartSlice.reducer; 