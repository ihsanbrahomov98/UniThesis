import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/ProductSlice";
import searchReducer from "../SearchSlice/SearchSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
});
