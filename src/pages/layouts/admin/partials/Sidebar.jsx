import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx"
import { AiOutlineProject } from "react-icons/ai"
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import { showSubMenu, sidebarToggle } from '../../../../utilities/sidebar';
const Sidebar = () => {

    return (
        <div className={`w-0 md:w-[22%] lg:w-[18%] xl:w-[16%] sidebar `}>
            <div className='flex items-center space-x-2'>
                <img src="/images/geni-esign-removebg-120x120.png" className='w-9 md:w-10' alt="" />
                <h1 className='sidebar-brand'> GENI</h1>
            </div>
            <div onClick={sidebarToggle} className=' absolute top-5 cursor-pointer -right-3'>
                <MdKeyboardArrowLeft className='close-sidebar ' />
            </div>
            <ul className='sidebar-menu'>
                <li className='sidebar-link '>
                    <h5 className=' sidebar-lable'>user</h5>
                </li>
                <li className='sidebar-link'>
                    <Link to='#' className='sidebar-link-item'>
                        <RxDashboard className='sidebar-link-icon' />
                        <h5>Dashboard</h5>
                    </Link>
                </li>
                <li className='sidebar-link'>
                    <div className='sidebar-submenu' onClick={showSubMenu}>
                        <div className='sidebar-link-item'>
                            <AiOutlineProject className='sidebar-link-icon' />
                            <h5>Project</h5>
                        </div>
                        <MdKeyboardArrowDown className=' sidebar-link-item-icon' />
                    </div>
                    <ul className='sidebar-submenu-link'>
                        <li className='sidebar-submenu-link-item'>
                            <Link to="#" className='w-full'>Projects</Link>
                        </li>
                        <li className='sidebar-submenu-link-item'>
                            <Link to="#" className='w-full'>Codes</Link>
                        </li>
                        <li className='sidebar-submenu-link-item'>
                            <Link to="#" className='w-full'>Settings</Link>
                        </li>
                    </ul>
                </li>
                <li className='sidebar-link'>
                    <div className='sidebar-submenu' onClick={showSubMenu}>
                        <div className='sidebar-link-item'>
                            <AiOutlineProject className='sidebar-link-icon' />
                            <h5>Setting</h5>
                        </div>
                        <MdKeyboardArrowDown className=' sidebar-link-item-icon' />
                    </div>
                    <ul className='sidebar-submenu-link'>
                        <li className='sidebar-submenu-link-item'>
                            <Link to="#" className='w-full'>Settings</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
