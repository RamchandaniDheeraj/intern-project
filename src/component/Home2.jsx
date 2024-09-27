import React from 'react'
import profile from "../assets/image/Ellipse.png"
import profile2 from "../assets/image/Petrong2.png"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Home2() {
    return (
        <>
            <section className='w-full py-11 bg-[#F2F4FA] md:flex'>
                <div className='md:w-[30%] px-4 md:px-0'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-11 h-0.5  bg-[#00D285]'></div>
                        <p className='w-[68%] font-medium text-lg '>TESTIMONIAL</p>
                    </div>
                    <p className='font-[650] text-[#000D2F]'>See how are clients feel about us.</p>
                </div>

                <div className='md:w-[70%] flex justify-between items-center md:relative '>
                    <div className='w-[80%] flex justify-center py-[20px]'>
                        <div className='w-[90%] md:w-[80%] md:h-[200px] bg-[#E1E1E1] rounded-[5px] md:relative'>
                            <div className='w-[100%] md:h-[200px]  md:absolute top-[-15%] left-[-5%] p-[10px] rounded-[5px] bg-[white]'>
                                <div className='card_img_section'>
                                    <img src={profile} alt="" className='profile_img w-[50px] h-[50px] rounded-full' />
                                </div>

                                <div className='text-start leading-[30px]' >
                                    Working with the PETRONG team has been a huge success! They're
                                    good people who care deeply about our business!
                                </div>

                                <div className='mt-[20px] md:flex'>
                                    <div className='w-[50%] '>
                                        <div className=' font-[550]'>John Doe</div>
                                        <div className=' font-[450]'>CEO</div>
                                    </div>
                                    <div className='w-[50%] mt-2 md:mt-0 md:flex md:items-end md:justify-end font-[550]'>
                                        Leonard Technologies
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[50px] h-[150px] md:absolute top-[65px] right-[120px]'>
                        <div className='w-[40px] h-[40px] border-2 border-[#00D285] rounded-[50%] relative' >
                            <IoIosArrowUp className=' absolute right-[11px] top-[10px] text-[#00D285]' />
                        </div>
                        <div className='w-[40px] h-[40px] bg-[#000D2F] rounded-[50%] mt-4 relative'>
                            <IoIosArrowDown className=' absolute right-[12px] top-[13px] text-[#00D285]' />
                        </div>
                    </div>
                </div>
            </section>



            <div className='w-full h-14 bg-[#F2F4FA]'>
                <div className=' flex items-center'>
                    <div className='w-11 h-0.5 ml-[60px]  bg-[#00D285]'></div>
                    <p className='text-start ml-2 font-medium text-lg '>ABOUT PACIOLI</p>
                </div>
            </div>

            <div className=' w-full md:flex ' >
                <div className='w-full md:w-[50%] md:pb-16 bg-black relative'>
                    <img src={profile2} className='w-full md:h-[350px] lg:h-[450px] md:ml-8 md:mt-32 lg:mt-16' />
                </div>
                <div className='w-full md:w-[50%] md:pl-3 bg-[#EBFAF4] px-2'>
                    <h1 className='md:pl-16 md:mt-24 pt-2 pb-6 text-4xl font-bold text-start '>Petrong & Pacioli</h1>
                    <p className=' font-medium text-sm leading-8 md:ml-16 text-start'>Pacioli is the flagship product at petrong software solutions, a tailored digital
                        lending tools that helps microfinance institutions to efficiently and quickly
                        onboard customers and to account reconciliation with financial inclution
                        as the motivation.
                        Pacioli improves female customers comfort with the service by specifically
                        design for unique constraint.</p>
                    <div className='sm:mt-12 md:flex'>
                        <button className='w-52 mb-5 md:mb-0 h-14 ml-14 bg-[#00D285] text-white rounded-[100px]  '>Pacioli</button>
                        <button className='w-52 h-14 ml-14 md:mb-0 mb-10 bg-[#00D285] text-white pr-3 rounded-[100px] '>Demo Video</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home2