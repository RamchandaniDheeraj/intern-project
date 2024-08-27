import React from 'react'
// import ProductBg from '../assets/image/productbg.png'

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
        </>
    )
}

export default Product