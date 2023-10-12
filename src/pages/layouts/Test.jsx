import React, { useState } from 'react'

import Navbar from './admin/partials/Navbar';
import Sidebar from './admin/partials/Sidebar';

const Test = () => {
    const [sider, setSider] = useState(false)
    const [openSider, setOpneSider] = useState(false)
    const toggleMenu = () => {
        setSider(sider => !sider);
    }
    const toggleSider = () => {
        setOpneSider(open => !open);
    }

    return (
        <div className=' min-w-full dark:bg-[#1A1D23] dark:border-slate-700 dark:text-gray-100 relative z-50 flex'>
           <Sidebar sider={sider} toggleMenu={toggleMenu}/>
           <Navbar sider={sider} openSider={openSider} toggleSider={toggleSider}/>
        </div>
    )
}

export default Test
