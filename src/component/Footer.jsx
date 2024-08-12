import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { SlSocialLinkedin } from 'react-icons/sl';
import { RiYoutubeLine } from 'react-icons/ri';
import Footer1 from '../assets/image/footerC.png'
// import abc from '../../src/assets/123.png'


function Footer() {
  return (
    <>
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


{/*    */}
      <div className=' py-14  bg-[#1A1A1A] bg-[url(src/assets/image/footer.png)] bg-[size:300%_50%] md:bg-[size:100%_105%]'>
        <div className='pl-[15%] md:pl-0 md:mx-0 px- w-full md:flex justify-center md:gap-[10px] lg:gap-[50px] xl:gap-[120px] text-white '>

          <div className=''>
            <h2 className='text-[18px] font-semibold'>QUICK LINKS</h2>
            <div className='flex gap-5 py-4 text-[15px] text-[#C4C4C4] leading-7 '>
              <ul className=''>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact </li>
              </ul>
              <ul>
                <li>Blog</li>
                <li>Our policy</li>
                <li>Career</li>
              </ul>
            </div>
          </div>

          <div className=''>
            <h2 className='text-[18px] font-semibold'>OUR SERVICES</h2>
            <div className='flex gap-5 py-4 text-[15px] text-[#C4C4C4] leading-7'>
              <ul>
                <li>Web devlpment</li>
                <li>Degital product designe</li>
                <li>Cloud/DevOps</li>
                <li>Mobile Applications</li>
                <li>Dedicated Development</li>
                <li>Team </li>
              </ul>
            </div>
          </div>

          <div className=''>
            <h2 className='text-[18px] font-semibold'>OUR TECNOLOGIES</h2>
            <div className='flex gap-5 py-4 text-[15px] text-[#C4C4C4] leading-7'>
              <ul>
                <li>Laravel Development</li>
                <li>React JS App Development</li>
                <li>Vue JS App Development</li>
              </ul>
            </div>
          </div>

          <div className=' '>
            <h2 className='text-[18px] font-semibold'>CONTACT & FOLLOW US </h2>
            <div className='gap-3 py-4 text-[15px]  flex '>
              <div className='w-[40px] h-[38.5px] rounded-full bg-[#000D2F]'> <SlSocialLinkedin className='mt-[10px] ml-[10px] text-[19px]' /></div>
              <div className='w-[40px] h-[38.5px] rounded-full bg-[#000D2F]'> <FaInstagram className='mt-[10px] ml-[10px] text-[20px]' /></div>
              <div className='w-[40px] h-[38.5px] rounded-full bg-[#000D2F]'> <FaFacebookF className='mt-[10px] ml-[9px] text-[20px]' /></div>
              <div className='w-[40px] h-[38.5px] rounded-full bg-[#000D2F]'> <RiYoutubeLine className='mt-[10px] ml-[10px] text-[20px]' /></div>
            </div>

            <h2 className='text-[13px] ml-[40px]'>Phone: +9116396100</h2>
            <div className='flex mt-3 text-[13px]'><CgMail className='text-2xl mr-1' />E-mail: info@learninginterface.com</div>

            <div className='w-[192px] h-[51px] text-[#00D285] flex mt-[57px]'>
              <img src={Footer1} alt="" className='p-1' />
              <p className='px-1 font-bold '>LearnInterface.
                pvt. lmt.</p>
            </div>

          </div>
        </div>

        <div className='flex w-[90%] md:w-[80%] mx-auto justify-between md:mt-[120px] mt-[50px]'>
          <p className='text-white  md:px-0'>LearnInterface pvt.lmt. Copyright 2022  - All Right Reserved</p>
          <div className='w-[70px] md:h-[70px] rounded-full rounded-tr-lg bg-[#EBFAF4] md:ml-[100px]'>
          <IoIosArrowDropupCircle className='mx-auto text-black my-[40%] font-2xl' />
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer