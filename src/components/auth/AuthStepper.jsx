import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function VerticalLinearStepper() {
  const { steps, activeStep } = useSelector((state) => state.authstep);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <div>
        <h3 className=" text-slate-600 text-2xl font-semibold">
          {steps[activeStep].step}
        </h3>
        <h5 className=" text-slate-500 my-5 mb-7">
          {steps[activeStep].description}
        </h5>
      </div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
              className="text-slate-300"
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
