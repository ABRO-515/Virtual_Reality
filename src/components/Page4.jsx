import React from 'react'
import { Check } from 'lucide-react';

const Page4 = () => {
    return (
        <>
            <main className='w-full h-full' >
                <div className="h-fit flex flex-col items-center mb-16">
                    <h1 className='text-4xl mb-16' >Pricing</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[11px] ">



                        {/* Card1 */}
                        <div className="flex-col flex border rounded-lg border-neutral-600 px-12 py-12 gap-4">
                            <h1 className='text-4xl  ' >Free</h1>
                            <div className='flex flex-row items-end mb-2 mt-4' >
                                <h1 className='text-5xl  ' >$0</h1>
                                <h5 className='text-neutral-500' >/Month</h5>
                            </div>

                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Private board sharing.</h3>
                            </div>
                            <div className="flex gap-2 items-center j">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>5 Gb Storage</h3>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Web Analaytics</h3>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Private Mode</h3>
                            </div>


                            {/* button */}
                            <button className='border border-orange-800 hover:bg-gradient-to-r from-orange-500 to-orange-800 py-3 mt-10 rounded-lg ' >Subscribe</button>

                        </div>

                        {/* Card1 */}
                        <div className="flex-col flex border rounded-lg border-neutral-600 px-10 py-12 gap-4">
                            <h1 className='text-4xl  ' >Pro</h1>
                            <div className='flex flex-row items-end mb-2 mt-4' >
                                <h1 className='text-5xl  ' >$10</h1>
                                <h5 className='text-neutral-500' >/Month</h5>
                            </div>

                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Private board sharing.</h3>
                            </div>
                            <div className="flex gap-2 items-center j">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>15 Gb Storage</h3>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Web Analaytics (Advance)</h3>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Private Mode</h3>
                            </div>


                            {/* button */}
                            <button className='border border-orange-800 hover:bg-gradient-to-r from-orange-500 to-orange-800 py-3 mt-10 rounded-lg ' >Subscribe</button>

                        </div>

                        {/* Card1 */}
                        <div className="flex-col flex border rounded-lg border-neutral-600 px-10 py-12 gap-4">
                            <h1 className='text-4xl  ' >Enterprise</h1>
                            <div className='flex flex-row items-end mb-2 mt-4' >
                                <h1 className='text-5xl  ' >$200</h1>
                                <h5 className='text-neutral-500' >/Month</h5>
                            </div>

                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Private board sharing.</h3>
                            </div>
                            <div className="flex gap-2 items-center j">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Unlimited Storage</h3>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>High Performance Network</h3>
                            </div>
                            <div className="flex gap-2 items-center ">
                                <div className="  bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <div className='  h-fit w-fit  rounded-full border-[3px]  p-1 '>
                                        <Check className='font-extrabold size-[14px]   ' />
                                    </div>
                                </div>
                                <h3>Private Mode</h3>
                            </div>


                            {/* button */}
                            <button className='border border-orange-800 hover:bg-gradient-to-r from-orange-500 to-orange-800 py-3 mt-10 rounded-lg ' >Subscribe</button>

                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Page4
