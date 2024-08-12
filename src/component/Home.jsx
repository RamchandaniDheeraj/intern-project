import React from 'react'
import Img from '../assets/image/home.png'
import CoreService from './CoreService'
import OurPromis from './OurPromis'
// import Petrong from './Petrong'
function Home() {
    return (
        <>

            <section className='xl:mb-40 md:mb-16 mb-36 '>
                <div className='w-full mx-auto md:flex '>
                    <div className='md:w-[70%] xl:w-[80%] pl-5 md:pl-0 lg:pl-10 w-full pb-[150px] pt-16 bg-black text-white'>
                        <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold md:ml-[40px]'>Get the next<br />
                            level developments. </h1>

                        <h5 className=' font-bold md:ml-10 mt-7 md:mr-[100px] lg:mr-[130px]'>Every line of code we deliver is carefully crafted by our in-house team of <br />
                            professional developers. While constantly looking for new horizons,<br />
                            challenges, and opportunities in the web development, we <br />
                            have focused our attention on these core areas:</h5>

                        <button className=' w-[200px] h-[55px] bg-[#00D285] ml-10 mt-8 md:ml-20 rounded-[100px] '>Get the qute</button>
                        <button className=' w-[200px] h-[55px] bg-white ml-10 xl:ml-20 md:ml-20 lg:ml-7 mt-8 text-black rounded-[100px] font-semibold '>schedule a call </button>
                    </div>
                    <div className='md:w-[30%] xl:w-[20%] pt-1 md:pt-16 w-full h-[380px] reletive ' >
                        <img src={Img} alt="" className='w-full md:px-0 lg:w-[34%] md:w-[40%] h-[490px] absolute md:right-4 lg:right-16 md:shadow-[-70px_120px_0px_-50px_#00D285] lg:shadow-[-100px_120px_0px_-50px_#00D285]' />
                        <div className='w-[100%] h-[490px] bg-[#00D285] absolute top-[0px] z-[-1] right-0 '></div>
                    </div>
                </div>

            </section>
            <CoreService/>
            {/* <Petrong/> */}
            <OurPromis/>
        </>
    )
}

export default Home