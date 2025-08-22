import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    addByOne: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      product.quantity += 1;
    },
    removeByOne: (state, action) => {
      const product = state.find((item) => item.id === action.payload);
      if (product.quantity === 1) {
        const productIndex = state.findIndex(
          (item) => item.id === action.payload
        );
        state.splice(productIndex, 1);
      }
      product.quantity -= 1;
    },
    removeProduct: (state, action) => {
      const productIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      state.splice(productIndex, 1);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addProduct, addByOne, removeByOne, removeProduct, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
