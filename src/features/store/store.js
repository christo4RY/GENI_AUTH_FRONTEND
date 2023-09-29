import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authStepperReducer from "../slices/auth/authStepperSlice";
import authTokenReducer from "../slices/auth/authTokenSlice";
import { MainApi } from "../api/MainApi";
export const store = configureStore({
  reducer: {
    authstep: authStepperReducer,
    authToken: authTokenReducer,
    [MainApi.reducerPath]: MainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MainApi.middleware),
});

setupListeners(store.dispatch);
