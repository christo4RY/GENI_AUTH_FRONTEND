import React from 'react'
import { TextInput,PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useChangePasswordMutation } from '../features/api/apiSlices/AuthApi';
import { toast } from 'react-toastify';

const ChangePassword = () => {
    const [changePassword,{isLoading}] = useChangePasswordMutation()
    const form = useForm({
        initialValues: {
            current_password:"",
            password:"",
            password_confirmation:""
        },

        validate: {
        },
    });

    const submitPassword = async () => {
        const {data} = await changePassword(form.values)
        if(data?.status){
            toast.success(data.message)
            form.reset()
        }else{
            toast.error(data.message)
        }
    } 

    return (
        <form onSubmit={form.onSubmit(submitPassword)} className=' grid grid-cols-1 w-[70%] md:w-[50%] gap-5'>
            <div>
                <PasswordInput
                    label="Current Password"
                    placeholder="current password"
                    {...form.getInputProps('current_password')}
                />
            </div>
            <div>
                <PasswordInput
                    label="New Password"
                    placeholder="new password"
                    {...form.getInputProps('password')}
                />
            </div>
            <div>
                <PasswordInput
                    label="Confirm Password"
                    placeholder="confirm password"
                    {...form.getInputProps('password_confirmation')}
                />
            </div>
            <div className=''>
                <button className=' bg-orange-400 shadow-lg hover:bg-orange-500 transition-all duration-300 py-1 md:py-2 px-3 md:px-5 rounded-xl text-slate-100'>Save Changes</button>
            </div>
        </form>
    )
}

export default ChangePassword
