import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems.pop(action.payload);
    },
    increaseAmount: (state, action) => {
      state.cartItems.find((e) => {
        if (e.id === action.payload.id) {
          e.amount++;
        }
      });
      console.log(state.cartItems);
    },
    decreaseAmount: (state, action) => {
      state.cartItems.find((e) => {
        if (e.id === action.payload.id) {
          e.amount--;
        }
      });
      console.log(state.cartItems);
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incrementByAmount,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = counterSlice.actions;

export default counterSlice.reducer;
