import React from 'react'
import Petrong from '../../src/assets/image/BookACall.png'
import Date from '../../src/assets/image/Date.png'
import Time from '../../src/assets/image/Time Zone.png'
import { GrChat } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Img1 from '../assets/image/bookACall1.png'
function BookACall() {
    return (
        <>
            <section className='w-full md:flex bg-[#EBFAF4] pt-12 px-10'>
                <div className='w-full md:w-[50%] md:h-[600px] bg-[url(src/assets/bgline.png)] bg-[length:100%_100%] ' >
                    <img src={Img1} alt="" className='w-full h-[470px] ' />
                </div>

                <div className='w-full md:w-[50%] h-[200px] px-10'  >
                    <div className='flex py-10 '>
                        <div className=' w-[64px] h-[3px] bg-[#00d285] mt-10 md:mt-[65px]  '></div>
                        <h1 className=' text-[36px] md:mt-9 font-bold mr-[120px] '>Book a call</h1>
                    </div>
                    <p className=' font-semibold text-[23px] mt-[-8px] '>
                        Select a suitable time slot and have a face-to-face video call with
                        a project manager to discuss your needs.
                    </p>
                </div>
            </section>


            <section className='w-full md:flex '>
                <div className='w-full md:w-[50%] lg:w-[35%] bg-black text-white md:h-[560px] pl-10 md:ml-10 mt-48 pb-14'>
                    <img src={Petrong} alt="" className='pt-10' />
                    <h2 className='text-4xl font-bold mt-16'>30 Minute Meeting</h2>
                    <p className='mt-10'>Web conferencing details provided upon confirmation.</p>
                    <p className='flex mt-10'> <img src={Date} alt="" className='mr-4' />Tuesday, December, 3:00 AM</p>
                    <p className='flex mt-10'> <img src={Time} alt="" className='mr-4' />West African Time GMT</p>
                </div>

                <div className='w-full md:w-[65%] lg:w-[65%]'>
                    <div className='w-[80px] h-[80px] rounded-full rounded-tr-lg bg-[#00D285] relative mt-10 lg:ml-[85%] ml-[70%]'>
                        <Link to={"chat"}>
                            <GrChat className='mx-auto text-white text-xl absolute top-8 left-7' />
                        </Link>
                    </div>
                    <form className='md:w-[90%] lg:w-[65%] xl:w-[50%]  mx-auto pb-12 px-4 md:px-0'>

                        <div className="flex-wrap md:flex justify-between md:gap-0 mx-[20%] md:mx-0">
                            <div>
                                <label htmlFor="" className='md:mx-5 mx-12'>Month</label> <br />
                                <select name="" id="" className='lg:p-4 px-10 py-5 md:p-5 mb-4 md:mb-0  bg-[#EBFAF4]'>
                                    <option value="">December</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className='md:mx-5 mx-12 '>Day</label> <br />
                                <select name="" id="" className='px-10 py-5 md:py-5 lg:p-4 mb-4 md:mb-0  bg-[#EBFAF4]'>
                                    <option value="">Tuesday</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className='md:mx-5 mx-12'>Time</label> <br />
                                <select name="" id="" className='xl:p-4 lg:p-4 mb-4 md:mb-0 px-10 py-5 md:p-5 bg-[#EBFAF4]'>
                                    <option value="">3:00 AM</option>
                                </select>
                            </div>
                            <div className='lg:mt-4'>
                                <label htmlFor="" className='md:mx-5 mx-6'>Time Zone</label> <br />
                                <select name="" id="" className='xl:p-5 md:px-3 py-4 mb-10 px-6 md:p-5 bg-[#EBFAF4]'>
                                    <option value="">West African Time</option>
                                </select>
                            </div>
                        </div>
                        <label htmlFor="" className=''>Name</label>
                        <input type="text" className='w-full h-[55px] mt-2 mb-6  bg-[#EBFAF4]' />
                        <label htmlFor="">Email Address</label>
                        <input type="text" className='w-full h-[55px] mt-2 mb-6   bg-[#EBFAF4]' />
                        <label htmlFor="">Please share the topics you would like to discuss. That
                            will help us prepare for our meeting. *</label>
                        <input type="text" className='w-full h-[150px] mt-2 mb-6  bg-[#EBFAF4]' />
                        <button className='w-full bg-[#00D285] h-[55px] text-white'>Schedule Meeting</button>
                    </form>


                </div>
            </section>
        </>
    )
}

export default BookACall