import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { TfiWorld } from "react-icons/tfi"
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri"
import { BsMoon } from "react-icons/bs"
import { FiSun } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import { RxDashboard } from "react-icons/rx"
import { toast } from 'react-toastify';
import {
    IconSettings,
    IconLogout,
} from '@tabler/icons-react';
import { Menu, rem } from '@mantine/core';
import { setDarkMode } from '../../../../features/slices/darkMode/darkModeSlice';
import { setCredentials } from '../../../../features/slices/auth/authTokenSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutUserMutation } from '../../../../features/api/apiSlices/AuthApi';

const Navbar = ({ sider, toggleSider, openSider, children }) => {
    const dispatch = useDispatch()
    const [logoutUser] = useLogoutUserMutation()
    const { theme: dark } = useSelector(state => state.darkMode)
    const nav = useNavigate()
    const [auth, setAuth] = useState('');

    const data = useSelector((state) => state.authToken)
    useEffect(() => {
        setAuth(data)
    }, [])
    const logout = async () => {
        const data = await logoutUser()
        if (data?.data) {
            if (data.data.error) {
                toast.error('Something wrong!')
            } else {
                dispatch(setCredentials({ id: null, email: null, username: null, token: null }))
                toast.success(data.data.msg)
                nav('/login')
            }
        }
    }

    return (
        <div className='w-full '>
            <div className={`z-10 bg-slate-100 border-r dark:border-slate-700 dark:bg-[#1A1D23] dark:text-gray-100   duration-300 absolute top-0 transition-transform left-0 mt-16 py-4 w-full md:translate-x-[-120%] ${openSider ? ' translate-x-0' : ' translate-x-[-120%]'}`}>
                <div className='px-4 w-full'>
                    <Menu shadow="md">
                        <Menu.Label className=' uppercase mb-1'>User</Menu.Label>

                        <Menu.Item className=' hover:bg-slate-100   mb-2' leftSection={<RxDashboard className='text-slate-500' style={{ width: rem(20), height: rem(20) }} />}>
                            <span className="text-slate-500">Dashboard</span>
                        </Menu.Item>
                        <Menu.Item className=' hover:bg-slate-100   mb-2' leftSection={<IconSettings className='text-slate-500' style={{ width: rem(20), height: rem(20) }} />}>
                            <span className="text-slate-500">Setting</span>
                        </Menu.Item>

                    </Menu>
                </div>
            </div>
            <div className={`main-content right-content `}>
                <div className={`w-full dark:bg-[#1A1D23] sticky dark:border-slate-700 dark:text-gray-100  border-b z-50 space-x-4 xl:space-x-2 bg-white transition-all duration-300 items-center flex justify-between  left-0   pr-3 top-0  h-[4rem] md:h-[4.3rem]`}>
                    <div className='hidden md:flex'>
                        <div className=" w-full relative mx-auto rounded-full text-gray-600 ">
                            <input className="border border-gray-300 dark:bg-black dark:border-0 bg-slate-100 w-full h-9 xl:h-10 px-5 ps-10 pr-16 rounded-full text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute left-0 top-0 mt-[0.5rem] xl:mt-[0.7rem] ml-4">
                                <CiSearch className='text-xl' />
                            </button>
                        </div>
                    </div>
                    <div className='flex  md:hidden w-full'>
                        <RiMenuUnfoldLine onClick={toggleSider} className={`text-[1.5rem] text-slate-600 ${openSider ? 'hidden' : 'flex'}`} />
                        <RiMenuFoldLine onClick={toggleSider} className={`text-[1.5rem] text-slate-600  ${openSider ? 'flex md:hidden' : 'hidden'}`} />
                    </div>
                    <div className='flex space-x-2 lg:space-x-4 items-center'>

                        <div className='flex items-center space-x-4 ps-5 '>
                            <button className='md:h-9 h-8' onClick={() => dispatch(setDarkMode())}>
                                <BsMoon className={`${dark ? 'hidden' : 'block'} text-[1.3rem] text-slate-400`} />
                                <FiSun className={`${dark ? 'block' : 'hidden'} text-[1.3rem] text-slate-400`} />
                            </button>
                            <button className='md:h-9 h-8'>
                                <TfiWorld className='text-[1.3rem] text-slate-400' />
                            </button>


                            <Menu shadow="md" width={170} >
                                <Menu.Target>
                                    <button className='h-9'>
                                        <img src="https://magicai.liquid-themes.com/upload/images/logo/rYby-collapsed-magicai-logo.svg" alt="" />
                                    </button>
                                </Menu.Target>

                                <Menu.Dropdown className='dark:bg-[#1A1D23] dark:border-slate-700 dark:text-slate-100'>
                                    <div className='px-3 py-2 space-y-1'>
                                        <h1 className=' text-slate-500 dark:text-slate-100 text-sm'>{auth?.username}</h1>
                                        <h4 className=' text-slate-500 dark:text-slate-100 text-sm'>{auth?.email}</h4>
                                    </div>
                                    <Menu.Divider />
                                    <Menu.Item className='dark:text-slate-100' leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}>
                                        <Link to="/profile">
                                            Settings
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item onClick={logout} className='dark:text-slate-100' leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} />}>
                                        Logout
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-100 dark:bg-[#1A1D23]  py-4 px-3 '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Navbar
