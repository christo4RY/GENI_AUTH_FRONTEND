import React from 'react'
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const UserInfo = () => {
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))} className=' grid grid-cols-2 gap-5'>
            <div>
                <TextInput
                    label="First Name"
                    placeholder="first name"
                    {...form.getInputProps('firstName')}
                />
            </div>
            <div>
                <TextInput
                    label="Last Name"
                    placeholder="lastName"
                    {...form.getInputProps('lastName')}
                />
            </div>
            <div>
                <TextInput
                    label="Email"
                    placeholder="example@gmail.com"
                    {...form.getInputProps('email')}
                />
            </div>
            <div>
                <TextInput
                    label="Phone Number"
                    placeholder="+95"
                    {...form.getInputProps('phone')}
                />
            </div>
            <div>
                <TextInput
                    label="Country"
                    placeholder="country"
                    {...form.getInputProps('country')}
                />
            </div>
            <div>
                <TextInput
                    label="City"
                    placeholder="city"
                    {...form.getInputProps('city')}
                />
            </div>
            <div className=''>
                <button className=' bg-orange-400 shadow-lg hover:bg-orange-500 transition-all duration-300 py-1 md:py-2 px-3 md:px-5 rounded-xl text-slate-100'>Save Changes</button>
            </div>
        </form>
    )
}

export default UserInfo
