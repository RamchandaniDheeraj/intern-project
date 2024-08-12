import React from 'react'
import First from '../../src/assets/image/about1.png'
import { MdMessage } from "react-icons/md";
import Portfolio1 from '../assets/image/Portfolio1.png'
import Portfolio2 from '../assets/image/Portfolio2.png'
import Portfolio3 from '../assets/image/Portfolio3.png'
import Portfolio4 from '../assets/image/Portfolio4.png'
import Portfolio5 from '../assets/image/Portfolio5.png'
import Portfolio6 from '../assets/image/Portfolio6.png'
function Portfolio() {
    return (
        <>
            <section className='w-full py-20  bg-[#ebfaf4] px-4 bg-[url(src/assets/image/Portfolio_Vector.png)] md:bg-[size:100%_100%] bg-[size:180%_100%] '>
                <div className='lg:w-[90%] w-[95%]  mx-auto md:flex '>
                    <div className='md:w-[40%] w-full md:ml-16 '>
                        <img src={First} alt="" className='w-full xl:h-[500px]' />
                    </div>
                    <div className='py-4 md:w-[60%] w-full xl:px-24 md:px-10'>
                        <div className='flex'>
                            <div className='bg-[#00d285] w-11 h-[2px] m-4'></div>
                            <h3 className='font-medium text-lg'>OUR PORTFOLIO</h3>
                        </div>

                        <div className=''>
                            <h2 className='text-3xl font-bold pb-8 leading-[45px]'>A glimpse of some of our project  and
                                people we’ve fortunate to work with</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}
            {/*  */}

            <section className='w-full h-[3000px] bg-black '>
                <div className='text-white w-[90%] mx-auto'>
                    <div className=' flex'>
                        <h1 className='text-white   font-bold text-[30px]'>Mobile & Web Applications</h1>
                        <div className='w-[70px] h-[70px] rounded-full rounded-tr-lg bg-[#00D285] ml-[650px] font-3xl'>
                            <MdMessage className='mx-auto text-white my-[40%] ' />
                        </div>
                    </div>
                    <p>We help create solutions that optimize processes, improve accessibility to data, and increase successful outcomes by providing the <br />
                        necessary insights and tools to change physician and patient behavior.</p>

                </div>

                <div className='mx-32'>
                    <div className=' w-full h-[450px]  mt-7 '><img src={Portfolio1} alt="" className=' w-[1100px] h-[400px]' /></div>
                    <div className=' w-full h-[450px]  mt-7 '><img src={Portfolio2} alt="" className=' w-[1100px] h-[400px]' /></div>
                    <div className=' w-full h-[450px]  mt-7 '><img src={Portfolio3} alt="" className=' w-[1100px] h-[400px]' /></div>
                    <div className=' w-full h-[450px]  mt-7 '><img src={Portfolio4} alt="" className=' w-[1100px] h-[400px]' /></div>
                    <div className=' w-full h-[450px]  mt-7 '><img src={Portfolio5} alt="" className=' w-[1100px] h-[400px]' /></div>
                    <div className=' w-full h-[450px]  mt-7 '><img src={Portfolio6} alt="" className=' w-[1100px] h-[400px]' /></div>
                </div>

            </section>
        </>
    )
}

export default Portfolio