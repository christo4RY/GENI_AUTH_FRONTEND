import React from 'react'
import { Menu, rem } from '@mantine/core';
import {
    IconSettings,
} from '@tabler/icons-react';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { RxDashboard } from "react-icons/rx"

const Sidebar = ({ sider, toggleMenu }) => {
    return (
        <div className={` ${sider ? 'w-[7%]' : 'w-[20%]'} dark:bg-[#1A1D23] dark:text-gray-100  hidden md:block transition-all duration-300 fixed left-0 top-0 z-50 bg-white h-full border-r dark:border-slate-700 `}>
            <div className='px-7 py-6'>
                <img className={`${sider ? 'hidden' : 'flex'}`} src="https://magicai.liquid-themes.com/upload/images/logo/8r9f-dashboard-magicai-logo.svg" alt="" />
                <img className={`${sider ? 'flex' : 'hidden'}`} src="https://magicai.liquid-themes.com/upload/images/logo/rYby-collapsed-magicai-logo.svg" alt="" />
            </div>
            <div className='px-4 flex flex-col  '>
                <Menu shadow="md">
                    <Menu.Label className=' uppercase mb-1'>User</Menu.Label>
                    <Menu.Item className='  hover:bg-slate-100 text-center  mb-2' leftSection={<RxDashboard className='text-slate-500 dark:hover:text-indigo-600' style={{ width: rem(22), height: rem(22) }} />}>
                        <span className={` transition-all ${sider ? 'hidden' : 'block'}`}> <span className='text-slate-500'>Dashboard</span></span>
                    </Menu.Item>
                    <Menu.Item className=' hover:bg-slate-100 text-center   mb-2' leftSection={<IconSettings className='text-slate-500' style={{ width: rem(22), height: rem(22) }} />}>
                        <span className={` transition-all ${sider ? 'hidden' : 'block'}`}> <span className='text-slate-500'>Setting</span></span>
                    </Menu.Item>

                </Menu>
            </div>
            <div onClick={toggleMenu} className=' absolute top-6 cursor-pointer -right-3'>
                <IoIosArrowBack className={`text-xl w-7 h-7 border rounded-full dark:bg-slate-900 dark:border-slate-700 p-1 bg-slate-200 ${sider ? 'hidden' : 'flex'}`} />
                <IoIosArrowForward className={`text-xl w-7 h-7 border rounded-full dark:bg-slate-900 dark:border-slate-700 p-1 bg-slate-200 ${sider ? 'flex' : 'hidden'}`} />
            </div>
        </div>
    )
}

export default Sidebar
