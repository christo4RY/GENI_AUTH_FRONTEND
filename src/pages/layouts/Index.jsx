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
import "https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"
const Index = () => {
    const scroll = useScroll()
    useEffect(() => {
        KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 2500, yoyo: true }
        ).start();
        KUTE.fromTo(
            '#blob3',
            { path: '#blob3' },
            { path: '#blob4' },
            { repeat: 999, duration: 2500, yoyo: true }
        ).start();
        KUTE.fromTo(
            '#blob5',
            { path: '#blob5' },
            { path: '#blob6' },
            { repeat: 999, duration: 2500, yoyo: true }
        ).start();
    }, [])
    return (
        <>
            <Header />
            <div className=' hero  w-full relative '>
                {/* <motion.div
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
                    }} className="hero3 "></motion.div> */}

                <div className="hero4 ">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path id="blob1" fill="#D0E2FF" d="M55,-19.1C63.8,9.2,58.3,40.9,40.3,53.4C22.4,66,-8,59.4,-32.6,42.1C-57.1,24.9,-76,-3,-69.6,-27.9C-63.2,-52.9,-31.6,-75,-4.2,-73.7C23.1,-72.3,46.2,-47.4,55,-19.1Z" transform="translate(100 100)" />
                        <path id="blob2" fill="#D0E2FF" d="M53.6,-14.1C61.9,7.9,55.7,38,38.1,50.3C20.5,62.5,-8.4,57,-26.8,42.3C-45.2,27.7,-53,4,-46.8,-15.3C-40.5,-34.7,-20.3,-49.6,1.2,-50C22.7,-50.3,45.4,-36.2,53.6,-14.1Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="hero5 ">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path id='blob4' fill="#D0E2FF" d="M64.2,-23.7C71.4,1.2,57.2,30.3,33.3,48.3C9.3,66.3,-24.5,73.3,-41.6,60.2C-58.6,47.1,-59,13.9,-49.3,-14.6C-39.5,-43,-19.8,-66.8,4.4,-68.2C28.5,-69.6,57,-48.7,64.2,-23.7Z" transform="translate(100 100)" />
                        <path id='blob3' fill="#D0E2FF" d="M41,-44.6C53,-29.1,62.3,-14.5,65.5,3.2C68.8,21,65.9,42.1,54,50.8C42.1,59.5,21,55.8,0,55.8C-20.9,55.7,-41.9,59.3,-56.1,50.6C-70.4,41.9,-77.9,20.9,-76.6,1.3C-75.3,-18.3,-65.1,-36.7,-50.9,-52.2C-36.7,-67.8,-18.3,-80.6,-1.9,-78.7C14.5,-76.8,29.1,-60.2,41,-44.6Z" transform="translate(100 100)" />

                    </svg>
                </div>
                <div className="hero6 ">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path id="blob5" fill="#D0E2FF" d="M51.9,-58.8C61.6,-42.1,60.1,-21.1,60.5,0.4C61,22,63.4,43.9,53.7,52.3C43.9,60.7,22,55.4,0.6,54.9C-20.8,54.3,-41.6,58.4,-53,50C-64.3,41.6,-66.2,20.8,-62.7,3.5C-59.2,-13.8,-50.4,-27.7,-39,-44.3C-27.7,-61,-13.8,-80.5,3.6,-84.1C21.1,-87.7,42.1,-75.4,51.9,-58.8Z" transform="translate(100 100)" />
                        <path id="blob6" fill="#D0E2FF" d="M39.2,-66.6C44.9,-57.3,39.6,-36.5,46.2,-21.3C52.7,-6.2,71.1,3.4,75.5,14.7C79.9,26,70.1,39.2,59.5,51.6C48.8,64,37.2,75.7,22.8,81.9C8.3,88.1,-9,88.9,-23.4,83.1C-37.8,77.3,-49.2,64.9,-58.3,51.9C-67.3,38.9,-74,25.3,-78.8,9.7C-83.6,-5.9,-86.5,-23.3,-77.2,-31.7C-67.8,-40,-46.2,-39.2,-31.3,-44.3C-16.4,-49.5,-8.2,-60.6,4.3,-67.2C16.7,-73.8,33.4,-76,39.2,-66.6Z" transform="translate(100 100)" />

                        {/* <path  id="blob6" fill="#A7F0BA" d="M45.6,-73.4C58.3,-62.8,67.1,-48.7,72.5,-34C77.9,-19.2,79.9,-3.7,79.8,13C79.7,29.6,77.5,47.5,67.5,57.8C57.5,68.2,39.6,71,23.6,71.6C7.7,72.2,-6.3,70.6,-20.6,67.6C-34.9,64.5,-49.5,60,-62.3,50.8C-75.1,41.7,-86.1,27.8,-86.4,13.5C-86.7,-0.8,-76.4,-15.5,-67.3,-28.9C-58.3,-42.3,-50.5,-54.4,-39.5,-65.8C-28.5,-77.2,-14.2,-87.8,1.1,-89.6C16.5,-91.3,32.9,-84.1,45.6,-73.4Z" transform="translate(100 100)" /> */}

                    </svg>
                </div>
                <div
                    className="site-section flex items-center justify-center min-h-screen text-center text-white relative py-52 max-md:pb-16 max-md:pt-48 overflow-hidden"
                >
                    <div className='flex flex-col justify-center  w-full'>
                        <div className=' flex justify-center mb-5'>
                            <div className='text-sm flex space-x-6 py-0.5 px-3 rounded-xl bg-[#ffffff23]'>
                                <h6>GENIID</h6>
                                <ul className=' list-disc'><li className=' text-slate-300'> All In One Platform</li></ul>
                            </div>
                        </div>
                        <h1
                        className='text-[3rem] sm:text-[4rem] lg:text-[5rem]'
                            style={{  display: 'inline-block', fontWeight: 900, fontFamily: 'Poppins', position: 'relative' }}
                        ><span>
                                GENI ID
                            </span>
                            <div
                            className=' sm:top-[80px] top-[50px]'
                                style={{ display: 'block', position: 'absolute', left: 0, width: '100%' }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Authentication',
                                        2000,
                                        'Esignature',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                />
                                <BoltIcon style={{ fontSize: '6rem' }} />
                            </div>
                        </h1>
                        <div className='mt-20 sm:mt-24 sm:px-0 px-2'>
                            <h4 className='text-lg sm:text-xl lg:text-2xl text-slate-300'>Simplify Access with GENI-ID <br /> "Your All-in-One Identity for a Secure and Seamless Experience"  </h4>
                        </div>
                        <div className='mt-10 flex w-full  justify-center'>
                            <div className='flex space-x-3 py-1.5 px-3 justify-center items-center rounded-full bg-[#ffffff23]'>
                                <PlayCircleFilledWhiteIcon style={{ fontSize: '3rem' }} />
                                <h4 className='text-white font-bold'>See how it works</h4>
                            </div>

                        </div>
                        <div className='mt-6'>
                            <h5 className=' text-base sm:text-lg text-slate-200'>
                                Discover MagicAI
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="custom-shape">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>

            {/* features */}
            <div className='mt-12 md:mt-24 relative'>

                <h1 className='text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-center font-semibold font-[Poppins]'>Projects of GENI.</h1>
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
            <div className={`fixed bottom-0 right-0 m-5 md:m-7 transition-all  rounded-2xl shadow-2xl bg-white flex space-x-4 md:space-x-5 px-3 py-2.5 ${scroll ? 'block' : 'hidden'}`}>
                <div>
                    <div className='bg-[#7E62F1] p-3 md:p-4 rounded-full'>
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
