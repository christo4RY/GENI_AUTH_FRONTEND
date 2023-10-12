import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authStepperReducer from "../slices/auth/authStepperSlice";
import authTokenReducer from "../slices/auth/authTokenSlice";
import { MainApi } from "../api/MainApi";
import darkModeReducer from "../slices/darkMode/darkModeSlice";
export const store = configureStore({
  reducer: {
    authstep: authStepperReducer,
    authToken: authTokenReducer,
    darkMode: darkModeReducer,
    [MainApi.reducerPath]: MainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MainApi.middleware),
});

setupListeners(store.dispatch);
