import React from "react";
import { TextInput, PasswordInput, rem } from "@mantine/core";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";
import PhoneInput from "react-phone-input-2";
import { useForm } from "@mantine/form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "react-phone-input-2/lib/style.css";
import "./RegisterFields.css";
import { useDispatch, useSelector } from "react-redux";
import {
  handleNext,
  handleBack,
} from "./../../features/slices/auth/authStepperSlice";
const RegisterFields = () => {
  const { activeStep } = useSelector((state) => state.authstep);
  const dispatch = useDispatch();
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const pwdIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;
  const userIcon = <IconUser style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      nrc: "",
      city: "",
      address: "",
    },

    validate: {
      name: (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 letters" : null,
      confirmpassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
      phone: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      nrc: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      city: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      address: (value) => (value.length < 2 ? "Must be email format." : null),
    },
  });

  const fields = [
    <div className=" grid grid-cols-2 gap-5">
      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={userIcon}
          label="Your Name"
          {...form.getInputProps("name")}
          placeholder="Your Name"
        />
      </div>
      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Your email"
          {...form.getInputProps("email")}
          placeholder="Your email"
        />
      </div>
      <div>
        <PasswordInput
          variant="filled"
          label="Password"
          leftSectionPointerEvents="none"
          leftSection={pwdIcon}
          {...form.getInputProps("password")}
          placeholder="Password"
        />
      </div>
      <div>
        <PasswordInput
          variant="filled"
          label="Confirm Password"
          leftSectionPointerEvents="none"
          leftSection={pwdIcon}
          {...form.getInputProps("confirmpassword")}
          placeholder="Confirm Password"
        />
      </div>
    </div>,
    <div className=" grid grid-cols-2 gap-5">
      <div className="w-full">
        <label className="text-sm">Phone Number</label>
        <PhoneInput
          country={"mm"}
          {...form.getInputProps("phone")}
          placeholder="Phone Number"
        />
      </div>
      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={icon}
          {...form.getInputProps("nrc")}
          label="NRC"
          placeholder="NRC"
        />
      </div>
      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="City"
          {...form.getInputProps("city")}
          placeholder="City"
        />
      </div>
      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={icon}
          label="Address"
          {...form.getInputProps("address")}
          placeholder="Address"
        />
      </div>
    </div>,
  ];
  return (
    <>
      <form onSubmit={form.onSubmit(console.log)}>
        {fields[activeStep]}
        <Box sx={{ mt: 3 }}>
          <div>
            <Button
              type="submit"
              onClick={() => {
                if (!activeStep) {
                  if (
                    form.values.name &&
                    form.values.email &&
                    form.values.password
                  ) {
                    form.clearFieldError("name");
                    form.clearFieldError("email");
                    form.clearFieldError("password");
                    dispatch(handleNext());
                  }
                } else {
                  console.log(form);
                }
              }}
              variant="contained"
              sx={{ mt: 1, mr: 1 }}
            >
              Continue
            </Button>
            <Button
              onClick={() => dispatch(handleBack())}
              disabled={!activeStep}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default RegisterFields;
