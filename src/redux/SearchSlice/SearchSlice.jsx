import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offeredServices: "",
  city: "",
  startingDate: "",
  endingDate: "",
};
export const searchSlice = createSlice({
  name: "search",
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
export const {
  addToCart,
  removeFromCart,
  incrementByAmount,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = searchSlice.actions;

export default searchSlice.reducer;
