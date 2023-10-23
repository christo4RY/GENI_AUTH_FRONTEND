import React, { useEffect, useState } from 'react'
import { FileInput, NumberInput, TextInput } from '@mantine/core';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useGetUserProfileQuery, useUpdateProfileMutation } from '../features/api/apiSlices/AuthApi';
import FormFieldError from './errors/FormFieldError';
import { toast } from 'react-toastify';

const schema = yup
    .object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().required(),
    })
    .required()
const UserInfo = ({ user }) => {
    const [updateProfile, { isLoading }] = useUpdateProfileMutation()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue
    } = useForm({
        resolver: yupResolver(schema),
    })


    useEffect(() => {
        setValue('firstname', user?.userdetail?.firstname)
        setValue('lastname', user?.userdetail?.lastname)
        setValue('email', user?.email)
        setValue('phone', user?.userdetail?.phone)
        setValue('country', user?.userdetail?.country)
        setValue('city', user?.userdetail?.city)
    }, [user])
    const onSubmit = async (values) => {
        const { data } = await updateProfile(values)
        if (data?.status) {
            toast.success(data?.message)
        } else {
            toast.error('Something is wrong')
        }

    }

    const uploadAvatar = (File) => {
        setValue('avatar', File)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div>
                <TextInput
                    label="First Name"
                    placeholder="first name"
                    {...register('firstname')}
                />
                <FormFieldError title={errors.firstname?.message} />
            </div>
            <div>
                <TextInput
                    label="Last Name"
                    placeholder="lastName"
                    {...register('lastname')}
                />
                <FormFieldError title={errors.lastname?.message} />

            </div>
            <div>
                <TextInput
                    label="Email"
                    placeholder="example@gmail.com"
                    {...register('email')}
                />
                <FormFieldError title={errors.email?.message} />

            </div>
            <div>
                <NumberInput
                    label="Phone Number"
                    placeholder="+95"
                    {...register('phone')}
                />
                <FormFieldError title={errors.phone?.message} />

            </div>
            <div>
                <FileInput
                    label="Avatar"
                    placeholder="your avatar"
                    onChange={uploadAvatar}
                // {...register('avatar')}

                />
                <FormFieldError title={errors.avatar?.message} />
            </div>
            <div>
                <TextInput
                    label="Country"
                    placeholder="country"
                    {...register('country')}
                />
                <FormFieldError title={errors.country?.message} />

            </div>
            <div>
                <TextInput
                    label="City"
                    placeholder="city"
                    {...register('city')}
                />
                <FormFieldError title={errors.city?.message} />
            </div>
            <div></div>

            <div className=''>
                <button className=' bg-orange-400 shadow-lg hover:bg-orange-500 transition-all duration-300 py-1 md:py-2 px-3 md:px-5 rounded-xl text-slate-100'>Save Changes</button>
            </div>
        </form>
    )
}

export default UserInfo
