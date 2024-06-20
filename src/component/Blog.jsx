import React, { useState } from 'react';
import Img1 from '../../src/assets/image/blog_img1.png';
import { IoSearchOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';

function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section>
        <div className='w-full'>
          <img src={Img1} alt="" className='w-full' />
          <div className='w-[85%] mx-auto'>
            <div className='flex justify-between items-center my-4'>
              <button 
                className='text-2xl md:hidden' 
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars />
              </button>
              <div className='hidden md:flex shadow-[0px_4px_4px_0px_#00000040] h-[43px]'>
                <input 
                  type="search" 
                  placeholder='Search.....' 
                  className='w-[180px] h-[43px] placeholder:pl-[30px] placeholder:text-[#000D2FB2] mb-2' 
                />
                <div className='bg-[#000D2F] w-[50px] text-[#00D285]'>
                  <IoSearchOutline size={35} className='mx-auto my-[5px]' />
                </div>
              </div>
            </div>
            <ul className={`flex flex-col md:flex-row gap-4 md:gap-14 font-medium ${menuOpen ? 'block' : 'hidden md:flex'}`}>
              <li>Home</li>
              <li>UIUX Design</li>
              <li>World Wide Web</li>
              <li>Mobile App World</li>
              <li>Digital Marketing</li>
              <div className='flex md:hidden shadow-[0px_4px_4px_0px_#00000040] h-[43px] mt-4'>
                <input 
                  type="search" 
                  placeholder='Search.....' 
                  className='w-[180px] h-[43px] placeholder:pl-[30px] placeholder:text-[#000D2FB2] mb-2' 
                />
                <div className='bg-[#000D2F] w-[50px] text-[#00D285]'>
                  <IoSearchOutline size={35} className='mx-auto my-[5px]' />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
