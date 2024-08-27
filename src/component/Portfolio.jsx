import React from 'react'
import First from '../../src/assets/image/about1.png'
import PortfolioImg1 from '../assets/image/Portfolio1.png'
import PortfolioImg2 from '../assets/image/Portfolio2.png'
import PortfolioImg3 from '../assets/image/Portfolio3.png'
import PortfolioImg4 from '../assets/image/Portfolio4.png'
import PortfolioImg5 from '../assets/image/Portfolio5.png'
import PortfolioImg6 from '../assets/image/Portfolio6.png'
import { GrChat } from 'react-icons/gr';
import Portfolio2 from './Portfolio2'
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

            <section className='w-full  bg-black px-4 md:px-16 xl:px-36 py-14'>
                <div className='text-white'>
                    <div className='flex'>
                        <h1 className='text-white font-medium text-[30px]'>Mobile & Web Applications</h1>
                        <div className='w-[70px] h-[60px] md:h-[70px] rounded-full rounded-tr-lg bg-[#00D285] md:ml-[30%] lg:ml-[50%] xl:ml-[60%]'>
                        <GrChat className='mx-auto text-white my-[40%] font-3xl' size={18} />
                        </div>
                    </div>

                    <p className='md:pr-[15%]'>We help create solutions that optimize processes, improve accessibility to data, and increase successful outcomes by providing the
                        necessary insights and tools to change physician and patient behavior.
                    </p>
                </div>

                <div className=''>
                    <div className=' w-full mt-7 '><img src={PortfolioImg1} alt="" className=' w-[1100px]' /></div>
                    <div className=' w-full mt-7 '><img src={PortfolioImg2} alt="" className=' w-[1100px] ' /></div>
                    <div className=' w-full mt-7 '><img src={PortfolioImg3} alt="" className=' w-[1100px] ' /></div>
                    <div className=' w-full mt-7 '><img src={PortfolioImg4} alt="" className=' w-[1100px] ' /></div>
                    <div className=' w-full mt-7 '><img src={PortfolioImg5} alt="" className=' w-[1100px] ' /></div>
                    <div className=' w-full mt-7 '><img src={PortfolioImg6} alt="" className=' w-[1100px] ' /></div>
                </div>

            </section>
            <Portfolio2/>
        </>
    )
}

export default Portfolio