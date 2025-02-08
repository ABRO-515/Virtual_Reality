import React from 'react'
import { BotMessageSquare } from 'lucide-react';
import { GlobeLock } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { Fingerprint } from 'lucide-react';

const Page2 = () => {
    return (
        < >
            <main className='w-full h-full' >
                <div className='flex flex-col items-center justify-normal h-fit border-b border-neutral-600' >
                    <h2 className='bg-[#171717] px-3 w-fit rounded-[20px] py-2 text-orange-500 ' >Feature</h2>

                    {/* Text box */}
                    <div className='flex gap-2  mt-10 px-4 text-center' >
                        <h1 className='text-[2.2rem] md:text-5xl xl:text-6xl px-4' >Easily build
                            <span className='ml-2 text-[2.2rem] md:text-5xl xl:text-6xl  bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent' >your code</span>
                        </h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3  xl:gap-24 lg:gap-16 md:grid-cols-2 mt-20 md:gap-12 gap-24 md:px-4 mb-20 ">

                        {/* Card */}
                        <div className='flex px-8 gap-4 justify-center' >
                            <div className="mt-[-9px]">
                                <div className=' bg-[#171717] h-fit w-fit  rounded-full p-4 '>
                                    <BotMessageSquare className='text-orange-500 ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5     '>
                                <h5 className='text-xl' >Drag-and-Drop Interface</h5>
                                <p className='text-neutral-500 ' >Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className='flex px-8 gap-4 justify-center' >
                            <div className="mt-[-9px]">
                                <div className=' bg-[#171717] h-fit w-fit  rounded-full p-4 '>
                                    <Fingerprint  className='text-orange-500 ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5     '>
                                <h5 className='text-xl' >Multi-Platform Compatibility</h5>
                                <p className='text-neutral-500 ' >Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className='flex px-8 gap-4 justify-center' >
                            <div className="mt-[-9px]">
                                <div className=' bg-[#171717] h-fit w-fit  rounded-full p-4 '>
                                    <ShieldHalf className='text-orange-500 ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5     '>
                                <h5 className='text-xl' >Built-in Templates</h5>
                                <p className='text-neutral-500 ' >Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className='flex px-8 gap-4 justify-center' >
                            <div className="mt-[-9px]">
                                <div className=' bg-[#171717] h-fit w-fit  rounded-full p-4 '>
                                    <BatteryCharging className='text-orange-500 ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5     '>
                                <h5 className='text-xl' >Real-Time Preview</h5>
                                <p className='text-neutral-500 ' >Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className='flex px-8 gap-4 justify-center' >
                            <div className="mt-[-9px]">
                                <div className=' bg-[#171717] h-fit w-fit  rounded-full p-4 '>
                                    <PlugZap className='text-orange-500 ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5     '>
                                <h5 className='text-xl' >Collaboration Tools</h5>
                                <p className='text-neutral-500 ' >Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.</p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className='flex px-8 gap-4  justify-center ' >
                            <div className="mt-[-9px] ">
                                <div className=' bg-[#171717] h-fit w-fit  rounded-full p-4 '>
                                    <GlobeLock className='text-orange-500 ' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5  '>
                                <h5 className='text-xl' >Analytics Dashboard</h5>
                                <p className='text-neutral-500 ' >Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.</p>
                            </div>
                        </div>


                    </div>


              
    
                </div>
            </main>
        </>
    )
}

export default Page2
