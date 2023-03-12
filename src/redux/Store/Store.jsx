import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/ProductSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
