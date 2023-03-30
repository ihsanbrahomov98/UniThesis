import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/ProductSlice";
import searchReducer from "../SearchSlice/SearchSlice";
import sitterReducer from "../SitterSlice/SitterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    sitter: sitterReducer,
  },
});
