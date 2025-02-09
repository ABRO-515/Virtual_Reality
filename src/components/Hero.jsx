import React, { useEffect } from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {

    return (
        <>
     {/* Preload videos */}
     <link rel="preload" as="video" href={video1} type="video/mp4" />
            <link rel="preload" as="video" href={video2} type="video/mp4" />


            <main className='w-full h-full' >
                <div className='xl:mt-44  mt-16  lg:min-h-screen h-screen  flex flex-col items-center justify-center'>
                    {/* Text-Box */}
                    <div className='text-5xl sm:text-6xl px-6 text-center' >
                        <h1>VirtualR build tools</h1>
                        <h1 className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ' >for developers</h1>

                    </div>

                    {/* TExt-2 */}

                    <h4 className='mt-10 px-12 xl:px-48 text-center text-neutral-500' >Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</h4>


                    {/* Btns */}
                    <div className="btns mt-10 flex gap-3">
                        <button className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md w-fit '>Start For Free</button>
                        <button className='bg-transparent border py-2 px-3 rounded-md w-fit'>Documentation</button>
                    </div>


                    {/* videos  */}
                    <div className="flex gap-3  sm:my-20 my-8 mx-1 ">
                        <video id='video1'  className='  2xl:h-72 sm:h-40  h-[25vw] rounded-md border border-orange-700 shadow-sm shadow-orange-400' muted autoPlay loop playsInline preload='auto' defaultMuted>
                            <source src={video1} type="video/mp4" />
                        </video>
                        <video id='video2' className='  2xl:h-72 sm:h-40  h-[25vw] rounded-md border border-orange-700 shadow-sm shadow-orange-400' muted autoPlay loop playsInline preload='auto' defaultMuted>
                            <source src={video2} type="video/mp4" />
                        </video>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Hero
