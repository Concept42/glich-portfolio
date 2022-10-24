import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Toolkit/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
