import React from 'react'
import Chatbot from '../../src/assets/image/chatbot.png'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { PiPaperPlaneRightBold } from 'react-icons/pi';
function ChatBot() {
    return (
        <>
            <section className='w-full bg-black h-[695px] pt-[130px]'>
                <div className='w-[380px] h-[450px] mx-auto bg-white text-black  rounded-lg'>
                    <div className='bg-[#00D285] flex text-white h-[61px]  rounded-lg '>
                        <div className='ml-[40px] mt-[10px] relative'>
                            <img src={Chatbot} alt="" className='' />
                            <div className='w-[10px] h-[10px] bg-[#A9E84C] rounded-full absolute top-[0px] left-[25px]'></div>
                        </div>
                        <div className='px-[15px] mt-[7px]'>
                            <h2 className='font-semibold'>Rasheed</h2>
                            <p className='text-[9px]'>Online</p>
                        </div>
                        <div className='ml-[150px] mt-[12px]'>
                            <Link to={"/"}>
                                <RxCross2 size={30} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex mt-10 gap-4'>
                        <div className='ml-[35px] mt-[10px] relative'>
                            <img src={Chatbot} alt="" className='' />
                            <div className='w-[10px] h-[10px] bg-[#A9E84C] rounded-full absolute top-[0px] left-[25px]'></div>
                        </div>
                        <div className='w-[200px] h-[50px] bg-[#EBFAF4] text-[12px] text-[#000D2F] leading-[50px] px-[16px] rounded-md'>How may we assist you today?</div>
                    </div>
                    <div className='flex mt-4 ml-[150px] '>
                        <div className='w-[200px] h-[50px] bg-[#000D2F] text-[12px] text-white leading-[50px] px-[16px] rounded-md rounded-tr-none'>How may we assist you today?</div>
                    </div>
                    <div className='flex mt-4 gap-4'>
                        <div className='ml-[35px] mt-[10px] relative'>
                            <img src={Chatbot} alt="" className='' />
                            <div className='w-[10px] h-[10px] bg-[#A9E84C] rounded-full absolute top-[0px] left-[25px]'></div>
                        </div>
                        <div className='w-[200px] h-[50px] bg-[#EBFAF4] text-[12px] text-[#000D2F] leading-[50px] px-[16px] rounded-md'>How may we assist you today?</div>
                    </div>
                    <div className='flex  mt-[100px] px-4 gap-2'>
                        <input type="text" placeholder='Write a message' className='w-[290px] h-[50px] bg-[#EBFAF4] placeholder:text-[#000D2F] placeholder:font-medium' />
                        <div className='w-[52px] h-[50px] bg-[#000D2F] rounded-lg text-white'> <PiPaperPlaneRightBold size={25} className='mx-auto my-[10px]'/></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ChatBot