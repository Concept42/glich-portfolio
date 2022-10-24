import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../library/types";

interface ThemeState {
  openHamburger: boolean;
}

const initialState: ThemeState = {
  openHamburger: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleOpen: (state) => {
      state.openHamburger = !state.openHamburger;
    },
  },
});

export const { toggleOpen } = themeSlice.actions;

export const openHamburger = (state: RootState) => state.theme.openHamburger;

export default themeSlice.reducer;
