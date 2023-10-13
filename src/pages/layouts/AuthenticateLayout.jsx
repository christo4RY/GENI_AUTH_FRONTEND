import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './admin/partials/Navbar';
import Sidebar from './admin/partials/Sidebar';

const AuthenticateLayout = () => {
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

export default AuthenticateLayout
