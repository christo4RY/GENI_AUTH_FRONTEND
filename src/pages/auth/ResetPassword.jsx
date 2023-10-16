import React, { useState } from 'react'
import GuestLayout from './GuestLayout'
import { Loader, PasswordInput, TextInput, rem } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useForm } from '@mantine/form';
import { useResetPasswordMutation } from '../../features/api/apiSlices/AuthApi';
import { toast } from 'react-toastify';


const ResetPassword = () => {
    const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
    const pwdIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const [searchParams, setSearchParams] = useSearchParams();
    const form = useForm({
        initialValues: {
            email: searchParams.get('email'),
            password: "",
            password_confirmation: "",
            token: searchParams.get('token')
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            password: (value) =>
                value.length < 6 ? "Password must have at least 6 letters" : null,
            password_confirmation: (value, values) =>
                value !== values.password ? "Passwords did not match" : null,
        },
    });
    const nav = useNavigate();

    const reset = async (data) => {
        const res = await resetPassword(data)
        if (res?.data) {
            toast.success(res.data.msg);
            nav('/login')
        } else {
            toast.error("Something is wrong!")
        }
    }

    return (
        <GuestLayout title='New Password' label='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        aspernatur maxime sed quas'>
            <form
                className="space-y-5 w-full"
                onSubmit={form.onSubmit(reset)}
            >
                <div>
                    <TextInput
                        variant="filled"
                        leftSectionPointerEvents="none"
                        leftSection={icon}
                        label="Email"
                        {...form.getInputProps("email")}
                        placeholder="example@gmail.com"
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
                        {...form.getInputProps("password_confirmation")}
                        placeholder="Confirm Password"
                    />
                </div>

                <div className="flex justify-center">
                    {
                        isLoading ? (<div>
                            <Loader />
                        </div>) : (<button className=" bg-blue-500 py-1.5 text-sm uppercase   px-4 w-[100%] hover:bg-blue-700 transition-colors duration-300 rounded  text-white">
                            Reset Password
                        </button>)
                    }

                </div>
            </form>
        </GuestLayout >
    )
}

export default ResetPassword
