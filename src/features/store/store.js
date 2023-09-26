import { configureStore } from "@reduxjs/toolkit";
import authStepperReducer from "../slices/auth/authStepperSlice";

export const store = configureStore({
  reducer: {
    authstep: authStepperReducer,
  },
});
