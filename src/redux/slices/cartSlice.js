import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action)
    //   const product = state.find((item) => item.id === action.payload.id);

    //   if (product) {
    //     product.quantity++;
    //   } else {
    //     state.push(...state, { ...action.payload, quantity: 1 });
    //   }

    state.push({...action.payload, quantity: 1})
    },

    addByOne: () => {

    },
    removeByOne: () => {

    },
    removeProduct: () => {

    },
    clearCart: () => {

    }
  },
});

export const { addProduct, addByOne, removeByOne, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
