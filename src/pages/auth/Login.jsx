import { Checkbox, PasswordInput, Loader, TextInput, rem } from "@mantine/core";
import React from "react";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useGetUserMutation } from "../../features/api/apiSlices/AuthApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/slices/auth/authTokenSlice";
import { toast } from 'react-toastify';
import GuestLayout from "./GuestLayout";


const Login = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const pwdIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    initialValues: { password: "", email: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 letters" : null,
    },
  });
  const [getUser, { isLoading }] = useGetUserMutation()
  const nav = useNavigate()
  const dispatch = useDispatch()
  const login = async (data) => {
    const { data: res } = await getUser(data)
    if (res?.data) {
      toast.success(res.data.message)
      dispatch(setCredentials({ id: res.data.id, token: res.data.token }))
      nav('/admin/projects')
    } else {
      toast.error("Incorrect username or password.")
    }
  }
  return (
    <GuestLayout title='Login Account' label='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
    aspernatur maxime sed quas'>
      <form
        className="space-y-5 w-full"
        onSubmit={form.onSubmit(login)}
      >
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
          <div className="text-end">
            <Link className=" text-slate-700 text-xs md:text-sm " to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <PasswordInput
            variant="filled"
            leftSectionPointerEvents="none"
            leftSection={pwdIcon}
            label="Password"
            {...form.getInputProps("password")}
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between flex-col md:flex-row space-y-3 md:space-y-0">
          <h5>
            New to GENI?
          </h5>
          <div className="text-sm md:text-base">
            <Link className=" text-blue-700 underline" to="/forgot-password">
              Create an account
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <button disabled={isLoading} className=" bg-blue-500 py-1.5 text-sm uppercase   px-4 w-[100%] hover:bg-blue-700 transition-colors duration-300 rounded  text-white">
            {isLoading ? <Loader size={30} color="dark" /> : 'Login'}
          </button>
        </div>
        <div>
          <div className="text-sm md:text-base text-center">

          </div>
        </div>
      </form>
    </GuestLayout>

  );
};

export default Login;
