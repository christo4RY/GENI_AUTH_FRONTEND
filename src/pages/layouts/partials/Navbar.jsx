import Avatar from '@mui/material/Avatar';
import React from 'react'
import { AiOutlineHome } from "react-icons/ai"
import { deepOrange } from '@mui/material/colors';
import { Menu, Button, Text, rem } from '@mantine/core';
import { toast } from 'react-toastify';
import {
  IconSettings,
  IconLogout
} from '@tabler/icons-react';
import { useLogoutUserMutation } from '../../../features/api/apiSlices/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../features/slices/auth/authTokenSlice';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [logoutUser] = useLogoutUserMutation()
  const authToken = useSelector((state) => state.authToken)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const logout = async () => {
    dispatch(setCredentials({ id: null, token: null }))
    toast.success('Logout successful')
    nav('/login')
    // const data = await logoutUser({id:authToken?.id})
    // console.log(data)
  }
  return (
    <div className='w-[83%] pr-4 bg-white h-14 fixed top-0 px-3'>
      <nav className='w-full h-full flex items-center justify-between'>
        <div>
          <AiOutlineHome className=' text-2xl' />
        </div>
        <div>

          <Menu shadow="sm" position="bottom-end" width={150}>
            <Menu.Target>
              <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30, cursor: "pointer" }}>N</Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>User</Menu.Label>
              <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                <Link to="profile">
                  Settings
                </Link>
              </Menu.Item>
              <Menu.Item onClick={logout} leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
