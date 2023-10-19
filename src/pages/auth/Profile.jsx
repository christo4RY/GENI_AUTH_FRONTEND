import React, { useState } from 'react'
import { BsFillPencilFill } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Tab from '../../components/Tab';
import TabLink from '../../components/TabLink';
import TabPanel from '../../components/TabPanel';
import ChangePassword from '../../components/ChangePassword';
import UserInfo from '../../components/UserInfo';

const Profile = () => {
    const [isActive, setActive] = useState("info")

    return (
        <div className='w-full flex p-5 space-x-5'>
            <div className='w-[35%] md:w-[25%] lg:w-[20%] shadow-lg bg-white p-3 py-5 rounded-xl'>
                <div>
                    <h2 className='text-xl md:text-2xl text-slate-700 font-semibold'>User Profile</h2>
                </div>
                <div className='mt-14'>
                    <Tab>
                        <TabLink title="User Info" setActive={setActive} active={isActive} state="info">
                            <AiOutlineUser />
                        </TabLink>
                        <TabLink title="Change Password" setActive={setActive} active={isActive} state="pwd">
                            <RiLockPasswordLine />
                        </TabLink>
                    </Tab>
                </div>
            </div>
            <div className='w-[65%] md:w-[75%] lg:w-[80%] p-10 md:p-14 bg-white rounded-xl shadow-lg'>
                <div className='w-full flex space-x-8 items-center'>
                    <div className=' relative  '>
                        <img src="https://i.pinimg.com/236x/c2/45/48/c24548fbd6817d9761ad1e004e0ba7b7.jpg" className='w-24 h-24 object-cover relative rounded-full shadow-lg  shadow-indigo-400' alt="" />
                        <div className=' bg-orange-500 top-16 absolute p-[0.30rem] left-[4.8rem] shadow-lg hover:ring-offset-1 hover:ring-orange-500 cursor-pointer hover:bg-orange-600 transition-all duration-300 hover:shadow-md shadow-orange-400 rounded-full'>
                            <BsFillPencilFill color='#fff' size={12} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl text-slate-700 font-semibold'>Arkar 4RY</h2>
                        <h5 className='text-slate-400 text-xs md:text-sm'>Yangon,Myanmar</h5>
                    </div>
                </div>
                <div className='py-12'>
                    <TabPanel state='info' title="User Info" active={isActive}>
                       <UserInfo/>
                    </TabPanel>
                    <TabPanel state='pwd' title="Change Password" active={isActive}>
                        <ChangePassword/>
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default Profile
