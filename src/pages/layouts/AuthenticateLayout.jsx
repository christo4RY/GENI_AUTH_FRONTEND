import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './partials/Sidebar'
import Navbar from './partials/Navbar'

const AuthenticateLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full relative'>
                <Navbar />
                <div className=' bg-slate-100 h-full md:pt-20 p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthenticateLayout
