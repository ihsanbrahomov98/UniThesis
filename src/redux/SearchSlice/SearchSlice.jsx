import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offeredServices: "",
  city: "",
  startingDate: "",
  endingDate: "",
  selectedIcon: "",
  telephone: "",
  name: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchParams: (state, action) => {
      state.offeredServices = action.payload.offeredServices;
      state.city = action.payload.city;
      state.startingDate = action.payload.startingDate;
      state.endingDate = action.payload.endingDate;
      state.selectedIcon = action.payload.selectedIcon;
      state.telephone = action.payload.telephone;
      state.name = action.payload.name;
      console.log(state);
    },
  },
});
export const { addSearchParams } = searchSlice.actions;

export default searchSlice.reducer;
