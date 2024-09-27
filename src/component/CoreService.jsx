import React from 'react'
import Rectangle from '../../src/assets/image/Rectangle.jpg';
import WebDevelop from '../../src/assets/image/WebDevelopment.png';
import MobileApplication from '../../src/assets/image/mobileApplication.png';
import Shopify from '../../src/assets/image/shopify.png';
import Vue from '../../src/assets/image/vue.png';
import Partnership from '../../src/assets/image/partnership.jpg';
import { Link } from 'react-router-dom';
// import Vector from '../../src/assets/image/Vector.png'


function CoreService() {
    return (
        <>
            <main className='w-full'>
                {/* first page */}
                <div className='w-full md:w-[98%] lg:w-[85%] m-auto md:flex mb-28   ' >
                    <div className='md:w-[50%] w-full'>
                        <img src={Rectangle} alt="" className='md:w-[90%] md:my-12 w-[100%] xl:h-[570px] md:h-[80%] bg-[size-100%_100%]' />
                    </div>
                    <div className='md:w-[50%] w-[95%]  mx-auto'>
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
                <section className='w-full md:flex block md:mb-12'>
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
                        <Link to={"partnershipDetails"}>
                        <button className='w-52 h-14 bg-[#00D285] text-white rounded-[100px] my-12'>Partnership Details</button>
                        </Link>
                    </div>
                </section>



 
            </main>
        </>
    )
}

export default CoreService
