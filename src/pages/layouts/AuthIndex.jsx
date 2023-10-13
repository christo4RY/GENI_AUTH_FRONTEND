import React, { useState } from 'react'

import Navbar from './admin/partials/Navbar';
import Sidebar from './admin/partials/Sidebar';
import { Outlet } from 'react-router-dom';

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
        <div className='main-layout '>
            <Sidebar sider={sider} toggleMenu={toggleMenu} />
            <Navbar sider={sider} openSider={openSider} toggleSider={toggleSider}>
                <Outlet />
            </Navbar>
        </div>
    )
}

export default Test
