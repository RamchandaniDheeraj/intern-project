import React from 'react'
import Img1 from '../assets/image/expertise1.png'
import Img2 from "../assets/image/Expertise2.png"
import Img3 from "../assets/image/Expertise3.png"
import Img4 from "../assets/image/Experise4.png"

function Expertise() {
    return (
        <>
            <section className='w-full md:flex bg-[#EBFAF4] pt-12 '>
                <div className='w-full md:w-[50%] md:h-[600px] bg-[url(src/assets/bgline.png)] bg-[length:100%_100%] ' >
                    <img src={Img1} alt="" className='md:w-[510px] h-[470px] xl:ml-9' />
                </div>

                <div className='w-full md:w-[50%] h-[200px]'  >
                   <div className='flex'>
                   <div className=' w-[64px] h-[3px] bg-[#00d285] mt-10 md:mt-[90px]  '></div>
                    <h1 className=' text-[50px] md:mt-9 font-bold mr-[120px]  '>EXPERTISE</h1>
                    <div className=' md:w-[155px] md:h-[155px] ml-[-120px]  bg-[#00D28566] rounded-[50%]'></div>
                   </div>
                    <p className=' font-bold text-[23px] mt-[-8px] '>
                        We provide reliable service to our client that is    
                    </p>
                    <p className=' font-bold text-[23px] ml-[150px]'>unbeatable</p>
                </div>
            </section>


            <section>
                    {/* page 1 */}
            <div className='w-full  md:flex pl-20 p-5  '>
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
            <div className='md:flex  p-8'>
                <div className='w-full md:pt-28 lg:pt-0 md:w-[40%]  '>
                    <img src={Img3} />
                </div>

                <div className='w-full md:w-[60%] pl-5 pt-24' >
                    <h1 className='text-start font-bold text-4xl pb-5'>Web & Mobile Development</h1>
                    <p className='text-start text-lg tracking-tighter pb-4 font-medium text-[#000D2F] pr-20 leading-7'>We build custom applications to help companies save smarter, grow faster, serve better; through automation, business process management, to create unique advantages for the business. We have been trusted by many businesses to build their entire technology from the ground up. With a highly-qualified, committed, and results-driven team, we can provide modern, scalable, and easily maintainable software solutions.</p>
                    <button className='flex w-[100px] justify-center text-xs font-medium text-zinc-50 bg-[#00D285] rounded p-1'>Read More</button>

                </div>
            </div>

            {/* page 3 */}
            <div className='w-full  md:flex pl-20 p-5 pb-12 '>
                <div className='w-full md:w-[50%]  pt-24'>
                    <h1 className='w-[90%] text-start pb-4 leading-snug font-bold text-[40px]'>Cloud, DevOps & Deployment</h1>
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
            <button className='w-[94px] h-8 bg-black rounded text-white text-[10px]'>Contact</button>

            </section>
          
        </>
    )
}

export default Expertise