import React, { useEffect } from 'react'
import Header from './partials/Header'
import { TypeAnimation } from 'react-type-animation';
import BoltIcon from '@mui/icons-material/Bolt';
import ModeIcon from '@mui/icons-material/Mode';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import PublicIcon from '@mui/icons-material/Public';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import ListIcon from '@mui/icons-material/List';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { BsPlayFill } from "react-icons/bs"
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import "./Index.css"
import useScroll from '../../hooks/useScroll';
import { motion } from "framer-motion"
const Index = () => {
    const scroll = useScroll()
    return (
        <>
            <Header />
            <div className=' hero  w-full relative overflow-hidden'>
                <motion.div
                    initial={{ y: -40, x: 40 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{
                        repeat: Infinity,
                        type: "spring",
                        duration: 2,
                        delay: 2,
                    }} className="hero1  "></motion.div>
                <motion.div initial={{ y: 40, x: -40 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{
                        repeat: Infinity,
                        type: "spring",
                        duration: 2,
                        delay: 2,
                    }} className="hero2 "></motion.div>
                <motion.div initial={{ y: -40, x: 40 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{
                        repeat: Infinity,
                        type: "spring",
                        duration: 2,
                        delay: 2,
                    }} className="hero3 "></motion.div>
                <div
                    className="site-section flex items-center justify-center min-h-screen text-center text-white relative py-52 max-md:pb-16 max-md:pt-48 overflow-hidden"
                >
                    <div className='flex flex-col justify-center  w-full'>
                        <div className=' flex justify-center mb-5'>
                            <div className='text-sm flex space-x-6 py-0.5 px-3 rounded-xl bg-[#ffffff23]'>
                                <h6>MagicAI</h6>
                                <ul className=' list-disc'><li className=' text-slate-300'> Unleash the Power of A</li></ul>
                            </div>
                        </div>
                        <h1
                            style={{ fontSize: '5em', display: 'inline-block', fontWeight: 900, fontFamily: 'Poppins', position: 'relative' }}
                        ><span>
                                Ultimate AI
                            </span>
                            <div
                                style={{ display: 'block', position: 'absolute', left: 0, width: '100%', top: 80 }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Generator',
                                        2000,
                                        'Assistant',
                                        2000,
                                        'Chatbot',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                />
                                <BoltIcon style={{ fontSize: '6rem' }} />
                            </div>
                        </h1>
                        <div className='mt-24'>
                            <h4 className=' text-2xl text-slate-300'>All-in-one platform to generate AI content <br /> and start making money in minutes.</h4>
                        </div>
                        <div className='mt-10 flex w-full  justify-center'>
                            <div className='flex space-x-3 py-1.5 px-3 justify-center items-center rounded-full bg-[#ffffff23]'>
                                <PlayCircleFilledWhiteIcon style={{ fontSize: '3rem' }} />
                                <h4 className='text-white font-bold'>See how it works</h4>
                            </div>

                        </div>
                        <div className='mt-6'>
                            <h5 className=' text-lg text-slate-200'>
                                Discover MagicAI
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* features */}
            <div className='mt-3'>
                <h1 className='text-[3rem] text-center font-semibold font-[Poppins]'>The Future of AI.</h1>
                <div className='w-[90%] mt-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 md:gap-y-5 gap-y-5 lg:gap-y-8  justify-center mx-auto p-4 md:p-8 lg:p-10 '>
                    <div className=' w-[80%] futures'>
                        <div className='space-x-5 flex '>
                            <div className='bg-[#eaeaea] futures-icon flex items-center h-full p-1.5 md:p-2 rounded-xl'>
                                <ModeIcon style={{ fontSize: '2rem' }} />
                            </div>
                            <div>
                                <h1 className='text-lg font-medium md:font-semibold'>
                                    AI Generator
                                </h1>
                                <h5 className=' text-slate-600'>Generate text, image, code, chat and even more with</h5>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[80%] futures'>
                        <div className='space-x-5 flex '>
                            <div className='bg-[#eaeaea] futures-icon flex items-center h-full p-1.5 md:p-2 rounded-xl'>
                                <LineAxisIcon style={{ fontSize: '2rem' }} />
                            </div>
                            <div>
                                <h1 className='text-lg font-medium md:font-semibold'>
                                    Advanced Dashboard
                                </h1>
                                <h5 className=' text-slate-600'>Access to valuable user insight, analytics and activity.</h5>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[80%] futures'>
                        <div className='space-x-5 flex '>
                            <div className='bg-[#eaeaea] futures-icon flex items-center h-full p-1.5 md:p-2 rounded-xl'>
                                <CurrencyRubleIcon style={{ fontSize: '2rem' }} />
                            </div>
                            <div>
                                <h1 className='text-lg font-medium md:font-semibold'>
                                    Payment Gateways
                                </h1>
                                <h5 className=' text-slate-600'>Securely process credit card, debit card, or other methods.</h5>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[80%] futures'>
                        <div className='space-x-5 flex '>
                            <div className='bg-[#eaeaea] futures-icon flex items-center h-full p-1.5 md:p-2 rounded-xl'>
                                <PublicIcon style={{ fontSize: '2rem' }} />
                            </div>
                            <div>
                                <h1 className='text-lg font-medium md:font-semibold'>
                                    Multi-Lingual
                                </h1>
                                <h5 className=' text-slate-600'>Ability to understand and generate content in different languages</h5>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[80%] futures'>
                        <div className='space-x-5 flex '>
                            <div className='bg-[#eaeaea] futures-icon flex items-center h-full p-1.5 md:p-2 rounded-xl'>
                                <ListIcon style={{ fontSize: '2rem' }} />
                            </div>
                            <div>
                                <h1 className='text-lg font-medium md:font-semibold'>
                                    Custom Templates
                                </h1>
                                <h5 className=' text-slate-600'>Add unlimited number of custom prompts for your customers.</h5>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[80%] futures'>
                        <div className='space-x-5 flex '>
                            <div className='bg-[#eaeaea] futures-icon flex items-center h-full p-1.5 md:p-2 rounded-xl'>
                                <DonutLargeIcon style={{ fontSize: '2rem' }} />
                            </div>
                            <div>
                                <h1 className='text-lg font-medium md:font-semibold'>
                                    Support Platform
                                </h1>
                                <h5 className=' text-slate-600'>Access and manage your support tickets from your dashboard.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Generators */}
            <div>
                <div className='border rounded-2xl p-12'>
                    <div>

                    </div>

                </div>
            </div>
            {/* how it works */}
            <div className={`fixed bottom-0 right-0 m-7 transition-all  rounded-2xl shadow-2xl bg-white flex space-x-5 px-3 py-2.5 ${scroll ? 'block' : 'hidden'}`}>
                <div>
                    <div className='bg-[#7E62F1] p-4 rounded-full'>
                        <BsPlayFill className='text-white' />
                    </div>
                </div>
                <div>
                    <p className='text-sm text-slate-600'>See it action</p>
                    <h3 className=' font-bold text-sm'>How it works?</h3>
                </div>
            </div>
        </>

    )
}

export default Index
