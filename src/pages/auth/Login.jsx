import { Checkbox, PasswordInput,Loader, TextInput, rem } from "@mantine/core";
import React from "react";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { useGetUserMutation } from "../../features/api/apiSlices/AuthApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/slices/auth/authTokenSlice";
import { toast } from 'react-toastify';


const Login = () => {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const pwdIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    initialValues: { password: "", email: "" },

    // functions will be used to validate values at corresponding key
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
    const { data:res } = await getUser(data)
    if (res?.data) {
      toast.success(res.data.message)
      dispatch(setCredentials({ id: res.data.id, token: res.data.token }))
      nav('/admin/projects')
    }else{
      toast.error("Something wrong!")
    }
  }
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] h-full bg-[#053B50]">
        <img src="/login.jpg" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-full md:w-[50%] flex items-center">
      
        <div className="w-full">
          <div className="w-full md:w-[70%] mx-auto p-8 md:p-10">
            <div className="mb-10 w-full space-y-5">
              <h1 className="text-3xl font-semibold">Login Account</h1>
              <h5 className=" text-slate-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                aspernatur maxime sed quas.
              </h5>
            </div>
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
                <div className="text-sm md:text-base">
                  <Checkbox defaultChecked label="I agree to sell my privacy" />
                </div>
                <div className="text-sm md:text-base">
                  <Link className=" text-blue-600" to="/register">
                    Already a member?
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <button disabled={isLoading} className=" bg-blue-500 py-1.5 rounded-full  px-4 w-[80%]  text-white">
                { isLoading ?  <Loader size={30} color="dark" />: 'Login' }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
