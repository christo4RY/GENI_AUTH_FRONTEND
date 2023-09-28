import Avatar from '@mui/material/Avatar';
import React from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { deepOrange } from '@mui/material/colors';

const Navbar = () => {
  return (
    <div className='w-[83%] pr-4 bg-white h-14 fixed top-0 px-3'>
        <nav className='w-full h-full flex items-center justify-between'>
            <div>
                <AiOutlineHome className=' text-2xl'/>
            </div>
            <div>
            <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30}}>N</Avatar>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
