import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: localStorage.getItem("id") ?? null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { id, token } }) => {
      state.token = token;
      state.id = id;
      localStorage.setItem("id", id);
      localStorage.setItem("token", JSON.stringify(token));
    },
  },
});

export const { setCredentials } = authTokenSlice.actions;

export default authTokenSlice.reducer;
