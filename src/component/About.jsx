import React from 'react'
import First from '../../src/assets/image/about1.png'
function About() {
    return (
        <>
            <section className='w-full  '>
                <div className='w-[80%] bg-red-600 mx-auto flex'>
                    <div><img src={First} alt="" /></div>
                    <div className='flex'>
                        <div className='bg-[#00D285] w-20 h-11'></div>
                        <h3>WHO WE ARE</h3>
                    </div>
                </div>
            </section>
        </>

    )
}

export default About