import React from 'react'
import Img1 from '../assets/image/expertise1.png'
function Contact() {
  return (
    <>
    <section className='w-full md:flex bg-[#EBFAF4] pt-12 '>
                <div className='w-full md:w-[50%] md:h-[600px] bg-[url(src/assets/bgline.png)] bg-[length:100%_100%] ' >
                    <img src={Img1} alt="" className='md:w-[510px] h-[470px] xl:ml-9' />
                </div>

                <div className='w-full md:w-[50%] h-[200px]'  >
                   <div className='flex'>
                   <div className=' w-[64px] h-[3px] bg-[#00d285] mt-10 md:mt-[90px]  '></div>
                    <h1 className=' text-[50px] md:mt-9 font-bold mr-[120px]  '>EXPERTISE</h1>
                    <div className=' md:w-[155px] md:h-[155px] ml-[-120px]  bg-[#00D28566] rounded-[50%]'></div>
                   </div>
                    <p className=' font-bold text-[22px] mt-[-8px] '>
                        We provide reliable service to our client that is unbeatable 
                    </p>
                    <p className=' font-bold text-[23px] ml-[150px]'></p>
                </div>
            </section>
    </>
  )
}

export default Contact