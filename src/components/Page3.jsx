import React from 'react'
import code from '../assets/code.jpg'


import { Check } from 'lucide-react';

const Page3 = () => {
    return (
        <>
            <main className='w-full h-full' id='workflow' >
                <div className="h-fit flex flex-col items-center mb-24">
                    {/* Text box */}
                    <div className='flex gap-2  mt-16 px-4 text-center' >
                        <h1 className='text-[2.2rem] md:text-5xl  lg:text-[4rem]  xl:text-6xl px-4' >Accelerate your
                            <span className='ml-2 text-[2.2rem] md:text-5xl  lg:text-[4rem] xl:text-6xl  bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent' >coding workflow.</span>
                        </h1>
                    </div>




                    {/* Image + text */}
                    <div className="flex flex-col lg:flex-row lg:mt-16 ">

                        {/* Imgae */}
                        <img src={code} className='px-8 py-6 lg:size-[35rem] ' />


                        <div className="flex flex-col ">
                            {/* Card */}
                            <div className='flex px-6  justify-center mt-10' >
                                <div className=" mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px] border-green-400 p-1 '>
                                        <Check className='text-green-400 font-extrabold size-[15px]   ' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5     '>
                                    <h5 className='text-xl' >Code merge made easy</h5>
                                    <p className='text-neutral-500 ' >Track the performance of your VR apps and gain insights into user behavior.</p>
                                </div>
                            </div>


                            {/* Card */}
                            <div className='flex px-6  justify-center mt-10' >
                                <div className=" mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px] border-green-400 p-1 '>
                                        <Check className='text-green-400 font-extrabold size-[15px]   ' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5     '>
                                    <h5 className='text-xl' >Review code without worry</h5>
                                    <p className='text-neutral-500 ' >Track the performance of your VR apps and gain insights into user behavior.</p>
                                </div>
                            </div>


                            {/* Card */}
                            <div className='flex px-6  justify-center mt-10' >
                                <div className=" mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px] border-green-400 p-1 '>
                                        <Check className='text-green-400 font-extrabold size-[15px]   ' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5     '>
                                    <h5 className='text-xl' >AI Assistance to reduce time</h5>
                                    <p className='text-neutral-500 ' >Track the performance of your VR apps and gain insights into user behavior.</p>
                                </div>
                            </div>


                            {/* Card */}
                            <div className='flex px-6  justify-center mt-10' >
                                <div className=" mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px] border-green-400 p-1 '>
                                        <Check className='text-green-400 font-extrabold size-[15px]   ' />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5     '>
                                    <h5 className='text-xl' >Share work in minutes</h5>
                                    <p className='text-neutral-500 ' >Track the performance of your VR apps and gain insights into user behavior.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}

export default Page3
