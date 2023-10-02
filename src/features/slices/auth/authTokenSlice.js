import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  id: Cookies.get("id") ?? null,
  token: Cookies.get("id") ? JSON.parse(Cookies.get("id")) : null,
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { id, token } }) => {
      state.token = token;
      state.id = id;
      Cookies.set("id", id, { expires: 1 });
      Cookies.set("token", JSON.stringify(token), {
        expires: 1,
      });
    },
  },
});

export const { setCredentials } = authTokenSlice.actions;

export default authTokenSlice.reducer;
