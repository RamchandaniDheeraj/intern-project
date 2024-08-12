import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <>
      <div className='w-full  flex  bg-black px-4 py-5'>
        <div className='lg:ml-12 ml-4 font-bold md:text-2xl text-xl md:leading-[60px] leading-[40px] text-[#DD5757]' ><Link to={"/"}>Logo Here</Link></div>

        <div className='xl:ml-[450px] md:ml-[150px] lg:ml-[300px] text-white ml-[25%]'>
          <button
            className='md:hidden p-2 text-2xl ml-[100%] sm:ml-[380px]'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AiOutlineMenu size={30} />
          </button>
          <ul className={`text-white ml-[-170px] px-4 md:ml-[-40px] xl:ml-[140px] w-full md:flex xl:gap-[30px] md:gap-[20px] font-medium ${menuOpen ? 'flex' : 'hidden'} flex-col md:flex-row text-sm leading-[60px]`}>
        
          <Link to={"about"}> <li> ABOUT</li></Link>
            <Link to={"portfolio"}><li>PROTFOLIO</li></Link>
            <li>PRODUCT</li>
            <li>EXPERTISE</li>
            <li>CONTACT</li>
            <li>BLOG</li>
          </ul>
        </div>
      </div>




    </>

  )
}

export default Navbar