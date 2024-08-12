import React from 'react'
import img from '../assets/image/about2.png'

function About2() {
  return (
    <>
      <section className='w-full bg-black text-white md:px-[50px] lg:px-[90px] xl:px-[190px] py-10'>
        <div className='flex  gap-4 justify-center md:justify-normal'>
          <div className='w-[44px] h-[2px] bg-[#00D285] mt-3'></div>
          <h1 className='text-[18px] font-medium'>OUR TEAM</h1>
        </div>

        <div className='mt-4 font-medium text-[40px] px-2'>Colaboring and  <br />optimizing for growth</div>
        <div className='mt-7 text-[18px] px-2'>The team at petrong we are powering the growth <br /> of africal technologh ecosystem</div>

             {/*  */}
        <div className='md:flex mt-9 gap-8 lg:gap-11 w-full px-2 xl:ml-[-50px] justify-center'>

          <div className='w-full md:w-[20%] h-[200px] bg-white  rounded-[10px] '>
            <img src={img} alt="" className='mt-4 mx-auto' />
            <h2 className='text-black mt-1 text-center text-[18px] '>Rasheed Ogunusi</h2>
            <p className='text-black mt-1 text-center text-[rgba(0,0,0,0.6)] text-[14px]'>CTO</p>
          </div>

          <div className='w-full md:w-[20%] h-[200px] bg-white rounded-[10px]'>
            <img src={img} alt="" className='mt-4 mx-auto' />
            <h2 className='text-black text-center mt-1 text-[18px] '>Debo Dunsin</h2>
            <p className='text-black mt-1 text-center text-[#00000099] text-[14px]'>Head of partnership</p>
          </div>

          <div className='w-full md:w-[20%] h-[200px] bg-white rounded-[10px]'>
            <img src={img} alt="" className='mt-4 mx-auto' />
            <h2 className='text-black text-center mt-1 text-[18px] '>Moses Leonard</h2>
            <p className='text-black mt-1 text-center text-[#00000099] text-[14px]'>Head of operations</p>
          </div>
          
          <div className='w-full md:w-[20%] h-[200px] bg-white rounded-[10px]'>
            <img src={img} alt="" className='mt-4 mx-auto' />
            <h2 className='text-black text-center mt-1 text-[18px] '>Damelin Duba</h2>
            <p className='text-black mt-1 text-center text-[#00000099] text-[14px]'>Country lead, Ghana</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About2