import React from 'react'
import Rectangle from '../../src/assets/image/Rectangle.jpg';
import WebDevelop from '../../src/assets/image/WebDevelopment.png';
import MobileApplication from '../../src/assets/image/mobileApplication.png';
import Shopify from '../../src/assets/image/shopify.png';
import Vue from '../../src/assets/image/vue.png';
import Partnership from '../../src/assets/image/partnership.jpg';
// import Vector from '../../src/assets/image/Vector.png'
import Topcode from '../../src/assets/image/topCode.png';
import Responsive from '../../src/assets/image/Responsive.png';
import Rockstar from '../../src/assets/image/rockstar.png';
import Turn from '../../src/assets/image/Turn.png';
import Support from '../../src/assets/image/Support.png';
import Secured from '../../src/assets/image/Secured.png';

function CoreService() {
    return (
        <>
            <main className='w-full'>
                {/* first page */}
                <div className='w-full m-auto md:flex mb-28 ' >
                    <div className='md:w-[50%] w-full'>
                        <img src={Rectangle} alt="" className='md:w-[90%] md:my-12 w-[100%] p-1 lg:h-[500px] md:h-[80%] bg-[size-100%_100%]' />
                    </div>
                    <div className='md:w-[50%] w-[95%] + mx-auto'>
                        <h1 className='text-4xl font-semibold mb-6'>Our Core Services</h1>
                        <p className='font-medium '>Our technology solutions are perfectly designed to ensure the virtual <br />
                            world meets your needs.</p>

                        <div className='flex mt-7'>
                            <div className='w-[12%]'><img src={WebDevelop} alt="" /></div>
                            <div className='w-[88%] px-1'><h2 className='font-semibold'>Web Development</h2>
                                <p className='mt-3'>We convert any design file: PSD, Sketch, Figma, Adobe XD to pixel-perfect,<br />
                                    <span className='leading-10 '>semantic, and standard-compliant HTML/CSS templates. </span>
                                </p></div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-[12%]'><img src={MobileApplication} alt="" /></div>
                            <div className='w-[88%] px-1'><h2 className='font-semibold  '>Mobile Applications</h2>
                                <p className='mt-3 '>We do highly customizable, easy-to-manage, and extendable WordPress solutions.
                                    <br />
                                    <span className=' leading-10'>Plugins, themes, or an eCommerce. We can do it.</span>
                                </p></div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-[12%]'><img src={Shopify} alt="" /></div>
                            <div className='w-[88%] px-1'><h2 className='font-semibold  '>Shopify & Woo Commerce Development</h2>
                                <p className='mt-3 '>We know the ins and outs of Shopify & WooCommerce and we can help you get your
                                    <br />
                                    <span className='leading-10'>eCommerce site running in a matter of weeks.</span>
                                </p></div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-[12%]'><img src={Vue} alt="" /></div>
                            <div className='w-[88%] px-1'><h2 className='font-semibold  '>Vue - React Development & Email Template Coding</h2>
                                <p className='mt-3 '>Performance, Scalability, Reusable Components, One Way Data Flow - the perfect <br />
                                    <span className=' leading-10'>ingredients for building websites or web apps; also high class coding for <br /></span>
                                    <span className='leading-6'>email marketing</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  Partnership for agencies  */}
                <section className='w-full md:flex  block  mb-12'>
                    <div className='md:w-[50%] w-full bg-[rgb(235,250,244)] '>
                        <img src={Partnership} alt="" className='md:w-[680px] h-[480px] w-full m-auto shadow-[-72px_0px_0px_42px_#000] mt-10 '  />
                    </div>
                    <div className="md:w-[50%] w-full px-4 bg-[size:100%_100%] bg-center bg-[url(src/assets/image/Vector.png)] bg-[rgb(235,250,244)] " >
                        <h1 className=' text-4xl mt-24 tracking-wider font-bold'>Partnership for agencies</h1><br /><br />
                        <p className='font-medium leading-4'>A reliable coding partner that delivers solutions to your business challenges and <br /><br />
                            <span className='leading-10 '>stays by your side in the long term. Having the whole spectrum of web <br /></span>
                            <span className='leading-10 '>development expertise, we are here to take care of your projects while <br /></span>
                            <span className='leading-10 '> making it possible for you to focus on growing your own business.  <br /></span>
                        </p>
                        <button className='w-52 h-14 bg-[#00D285] text-white rounded-[100px] my-12'>Partnership Details</button>
                    </div>
                </section>


                {/*  Our Promise  */}
                <section className='m-6 md:py-14 py-6'>
                    <h1 className='font-bold text-4xl text-center'>Our Promise</h1>
                    <p className='font-medium text-center leading-10'>As part of our high quality service, we' like to offer something extra too.</p>

                    <div className='flex flex-wrap mt-4'>
                    
                        <div className='lg:w-[357px] md:w-[260px] w-full h-[250px] md:mx-10 mx-0 flex mb-7 '>
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

                        <div className='lg:w-[357px] md:w-[260px] w-full h-[250px]  md:mx-14 mx-0 flex mb-7'>
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

                        <div className='lg:w-[357px] md:w-[260px]  md:mx-14 mx-0  flex mb-7'>
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

                        <div className='lg:w-[357px] md:w-[260px] md:mx-10 mx-0 flex mb-7'>
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

                        <div className='lg:w-[357px] md:w-[260px] md:mx-10 mx-0 flex mb-7'>
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

                        <div className='lg:w-[357px] md:w-[260px] md:mx-14 mx-0  flex mb-7'>
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


                {/*   footer part   */}
                <section>
                    <div className="w-full md:flex bg-[#EBFAF4] py-24  ">
                        <div className='md:w-[65%] w-full text-center my-auto '>
                            <h2 className='text-4xl font-medium '>Do you have a next level-idea?</h2>
                            <p className='text-lg mt-1 text-[#9d9b9b]'>Reach out and we can create magic together</p>
                        </div>
                        <div className='md:w-[35%] w-full my-auto text-center pt-6 md:pt-0'>
                            <button className=' rounded-[100px] w-[200px] h-[55px] bg-[#00D285] text-white shadow-lg shadow-black '>WORK WITH US</button>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}

export default CoreService