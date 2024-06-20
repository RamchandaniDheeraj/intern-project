import React from 'react'
import First from '../../src/assets/image/about1.png'
function About() {
    return (
        <>
            <section className='w-full md:py-32 py-20 bg-[#EBFAF4] px-4 bg-[url(image/Portfolio_Vector.png)]'>
                <div className='lg:w-[90%] w-[95%]  mx-auto md:flex'>
                    <div className='md:w-[40%] w-full relative'>
                        <img src={First} alt="" className='w-full md:h-[600px] lg:h-[600px]' />
                        <div className='w-[400px] h-[220px] bg-white absolute top-[440px] xl:left-[230px] lg:left-[100px] px-8 pt-4 rounded-[10px] leading-loose hidden lg:block'>
                            <p className='text-[#00000099]'>We want to build a world where great ideas,
                                products, and companies come to fruition
                                quickly whilst achieving the required impact.
                                Our work is to facilitate the process.</p>
                                <h2 className=''>Rasheed Ogunusi</h2>
                                <h2>CTO</h2>
                        </div>
                    </div>
                    <div className='py-4  md:w-[60%] w-full xl:px-32 md:px-10'>
                        <div className='flex'>
                            <div className='bg-[#00D285] w-11 h-[2px] m-4'></div>
                            <h3 className='font-medium text-lg'>WHO WE ARE</h3>
                        </div>

                        <div className=''>
                            <h2 className='text-3xl font-bold pb-8 leading-[40px]'>We combine our experience and
                                passion to develop solutions that
                                empower businesses.</h2>
                            <p className='text-lg font-medium leading-[40px]'>Lorem Ipsum is simply dummy text of the printing and
                                industry. Lorem Ipsum has been the industry's standard
                                text ever since the 1500s, when an unknown printer took
                                of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About