import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  theme: "dark" | "light";
};

const initialState: ThemeState = {
  theme: "light",
};

export const themeChanger = createSlice({
  name: "themeChanger",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.theme = "light";
    },
    darkMode: (state) => {
      state.theme = "dark";
    },
  },
});

export const { lightMode, darkMode } = themeChanger.actions;
export default themeChanger.reducer;
