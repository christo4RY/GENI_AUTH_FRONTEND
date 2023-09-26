import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: [
    {
      step: "Step 1",
      title: "Your Personal Information",
      label: "Personal Information",
      description:
        "Enter your personal information to get closed to companies.",
    },
    {
      step: "Step 2",
      title: "Information Detail",
      label: "Information Detail",
      description:
        "Enter your personal information to get closed to companies.",
    },
  ],
  activeStep: 0,
};

export const authStepperSlice = createSlice({
  name: "authStepper",
  initialState,
  reducers: {
    handleNext: (state) => {
      if (state.steps.length - 1 > state.activeStep) state.activeStep += 1;
    },

    handleBack: (state) => {
      if (state.activeStep) state.activeStep -= 1;
    },
  },
});

export const { handleNext, handleBack } = authStepperSlice.actions;

export default authStepperSlice.reducer;
