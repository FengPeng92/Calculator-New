import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./calculateSlice";

export const store = configureStore({
  reducer: {
    calculate: calculateReducer,
  },
});

