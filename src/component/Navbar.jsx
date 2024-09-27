import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };
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
            <li className='hover:text-[#00D285]' onClick={handleLinkClick}><Link to={"about"}>  ABOUT</Link></li>
            <li className='hover:text-[#00D285]' onClick={handleLinkClick} ><Link to={"portfolio"}>PORTFOLIO</Link></li>
            <li className='hover:text-[#00D285]' onClick={handleLinkClick}><Link to={"product"} >PRODUCT</Link></li>
            <li className='hover:text-[#00D285]' onClick={handleLinkClick}><Link to={"expertise"}>EXPERTISE</Link></li>
            <li className='hover:text-[#00D285]' onClick={handleLinkClick}> <Link to={"contact"}>CONTACT</Link></li>
            <li className='hover:text-[#00D285]' onClick={handleLinkClick}> <Link to={"blog"} >BLOG</Link></li>
          </ul>
        </div>
      </div>




    </>

  )
}

export default Navbar