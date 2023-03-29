import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sitters: [],
};
export const sitterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSitters: (state, action) => {
      state.sitters = action.payload;
    },
  },
});
export const { setSitters } = sitterSlice.actions;

export default sitterSlice.reducer;
