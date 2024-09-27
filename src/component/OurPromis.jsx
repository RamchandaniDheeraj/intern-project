import React from 'react'
import Topcode from '../../src/assets/image/topCode.png';
import Responsive from '../../src/assets/image/Responsive.png';
import Rockstar from '../../src/assets/image/rockstar.png';
import Turn from '../../src/assets/image/Turn.png';
import Support from '../../src/assets/image/Support.png';
import Secured from '../../src/assets/image/Secured.png';
function OurPromis() {
  return (
    <>
                    {/*  Our Promise  */}
                    <section className='m-6 md:py-14 py-6'>
                    <h1 className='font-bold text-4xl text-center'>Our Promise</h1>
                    <p className='font-medium text-center leading-10'>As part of our high quality service, we' like to offer something extra too.</p>

                    <div className='flex flex-wrap mt-4'>
                    
                        <div className='lg:w-[357px] md:w-[260px] w-full h-[250px] md:mx-10 mx-0 flex md:mb-7 '>
                            <div className='mt-4'>
                                <img src={Topcode} alt="" />
                            </div>
                            <div className='m-4'>
                                <h2 className='text-2xl font-semibold'>Top Code Quality</h2>
                                <p className='m-2'>
                                    <span className='leading-8 '>What we promise is not simply code <br /></span>
                                    <span className='leading-8 '>  but rather a solution. You get a W3C <br /></span>
                                    <span className='leading-8 '>  fully compliant markup with no <br /></span>
                                    <span className='leading-8 '>  compromise on quality.</span>
                                </p>
                            </div>
                        </div>

                        <div className='lg:w-[357px] md:w-[260px] w-full h-[250px] md:mx-14 mx-0 flex mb-7'>
                            <div className='mt-4'>
                                <img src={Responsive} alt="" />
                            </div>
                            <div className='m-4'>
                                <h2 className='text-2xl font-semibold'>Responsive</h2>
                                <p className='m-2'>
                                    <span className='leading-8 '>We know you look for positive attitude,<br /></span>
                                    <span className='leading-8 '> timely reactions, and flexibility. We are <br /></span>
                                    <span className='leading-8 '>here to listen and give the utmost<br /></span>
                                    <span className='leading-8 '>of our capabilities.</span>
                                </p>
                            </div>
                        </div>

                        <div className='lg:w-[357px] md:w-[260px]  md:mx-14 mx-0  flex md:mb-7'>
                            <div className='mt-4'>
                                <img src={Rockstar} alt="" />
                            </div>
                            <div className='m-4'>
                                <h2 className='text-2xl font-semibold'>Rockstar Team</h2>
                                <p className='m-2'>
                                    <span className='leading-8 '>Expertise is our USP. You get an all-star <br /></span>
                                    <span className='leading-8 '>   squad of experienced geeks, fully at <br /></span>
                                    <span className='leading-8 '>  your service and armed with coding <br /></span>
                                    <span className='leading-8 '>  skills to die for.</span>
                                </p>
                            </div>
                        </div>

                        <div className='lg:w-[357px] md:w-[260px] md:mx-10 mx-0 flex md:mb-7'>
                            <div className='mt-4'>
                                <img src={Turn} alt="" />
                            </div>
                            <div className='m-4'>
                                <h2 className='text-2xl font-semibold'>Fast Turn-arounds</h2>
                                <p className='m-2'>
                                    <span className='leading-8 '> Speed matters no less than quality. We<br /></span>
                                    <span className='leading-8 '>  are fast, agile and capable of delivering<br /></span>
                                    <span className='leading-8 '>   top notch quality code in a timeframe<br /></span>
                                    <span className='leading-8 '>   chosen by you.</span>
                                </p>
                            </div>
                        </div>

                        <div className='lg:w-[357px] md:w-[260px] md:mx-10 mx-0 flex md:mb-7'>
                            <div className='mt-4'>
                                <img src={Support} alt="" />
                            </div>
                            <div className='m-3'>
                                <h2 className='text-2xl font-semibold'>Life-time support</h2>
                                <p className='m-2'>
                                    <span className='leading-8 '>  The ultimate proof of our code quality :<br /></span>
                                    <span className='leading-8 '>  you get our non-expiring support. If any <br /></span>
                                    <span className='leading-8 '>  bugs happen to appear in the future,<br /></span>
                                    <span className='leading-8 '> just write us a line.</span>
                                </p>
                            </div>
                        </div>

                        <div className='lg:w-[357px] md:w-[260px] md:mx-14 mx-0  flex md:mb-7'>
                            <div className='mt-4'>
                                <img src={Secured} alt="" />
                            </div>
                            <div className='m-4'>
                                <h2 className='text-2xl font-semibold'>Secured Agreement</h2>
                                <p className='m-1'>
                                    <span className='leading-8 '>Your artwork is fully yours and we would <br /></span>
                                    <span className='leading-8 '> never claim otherwise. You get our word<br /></span>
                                    <span className='leading-8 '> and our full willingness to sign an NDA.</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

    </>
  )
}

export default OurPromis