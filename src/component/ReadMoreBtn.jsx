import React from 'react'
import { Link } from 'react-router-dom'

function ReadMoreBtn() {
    return (
        <>
            <Link to={"readMore"}>
                <button className='bg-[#00D285] text-white w-[90px] h-[20px] text-[14px] mt-4 ml-[32%] md:ml-0 rounded-[3px] '>Read More</button>
            </Link>
        </>
    )
}

export default ReadMoreBtn