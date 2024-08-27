import React from 'react'
import Img1 from '../assets/image/expertise1.png'
import psd1 from "../assets/image/PsD1.png"
import psd2 from "../assets/image/PsD2.png"
import psd3 from "../assets/image/PsD3.png"

function PartnershipDetails() {
    return (
        <>
            <div className='w-full md:flex bg-[#EBFAF4] pt-12 md:px-16 px-2'>
                <div className='w-full md:w-[50%] md:h-[600px] bg-[url(src/assets/bgline.png)] bg-[length:100%_100%] ' >
                    <img src={Img1} alt="" className='w-full md:h-[470px] ' />
                </div>
                <div className='w-full md:w-[50%] md:px-7'  >
                    <div className='flex'>
                        <h1 className='text-[36px] md:text-[50px] md:mt-9 font-bold md:mr-[120px]'>PARTNERSHIP
                            FOR AGENCIES</h1>
                        <div className=' md:w-[155px] md:h-[155px] md:ml-[-120px]  bg-[#00D28566] rounded-[50%]'></div>
                    </div>
                    <p className=' font-semibold text-[14px] mt-[-8px] leading-[30px] md:leading-[45px] md:pr-[200px]'>
                        A reliable partner that delivers solutions to your business
                        challenges andstays by your side in the long term.
                        Having the whole spectrum of web development expertise,
                        we are here to take care of your projects while making it possible
                        for you to focus on growing your own business.
                    </p>

                </div>
            </div>
            {/* page 1 */}
            <div className='w-full md:flex p-5  '>
                <div className='w-full md:w-[50%] pt-24'>
                    <h1 className='text-start pb-4 font-bold text-4xl '>State your challenge, we come
                        with possible solutions.</h1>
                    <p className='text-start text-base pb-4 font-normal leading-7 text-[#000D2F] '>Your challenges require unique approaches.
                        Maybe you need a trusted team to
                        handle your many ongoing projects. Or look for a jelled team with multi-expertise
                        to take care of your complex project. Perhaps, you search for a dedicated professional
                        to maintain your project on daily basis, or you have a whole ‘nother kind of problem.
                        Whatever your challenge is, we are here to find a working solution.</p>
                </div>

                <div className='w-[350px]c md:w-[50%] md:pt-28 md:pl-2 lg:pt-0 sm:mx-auto pt-6 sm:w-[350px] '>
                    <img src={psd1} className='mx-auto' />
                </div>
            </div>

            {/* page 2 */}
            <div className='md:flex  p-5'>
                <div className='w-[350px]c md:w-[50%] lg:pt-6 md:pl-3 sm:mx-auto pt-6 sm:w-[350px] '>
                    <img src={psd2} className='mx-auto' />
                </div>

                <div className='w-full md:w-[60%] pl-5 sm:pt-12 lg:pt-32 '  >
                    <h1 className='text-start font-bold text-4xl pb-5'>Pilot Project</h1>
                    <p className='text-start text-base tracking-tighter pb-4 font-normal text-[#000D2F] leading-8'>We’ll give you the opportunity to evaluate our work via a pilot project and see if we
                        are the right partner for your business. A pilot project could be the coding of 1
                        homepage, a specific feature, or just the progress we’ve made for 8 working
                        hours. This way you’ll get an idea about the quality of our work, the
                        communication process, and everything else that is essential to you.</p>
                </div>
            </div>

            {/* page 3 */}
            <div className='w-full   md:flex p-5'>
                <div className='w-full md:w-[50%]   md:pt-12  lg:pt-32'>
                    <h1 className='w-[90%] text-start pb-2 leading-snug font-bold text-4xl'>Collaboration and Bonding</h1>
                    <p className='text-start text-base pb-4 leading-7 font-normal text-[#000D2F] '>Trust and smooth workflow are of paramount importance to us and to you, we believe
                        Once we start collaborating, both our teams will spend some time jelling and
                        adjusting in order to develop a strong and healthy B2B relationship.</p>
                </div>

                <div className='w-[350px]c md:w-[50%]  lg:pt-6 md:pl-3 sm:mx-auto pt-6 sm:w-[350px] '>
                    <img src={psd3} className='mx-auto' />
                </div>
            </div>
        </>
    )
}

export default PartnershipDetails