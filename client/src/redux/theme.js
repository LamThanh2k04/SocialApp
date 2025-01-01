import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: (() => {
    const storedTheme = window?.localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";  
  })(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);  
    },
  },
});

export default themeSlice.reducer;

export function SetTheme(value) {
  return (dispatch) => {
    dispatch(themeSlice.actions.setTheme(value));
  };
}
