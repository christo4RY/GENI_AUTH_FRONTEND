import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") ?? null,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      if (localStorage.theme === "dark") {
        state.theme = null;
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
      } else {
        state.theme = "dark";
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
