import React, { useState } from 'react'
import GuestLayout from './GuestLayout'
import { Loader, TextInput, rem } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { Link } from 'react-router-dom'
import { useForm } from '@mantine/form';
import { useForgotPasswordMutation } from '../../features/api/apiSlices/AuthApi';
import { toast } from 'react-toastify';


const ForgotPassword = () => {
    const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
    const [forgotPassword, { isLoading }] = useForgotPasswordMutation()
    const form = useForm({
        initialValues: { email: "" },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        },
    });


    const [response, setResponse] = useState('')
    const [email, setEmail] = useState('')
    const forgot = async (data) => {
        const res = await forgotPassword(data)
        if (res?.data) {
            setResponse(res.data.msg)
            setEmail(res.data.email)
            toast.success(res.data.msg);
        } else {
            toast.error("Something wrong!")
        }
    }

    if (response) {
        return (<GuestLayout >
            <div className='flex p-4 px-5 rounded border shadow-lg flex-col items-center space-y-3'>
                <img src="/images/verified.png" alt="" />
                <h2 className='text-lg'>
                    {response}
                </h2>
                <h5 className='text-sm text-slate-900 text-center tracking-wide'>
                    Check mail box of {email} address.
                </h5>
                <a href="https://mail.google.com/" target='_blank' className=" bg-blue-500 py-1.5 text-center text-sm uppercase   px-4 w-[100%] hover:bg-blue-700 transition-colors duration-300 rounded  text-white">
                    go to the email
                </a>
            </div>
        </GuestLayout>)
    }

    return (
        <GuestLayout title='Forgot Password' label='Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        aspernatur maxime sed quas'>
            <form
                className="space-y-5 w-full"
                onSubmit={form.onSubmit(forgot)}
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

                <div className="flex justify-between flex-col md:flex-row space-y-3 md:space-y-0">
                    <div className="text-sm md:text-base space-x-2">
                        <span>
                            Don't have an account?
                        </span>
                        <Link className=" text-blue-600 underline font-bold" to="/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    {
                        isLoading ? (<div>
                            <Loader />
                        </div>) : (
                            <button className=" bg-blue-500 py-1.5 text-sm uppercase   px-4 w-[100%] hover:bg-blue-700 transition-colors duration-300 rounded  text-white">
                                Send Reset Link
                            </button>
                        )
                    }
                </div>
            </form>
        </GuestLayout>
    )
}

export default ForgotPassword
