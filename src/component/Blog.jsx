import React, { useState } from 'react';
import Img1 from '../../src/assets/image/blog_img1.png';
import Img2 from '../../src/assets/image/blog_img2.png';
import Img3 from '../../src/assets/image/blog_img3.png';
import Img4 from '../../src/assets/image/blog_img4.png';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import ReadMoreBtn from './ReadMoreBtn';

function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section>
        <div className='w-full shadow-xl'>

          <img src={Img1} alt="" className='w-full' />
          <div className='lg:w-[96%] xl:w-[88%] md:w-[98%] mx-auto flex py-5'>
            <div className='flex justify-between items-center '>
              <button
                className='md:hidden p-2 text-2xl mb-[200px]'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <AiOutlineMenu size={30} />
              </button>

            </div>




            <ul className={`text-[#000D2FB2] w-full md:flex xl:gap-[90px] lg:gap-[40px] md:gap-[30px] font-medium ${menuOpen ? 'flex' : 'hidden'} flex-col md:flex-row lg:leading-8 leading-10 mt-[50px] md:mt-0`}>
              <li className='hover:text-[#00D285] hover:underline-offset-8  hover:underline'>Home</li>
              <li className='hover:text-[#00D285] hover:underline-offset-8  hover:underline' >UIUX Design</li>
              <li className='hover:text-[#00D285] hover:underline-offset-8  hover:underline' >World Wide Web</li>
              <li className='hover:text-[#00D285] hover:underline-offset-8  hover:underline' >Mobile App World</li>
              <li className='hover:text-[#00D285] hover:underline-offset-8  hover:underline' >Digital Marketing</li>
           
            </ul>

            <div className='flex shadow-md h-[43px] md:w-auto w-full md:order-none order-2 lg:ml-[10px]'>
              <input
                type="search"
                placeholder='Search.....'
                className='w-full md:w-[180px] h-[43px] placeholder:pl-[30px] placeholder:text-[#000D2FB2] mb-2 '
              />
              <div className='bg-[#000D2F] w-[50px] text-[#00D285]'>
                <IoSearchOutline size={32} className='mx-auto my-[5px]' />
              </div>
            </div>
           
          </div>

        </div>
      </section>


      {/*  */}
      {/*  */}
      <section className='w-full'>
        <div className='lg:w-[85%] md:w-[98%] w-[90%] mx-auto my-20 md:flex'>
          <div className='md:w-[27.5%] '>
            <img src={Img2} alt="" className='mx-auto w-full' />
            <div>
              <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
             <ReadMoreBtn/>
            </div>
          </div>
          <div className='md:w-[27.5%] md:mx-6 mt-8 md:mt-0 '>
            <img src={Img3} alt="" className='mx-auto w-full' />
            <div>
              <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
                <ReadMoreBtn/>
               </div>
          </div>

          <div className=' lg:w-[27.5%] md:w-[35%] md:mx-4 lg-mx-12 '>
            <div className='grid relative mt-6 md:mt-0'>
              <div className='bg-[#00D285] w-[25%] md:w-[68px] h-[2px] absolute justify-self-start '></div>
              <p className='absolute top-[-12px] font-medium justify-self-center text-[14px] lg:text-[16px]'>Mobile Development</p>
              <div className='bg-[#00D285] w-[25%] md:w-[68px] h-[2px]  absolute justify-self-end'></div>
            </div>

            <div className=''>
              <h2 className='text-[#00D285] font-semibold pt-4 '>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
                <ReadMoreBtn/>
              <br /> <br />
              <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
                <ReadMoreBtn/>
            </div>
          </div>

        </div>
      </section>


      {/*  */}
      <section className='bg-black pb-20'>

        <div className='py-16 text-white md:w-[85%] w-[90%] mx-auto flex justify-around md:pl-10 '>
          <h2 className='font-medium mt-3'>Web Development</h2>
          <div className='xl:w-[60%] w-[45%]  h-[2px] bg-[#00D285] mt-6 mx-1'></div>
          <button className='rounded-[16px] xl:w-[220px] md:w-[190px] w-[100px] md:h-[49px] h-[70px] bg-[#00D285] '>See more articles</button>
        </div>

        <div className='xl:w-[80%] w-[90%] justify-around mx-auto md:flex'>
          <div className='md:w-[27.5%]'>
            <img src={Img2} alt="" className='mx-auto w-[90%]' />
            <div className='text-white'>
              <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
               <ReadMoreBtn/>
            </div>
          </div>

          <div className='md:w-[27.5%] md:mx-6 my-6 md:my-0'>
            <img src={Img3} alt="" className='mx-auto w-[90%]' />
            <div className='text-white'>
              <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
               <ReadMoreBtn/>
            </div>
          </div>

          <div className='md:w-[27.5%] md:mx-2'>
            <img src={Img3} alt="" className='mx-auto w-[90%]' />
            <div className='text-white'>
              <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                Guide, Practical Tips and Examples</h2>
              <p className='pt-3'>Design it an important and visual illustration
                that revolve in our daly lives, we dont run
                from it we utilise and make use of it.</p>
               <ReadMoreBtn/>
            </div>
          </div>

        </div>
      </section>

      {/*  */}
      {/*  */}
      <section className='w-full xl:p-10 md:py-10 '>
        <div className='xl:w-[87%] w-[95%] mx-auto md:flex'>
          <div className='xl:w-[35%] md:w-[50%] '>
            <div className='w-full flex'>
              <div className='w-[30%]'>
                <h3 className='font-medium '>Digital Marketing</h3>
              </div>
              <div className='w-[70%]'>
                <div className='w-[80%] h-[2px] bg-[#00D285] mt-4 ml-4'></div>
              </div>
            </div>
            {/*  */}
            <div className='xl:w-[75%] md:w-[90%]'>
              <div className='text-white'>
                <h2 className='text-[#00D285] font-semibold pt-4 '>How To Design The Perfect Hero Image:
                  Guide, Practical Tips and Examples</h2>
                <p className='pt-3 text-black'>Design it an important and visual illustration
                  that revolve in our daly lives, we dont run
                  from it we utilise and make use of it.</p>
                 <ReadMoreBtn/>
              </div>
            </div>

            <div className='xl:w-[75%] md:w-[90%]'>
              <div className='text-white'>
                <h2 className='text-[#00D285] font-semibold pt-4'>How To Design The Perfect Hero Image:
                  Guide, Practical Tips and Examples</h2>
                <p className='pt-3 text-black'>Design it an important and visual illustration
                  that revolve in our daly lives, we dont run
                  from it we utilise and make use of it.</p>
                 <ReadMoreBtn/>
              </div>
            </div>

            <div className='xl:w-[75%] md:w-[90%]'>
              <div className='text-white '>
                <h2 className='text-[#00D285] font-semibold pt-4 '>How To Design The Perfect Hero Image:
                  Guide, Practical Tips and Examples</h2>
                <p className='pt-3 text-black '>Design it an important and visual illustration
                  that revolve in our daly lives, we dont run
                  from it we utilise and make use of it.</p>
                 <ReadMoreBtn/>
              </div>
            </div>
          </div>

          <div className='xl:w-[65%] md:w-[50%] md:mt-0 mt-6'>
            <img src={Img4} alt="" className='w-full xl:h-[480px] md:h-[65%]' />
            <div className='md:w-[80%] w-full'>
              <div className='text-white'>
                <h2 className='text-[#00D285] font-semibold pt-4'>Top five digital development in 2022</h2>
                <p className='pt-3 text-black'>Design it an important and visual illustration
                  that revolve in our daly lives, we dont run
                  from it we utilise and make use of it.</p>
                 <ReadMoreBtn/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
