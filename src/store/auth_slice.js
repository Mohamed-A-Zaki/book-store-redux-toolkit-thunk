import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    isLogiIn: false,
    auther: "Mohamed Zaki",
  },

  reducers: {
    logInOut: (state, action) => {
      state.isLogiIn = !state.isLogiIn;
    },
  },
});

export const { logInOut } = authSlice.actions;

export default authSlice.reducer;
