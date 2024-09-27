import React from 'react'
// import ProductBg from '../assets/image/productbg.png'
import Img2 from "../assets/image/product1.png"
import Img3 from "../assets/image/product2.png"
import Img4 from "../assets/image/product3.png"
function Product() {
    return (
        <>
            <section className='w-full h-[500px] bg-[url(src/assets/image/productbg.png)] bg-[length:100%_100%]  z-[-1]'>
                <div className='pt-2 md:pt-24 w-full h-[450px] bg-[url(src/assets/image/Portfolio_Vector.png)] bg-[length:100%_100%] z-[1]'>
                    <h2 className='text-[30px] font-bold text-center px-2'>Dedicated product for you</h2>
                    <p className='md:mt-8 text-center text-[18px] font-medium leading-[40px] px-4 md:px-[10%] xl:px-[26%]'>Our product is craft out from looking at the problem people are facing each day and
                        providing a solution to it, from the down of making a survey and turning it into a useful
                        products based on what we capture on people reaction and what they fill out</p>
                </div>
            </section>

            <section>
                    {/* page 1 */}
            <div className='w-full  md:flex md:pl-20 p-5  '>
                <div className='w-full md:w-[50%]  pt-32'>
                    <h1 className='text-start pb-4 font-bold text-4xl'>Digital Product Design.</h1>
                    <p className='text-start text-base pb-4 font-medium text-[#000D2F] '>The best software has both a strong back-end and a good front-end. We've got the tools and expertise to assist you in creating an intuitive and engaging user experience that your customers will love and your rivals will envy. Our UX/UI Design. Services include</p>
                    <div className='text-start font-medium text-base pb-6 leading-7'>
                        <span className='text-[#00D285]'>●</span> Design Workshops <br />
                        <span className='text-[#00D285]'>●</span> UX & UI Consulting <br />
                        <span className='text-[#00D285]'>●</span> Creative Direction <br />
                        <span className='text-[#00D285]'>●</span> Prototyping <br />
                        <span className='text-[#00D285]'>●</span> Usability Testing <br />
                    </div>
                    <button className='flex w-[100px] justify-center text-xs font-medium text-zinc-50 bg-[#00D285] rounded p-1'>Read More</button>
                </div>

                <div className='w-[350px]c md:w-[50%] md:pt-28 md:pl-2 lg:pt-0 sm:mx-auto pt-6 sm:w-[350px]'>
                    <img src={Img2} className='mx-auto' />
                </div>
            </div>

            {/* page 2 */}
            <div className='md:flex  md:p-8 px-4'>
                <div className='w-full md:pt-28 lg:pt-0 md:w-[40%]  '>
                    <img src={Img3} />
                </div>

                <div className='w-full md:w-[60%] md:pl-5 pt-24' >
                    <h1 className='text-start font-bold text-4xl pb-5'>Web & Mobile Development</h1>
                    <p className='text-start text-lg tracking-tighter pb-4 font-medium text-[#000D2F] md:pr-20 leading-7'>We build custom applications to help companies save smarter, grow faster, serve better; through automation, business process management, to create unique advantages for the business. We have been trusted by many businesses to build their entire technology from the ground up. With a highly-qualified, committed, and results-driven team, we can provide modern, scalable, and easily maintainable software solutions.</p>
                    <button className='flex w-[100px] justify-center text-xs font-medium text-zinc-50 bg-[#00D285] rounded p-1'>Read More</button>

                </div>
            </div>

            {/* page 3 */}
            <div className='w-full  md:flex md:pl-20 p-5 pb-12 '>
                <div className='w-full md:w-[50%]  pt-24'>
                    <h1 className='md:w-[90%] text-start pb-4 leading-snug font-bold text-[40px]'>Cloud, DevOps & Deployment</h1>
                    <p className='text-start text-base pb-4 leading-5 font-medium text-[#000D2F] '>We assist clients in leveraging cloud technologies while avoiding any of the IT pain points. We create public cloud applications to allow agile, future-ready business models, and we use automation to speed up and reduce costs in your infrastructure.</p>
                    <p className='text-start text-base pb-4 leading-5 font-medium text-[#000D2F] '>Our DevOps consulting services will support you with each of the three main elements of your DevOps transition, from deployment to optimization. Our DevOps services will assist you in selecting best-in-class resources, equipping your team with the necessary skills, and fine-tuning your processes in order to break down silos, collaborate more effectively, and achieve a cultural shift that supports DevOps thinking</p>
                    <div className='text-start font-medium text-base pb-6 leading-7'>

                    </div>
                    <button className='flex w-[100px] justify-center text-xs font-medium text-zinc-50 bg-[#00D285] rounded p-1'>Read More</button>

                </div>

                <div className='w-[350px]c md:w-[50%] md:pt-56 lg:pt-6 md:pl-3 sm:mx-auto pt-6 sm:w-[350px]'>
                    <img src={Img4} className='mx-auto' />
                </div>
            </div>

            {/* page4 */}
            <h1 className='font-medium text-2xl pt-4 text-center'>Let's build great things together!</h1>
            <p className='md:px-60 pt-2 pb-10 tracking-wider font-normal text-sm text-center '>Fill out this form and one of our client success managers will contact you within 24 hours. We             
            have notifications set to make sure your message is received.</p>
            <button className='w-[94px] h-8 bg-black rounded text-white text-[10px] ml-[35%] md:ml-[48%] mb-5'>Contact</button>

            </section>
          
        </>
    )
}

export default Product