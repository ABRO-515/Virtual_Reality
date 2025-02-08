import React from 'react'
import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'

const Page5 = () => {
    return (
        <>
            <main className='w-full h-full' >
                <div className='h-fit  flex flex-col items-center  border-b border-neutral-700git' >
                    <h1 className='mb-16 text-3xl px-8 text-center' >What People Are Saying</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">



                        {/* Card1 */}
                        <div className='bg-neutral-900 mx-6 rounded-lg border border-neutral-700 mb-10  '>

                            <div className='  px-8 py-6 flex flex-col gap-6' >
                                <p className='text-[#8D8D8D]' >I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>

                                <div className="flex gap-4 flex-row items-center">
                                    <img className='border rounded-full h-16 ' src={user1} alt="" />
                                    <div className="flex flex-col gap-2 ">
                                        <h2>Elsa</h2>
                                        <h4 className='text-neutral-600' >Stellar Technologies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card1 */}
                        <div className='bg-neutral-900 mx-6 rounded-lg border border-neutral-700 mb-10   '>

                            <div className='  px-8 py-6 flex flex-col gap-6' >
                                <p className='text-[#8D8D8D]' >I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>

                                <div className="flex gap-4 flex-row items-center">
                                    <img className='border rounded-full h-16 ' src={user2} alt="" />
                                    <div className="flex flex-col gap-2 ">
                                        <h2>Nofal</h2>
                                        <h4 className='text-neutral-600' >Stellar Technologies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card1 */}
                        <div className='bg-neutral-900 mx-6 rounded-lg border border-neutral-700 mb-10   '>

                            <div className='  px-8 py-6 flex flex-col gap-6' >
                                <p className='text-[#8D8D8D]' >I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>

                                <div className="flex gap-4 flex-row items-center">
                                    <img className='border rounded-full h-16 ' src={user3} alt="" />
                                    <div className="flex flex-col gap-2 ">
                                        <h2>Shahmir</h2>
                                        <h4 className='text-neutral-600' >Stellar Technologies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card1 */}
                        <div className='bg-neutral-900 mx-6 rounded-lg border border-neutral-700 mb-10   '>

                            <div className='  px-8 py-6 flex flex-col gap-6' >
                                <p className='text-[#8D8D8D]' >I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>

                                <div className="flex gap-4 flex-row items-center">
                                    <img className='border rounded-full h-16 ' src={user4} alt="" />
                                    <div className="flex flex-col gap-2 ">
                                        <h2>Umair Kaka</h2>
                                        <h4 className='text-neutral-600' >Stellar Technologies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card1 */}
                        <div className='bg-neutral-900 mx-6 rounded-lg border border-neutral-700 mb-10   '>

                            <div className='  px-8 py-6 flex flex-col gap-6' >
                                <p className='text-[#8D8D8D]' >I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>

                                <div className="flex gap-4 flex-row items-center">
                                    <img className='border rounded-full h-16 ' src={user5} alt="" />
                                    <div className="flex flex-col gap-2 ">
                                        <h2>Haseeb</h2>
                                        <h4 className='text-neutral-600' >Stellar Technologies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card1 */}
                        <div className='bg-neutral-900 mx-6 rounded-lg border border-neutral-700 mb-10   '>

                            <div className='  px-8 py-6 flex flex-col gap-6' >
                                <p className='text-[#8D8D8D]' >I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.</p>

                                <div className="flex gap-4 flex-row items-center">
                                    <img className='border rounded-full h-16 ' src={user6} alt="" />
                                    <div className="flex flex-col gap-2 ">
                                        <h2>Noman</h2>
                                        <h4 className='text-neutral-600' >Stellar Technologies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </main>
        </>
    )
}

export default Page5
