import React, { useReducer } from "react";
import { TextInput, PasswordInput, rem, FileInput } from "@mantine/core";
import { IconAt, IconLock, IconUser, IconUpload } from "@tabler/icons-react";
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
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useSetUserMutation } from "../../features/api/apiSlices/AuthApi";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../features/slices/auth/authTokenSlice";

const RegisterFields = () => {
  const { activeStep } = useSelector((state) => state.authstep);
  const dispatch = useDispatch();
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const pwdIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;
  const userIcon = <IconUser style={{ width: rem(16), height: rem(16) }} />;
  const uploadIcon = <IconUpload style={{ width: rem(16), height: rem(16) }} />

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      avatar: "",
      nrc: "",
      country: "",
      city: "",
      address: "",
    },

    validate: {
      firstname: (value) =>
        value.length < 3 ? "First Name must have at least 3 letters" : null,
      lastname: (value) =>
        value.length < 3 ? "Last Name must have at least 3 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 letters" : null,
      confirmpassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });


  const reducer = (state, action) => {
    switch (action.type) {
      case "country":
        return { country: action.value, region: state.region }
      case "region":
        return { country: state.country, region: action.value }
      default:
        throw new Error()
    }
  }
  const [states, action] = useReducer(reducer, {
    country: "",
    region: ""
  })

  const { country, region } = states;

  const selectCountry = (value) => {
    action({ type: 'country', value })
    form.setFieldValue('country', value)
  }
  const selectRegion = (value) => {
    action({ type: 'region', value })
    form.setFieldValue('country', value)
  }

  const avatarUpload = (value) => {
    form.setFieldValue('avatar', value)
  }

  const [setUser, { isLoading }] = useSetUserMutation()
  const nav = useNavigate()
  const registerUser = async (data) => {
    const { data: response } = await setUser(data)
    if (response?.data?.token) {
      dispatch(setCredentials({ id: response.data.id, token: response.data.token }))
      nav('/admin/projects')
    }
  }
  const fields = [
    <div className=" grid grid-cols-2 gap-5">

      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={userIcon}
          label="First Name"
          {...form.getInputProps("firstname")}
          placeholder="First Name"
        />
      </div>
      <div>
        <TextInput
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={userIcon}
          label="Last Name"
          {...form.getInputProps("lastname")}
          placeholder="Last Name"
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
        <FileInput
          variant="filled"
          leftSection={uploadIcon}
          label="Avatar"
          onChange={avatarUpload}
          placeholder="Avatar"
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
          label="Address"
          {...form.getInputProps("address")}
          placeholder="Address"
        />
      </div>
      <div>
        <label >Country</label>
        <CountryDropdown
          classes="py-2 bg-[#F1F3F5] w-full rounded text-sm text-slate-400"
          value={country}
          onChange={(val) => selectCountry(val)} />
      </div>
      <div>
        <label >City</label>
        <RegionDropdown
          classes="py-2 bg-[#F1F3F5] w-full rounded text-sm text-slate-400"
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} />
      </div>

    </div>,
  ];
  return (
    <>
      <form onSubmit={form.onSubmit()}>
        {fields[activeStep]}
        <Box sx={{ mt: 3 }}>
          <div>
            <Button
              type="submit"
              onClick={() => {
                if (!activeStep) {
                  if (
                    form.values.firstname &&
                    form.values.lastname &&
                    form.values.email &&
                    form.values.password
                  ) {
                    dispatch(handleNext());
                  }
                } else {
                  registerUser(form.values)
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
