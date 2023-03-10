import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLightMode: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setIsLightMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { setLogin, setLogout, setIsLightMode } = authSlice.actions;
export default authSlice.reducer;
