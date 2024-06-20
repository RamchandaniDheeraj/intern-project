import React from 'react'
import First from '../../src/assets/image/about1.png'

function Portfolio() {
    return (
        <>
            <section className='w-full py-20  bg-[#EBFAF4] px-4 bg-[url(src/assets/image/Portfolio_Vector.png)] bg-[size:100%_100%] '>
                <div className='lg:w-[90%] w-[95%]  mx-auto md:flex '>
                    <div className='md:w-[40%] w-full md:ml-16 '>
                        <img src={First} alt="" className='w-full xl:h-[500px]' />
                    </div>
                    <div className='py-4 md:w-[60%] w-full xl:px-24 md:px-10'>
                        <div className='flex'>
                            <div className='bg-[#00D285] w-11 h-[2px] m-4'></div>
                            <h3 className='font-medium text-lg'>OUR PORTFOLIO</h3>
                        </div>

                        <div className=''>
                            <h2 className='text-3xl font-bold pb-8 leading-[45px]'>A glimpse of some of our project  and
                                people we’ve fortunate to work with</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio