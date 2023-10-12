import React from 'react'
import { CiSearch } from "react-icons/ci"
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { TfiWorld } from "react-icons/tfi"
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri"
import { BsMoon } from "react-icons/bs"
import { FiSun } from "react-icons/fi"
import { useDispatch,useSelector } from 'react-redux';
import { RxDashboard } from "react-icons/rx"
import {
    IconSettings,
    IconLogout,
} from '@tabler/icons-react';
import { Menu, rem } from '@mantine/core';
import { setDarkMode } from '../../../../features/slices/darkMode/darkModeSlice';

const Navbar = ({sider,toggleSider,openSider}) => {
    const dispatch = useDispatch()
    const { theme: dark } = useSelector(state => state.darkMode)
    return (
        <div>
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
            <div className={`w-ful h-screen overflow-y-auto dark:text-gray-100 l ${sider ? 'ps-28' : 'lg:ps-72 '} pr-3 transition-all duration-300`}>
                <div className={`w-full dark:bg-[#1A1D23] dark:border-slate-700 dark:text-gray-100  border-b z-30 space-x-4 xl:space-x-2 bg-white transition-all duration-300 items-center flex justify-between fixed left-0 ${sider ? 'ps-32' : 'lg:ps-72 '} pr-3 top-0  h-[4rem] md:h-[4.3rem]`}>
                    <div className='hidden md:flex'>
                        <div className=" w-full relative mx-auto rounded-full text-gray-600 ">
                            <input className="border border-gray-300 dark:bg-black dark:border-0 bg-slate-100 w-full h-9 xl:h-10 px-5 ps-10 pr-16 rounded-full text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute left-0 top-0 mt-[0.5rem] xl:mt-[0.7rem] ml-4">
                                <CiSearch className='text-xl' />
                            </button>
                        </div>
                    </div>
                    <div className='flex  md:hidden px-2 w-full'>
                        <RiMenuUnfoldLine onClick={toggleSider} className={`text-[1.7rem] text-slate-600 ${openSider ? 'hidden' : 'flex'}`} />
                        <RiMenuFoldLine onClick={toggleSider} className={`text-[1.7rem] text-slate-600  ${openSider ? 'flex md:hidden' : 'hidden'}`} />
                    </div>
                    <div className='flex space-x-2 lg:space-x-4 items-center'>
                        <button className='hidden dark:border-slate-700 lg:h-9 h-8 border rounded-full items-center shadow-sm hover:shadow-lg transition-all duration-200 py-0.5 px-4 md:flex'>
                            <h4 className='text-sm xl:text-[0.925rem]'>Admin Panel</h4>
                        </button>
                        <button className='hidden dark:border-slate-700 lg:h-9 h-8 border rounded-full items-center shadow-sm hover:shadow-lg transition-all duration-200 py-0.5 px-4 md:flex'>
                            <h4 className='text-sm xl:text-[0.925rem]'>No Active Subscription</h4>
                        </button>
                        <button className='hidden dark:border-slate-700 lg:h-9 h-8 border space-x-2 bg-[#330582] text-white rounded-full items-center shadow-sm hover:shadow-lg transition-all duration-200 py-0.5 px-4 md:flex'>
                            <BsFillLightningChargeFill />
                            <h4 className='text-sm xl:text-[0.925rem]'>Upgrade</h4>
                        </button>
                        <div className='flex items-center space-x-4 ps-5 '>
                            <button className='md:h-9 h-8' onClick={() => dispatch(setDarkMode())}>
                                <BsMoon className={`${dark ? 'hidden' : 'block'} text-[1.3rem] text-slate-400`} />
                                <FiSun className={`${dark ? 'block' : 'hidden'} text-[1.3rem] text-slate-400`} />
                            </button>
                            <button className='md:h-9 h-8'>
                                <TfiWorld className='text-[1.3rem] text-slate-400' />
                            </button>
                            <button className='md:h-9 h-8'>
                                <BsFillLightningChargeFill className='text-[1.3rem] text-slate-400' />
                            </button>

                            <Menu shadow="md" width={170} >
                                <Menu.Target>
                                    <button className='h-9'>
                                        <img src="https://magicai.liquid-themes.com/upload/images/logo/rYby-collapsed-magicai-logo.svg" alt="" />
                                    </button>
                                </Menu.Target>

                                <Menu.Dropdown >
                                    <div className='px-3 py-2 space-y-1'>
                                        <h1 className=' text-slate-500 text-sm'>Admin</h1>
                                        <h4 className=' text-slate-500 text-sm'>admin@gmail.com</h4>
                                    </div>
                                    <Menu.Divider />
                                    <Menu.Item leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}>
                                        Setting
                                    </Menu.Item>
                                    <Menu.Item leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} />}>
                                        Logout
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </div>
                    </div>
                </div>

                <div className='mt-[4rem] md:mt-[4.3rem] py-4 px-2 '>
                    <div>
                        <h4 className=' font-light text-sm text-slate-500'>Dashboard</h4>
                        <h1 className='text-2xl md:text-3xl font-bold'>Overview</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar