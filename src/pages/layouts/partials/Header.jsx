import React, { useEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import useScroll from '../../../hooks/useScroll';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ClearIcon from '@mui/icons-material/Clear';
import { Menu, Button, Text, rem } from '@mantine/core';
import {
    IconSettings,
    IconMessageCircle,
} from '@tabler/icons-react';
import "./Header.css"
import { CircleFlag } from 'react-circle-flags';

const Header = () => {
    const [menu, setMenu] = useState(false)
    const scroll = useScroll()
    const openMenu = () => {
        setMenu((menu) => !menu);
    }

    return (
        <div className={`flex fixed transition-colors z-[999] top-0 left-0 h-16 py-9 border-b border-[#ffffff33] ${scroll ? 'bg-white' : 'bg-transparent'} w-full items-center px-7 justify-between`}>
            <div >
                <img src="https://magicai.liquid-themes.com/upload/images/logo/TLqO--magicai-logo.svg" alt="" />
            </div>
            <div className='flex lg:space-x-14 xl:space-x-24'>
                <ul className=' hidden lg:flex lg:space-x-2 xl:space-x-7 items-center'>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' bg-[#57575723]' : 'text-white bg-[#ffffff23]'} `}>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>

                            Features
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>

                            How it Works
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>
                            Testimonials
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>
                            Pricing
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>
                            FAQ
                        </Link>
                    </li>
                </ul>
                <div className='flex space-x-5'>
                    <div className={`hidden cursor-pointer  border sm:flex items-center ${scroll ? '' : 'border-[#ffffffb2] hover:bg-white '} p-1 md:p-1.5 justify-center rounded-full`}>



                        <Menu shadow="md"  >
                            <Menu.Target>
                                <LanguageIcon className={`${scroll ? '' : 'text-white hover:text-black'}`} />
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item leftSection={<CircleFlag countryCode="us" style={{ width: 20, height: 20 }} />}>
                                    English
                                </Menu.Item>
                                <Menu.Item leftSection={<CircleFlag countryCode="mm" style={{ width: 20, height: 20 }} />}>
                                    Myanmar
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>

                    </div>
                    <ul className='flex space-x-3 items-center'>
                        <li className='hidden sm:block' >
                            <Link to='/login' className={` rounded-lg ${scroll ? 'bg-[#57575723] hover:text-white hover:bg-black duration-300 transition-colors' : 'text-white bg-[#ffffff23] hover:bg-black duration-300 transition-colors'} px-4 py-2.5`} >
                                Sign In
                            </Link>
                        </li>
                        <li className='hidden sm:block' >
                            <Link to='/register' className={` rounded-lg ${scroll ? 'bg-[#57575723] hover:text-white hover:bg-black duration-300 transition-colors' : 'text-white bg-[#ffffff23] hover:bg-black duration-300 transition-colors'} px-4 py-2.5`} >
                                Sign Up
                            </Link>
                        </li>
                        <li className='block lg:hidden'>
                            <div onClick={openMenu} className={`  ${scroll ? 'bg-[#57575723] ' : 'bg-[#ffffff23]'} cursor-pointer transition-all duration-200 flex items-center rounded-full p-[0.320rem] ${menu ? 'hidden' : 'block'}`}>
                                <DragHandleIcon style={{ fontSize: '1.9rem', color: 'white' }} />
                            </div>
                            <div onClick={openMenu} className={` ${scroll ? 'bg-[#57575723] ' : 'bg-[#ffffff23]'} cursor-pointer transition-all duration-200 flex items-center rounded-full p-[0.320rem] ${menu ? 'block' : 'hidden'}`}>
                                <ClearIcon style={{ fontSize: '1.9rem', color: 'white' }} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`  w-full bg-[#343C57] transition-all duration-300 z-10 left-0 top-0 ${menu ? 'block lg:hidden translate-y-[25%] ' : 'hidden -translate-y-full'} absolute `}>
                <ul className='p-6 py-8 space-y-4'>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' bg-[#57575723]' : 'text-white bg-[#ffffff23]'} `}>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>

                            Features
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>

                            How it Works
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>
                            Testimonials
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>
                            Pricing
                        </Link>
                    </li>
                    <li >
                        <Link to='/' className={`py-2 px-3.5 rounded-lg ${scroll ? ' hover:bg-[#57575723]' : 'text-white hover:bg-[#ffffff23]'} `}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
