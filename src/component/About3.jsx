import React from 'react'
import about1 from "../assets/image/About3.png"
import about2 from "../assets/image/About4.png"
import about3 from "../assets/image/about5.png"
import about4 from "../assets/image/about6.png"
import { IoIosArrowRoundForward } from "react-icons/io";
function About3() {
  return (
    <>
     <div className='w-full h-[380px]  p-8'>
                <div className=' flex items-center'>
                    <div className='free w-11 h-0.5 ml-5 bg-[#00D285]'></div>
                    <p className='free w-[68%] font-medium text-lg text-start ml-2'>OUR SERVICES</p>
                </div>
                <p className='w-[425px] h-28  leading-10  text-start font-medium text-4xl p-4'>Methodologies &
                    Technology We Use.</p>
                <div className='w-[450px] font-normal text-start pl-5'>
                    We  build tour product from scatch with top most frontend and
                    backend framework. We also focus on native end user
                    experinces, providing full performance on both iOS
                    and android devices
                </div>
            </div>

            <div className='w-full px-8 h-[600px]  relative'>
             <img src={about3} className='w-full ' />
                <div className=' absolute top-[-100px] right-24 '>
                    <img src={about4} className=' ' />
                    <div className=' absolute top-28 right-32'>
                        <h1 className='font-bold pb-6'>Laravel</h1>
                        <IoIosArrowRoundForward />  

                    </div>
                </div>
                <div className=' absolute top-[-100px] right-[440px]   '>
                    <img src={about4} className=' ' />
                    <div className=' absolute top-28 right-32'>
                        <h1 className='font-bold pb-6'>Node.js</h1>
                        <IoIosArrowRoundForward />
                    </div>
                </div>
                <div className=' absolute top-40 right-[440px]'>
                    <img src={about4} className='' />
                    <div className=' absolute top-28 right-32'>
                        <h1 className='font-bold pb-6'>Vue..js</h1>
                        <IoIosArrowRoundForward />
                    </div>
                </div>
                <div className=' absolute top-40 right-24'>
                    <img src={about4} className='' />
                    <div className=' absolute top-28 right-32'>
                        <h1 className='font-bold pb-6'>React.js</h1>
                        <IoIosArrowRoundForward />
                    </div>  
                </div>
            </div>

            <div className="w-full h-[560px] md:flex p-8">
                <div className='w-full md:w-[50%]  '>
                    <div className=' flex items-center'>
                        <div className='free w-11 h-0.5 ml-5 bg-[#00D285]'></div>
                        <p className='free w-[68%] font-medium text-lg text-start ml-2'>OUR VALUE</p>
                    </div>
                    <p className='w-[425px] h-28  leading-10  text-start font-medium text-4xl p-4'>A melting pot for the best idea</p>
                    <div className='w-full flex' >
                        <div className='w-[20%] p-8  '>
                            <img src={about2} className='h-full w-full ' />
                        </div>
                        <div className='w-[70%]  text-start'>
                            <div className='h-[90px] pt-8 '>
                                <h1 className='font-bold'>Integrity</h1>
                                <p className='text-inherit font-normal text-slate-700'>We hold ourself to a strong ethical and moral code</p>
                            </div>
                            <div className='h-[130px] pt-12'>
                                <h1 className='font-bold'>Trust</h1>
                                <p className='text-inherit font-normal text-slate-700'>We are dependable loyal and hard working to archive the same goal.</p>
                            </div>
                            <div className='h-[90px] py-12'>
                                <h1 className='font-bold'>Excellence</h1>
                                <p className='text-inherit font-normal text-slate-700'>We consistenly strive to do high-quality work and give no room for errore</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-full  md:w-[50%] h-[560px] '>
                    <img src={about1} className='pt-24 sm:pt-16 md:pl-8 md:pt-12 pl-5 mx-auto ' />
                </div>
            </div>
    </>
  )
}

export default About3