import React from 'react';
import BlogImg1 from '../assets/image/blogimg1.png'
import BlogImg2 from '../assets/image/blogimg2.png'
import BlogImg3 from '../assets/image/blogimg3.png'
import Author1 from '../assets/image/author1.png'
import Author2 from '../assets/image/author2.png'
import Author3 from '../assets/image/author3.png'
const ArticleCard = () => {
    return (
        <>
            <section className='md:w-[90%] text-[#000D2F] mx-auto'>
                <div className="md:p-6 p-2">
                    <ul className='flex gap-5 underline'>
                        <li>Inspiration</li>
                        <li>Design</li>
                    </ul>
                    <h1 className="text-3xl sm:text-4xl font-semibold mb-4 md:pr-[22%] md:my-10">8 UX/UI Trends That Will Dominate The Web Design World in 2022</h1>

                    <div className="w-full justify-between rounded-lg  overflow-hidden md:flex">
                        <div className='md:w-[60%] mb-4'>
                            <div className="flex items-center ">
                                <img src={Author3} className="rounded-full mr-4" />
                                <div className="text-sm">By Prime Leonard</div>
                            </div>
                            <div className="py-4 ">
                                <img src={BlogImg3} className="w-full h-64 sm:h-96 object-cover rounded-lg" />
                            </div>
                            <p className='md:py-10 md:pr-10'>2021 is slowly reaching its end. This year’s UI design trends and UX trends will gently move aside to let
                                next year’s winners take their place.</p>
                            <p className='py-8 md:pr-12'>Quality design is paramount when it comes to creating an attractive website that generates traffic and
                                converts visitors into customers. Whether your brand offers a service or product, consumers will judge
                                your company based not only on the quality of your product but also on the quality of your design.
                                Poorly designed sites are often ignored, regardless of how beneficial they are. The only way to acquire
                                customers and distinguish yourself from the competition is by improving your UX/UI design.</p>
                            <p>And don’t get me wrong, you might have one of the top user interface designs of the past, but if you don’t
                                update it, you’ll most likely end up with an old website.</p>

                        </div>


                        <div className='md:w-[30%]'>
                            <div className="bg-white rounded-lg overflow-hidden ">
                                <div className="relative">
                                    <img src={BlogImg1} className="w-full h-48 object-cover" />
                                </div>
                                <div className="p-4">
                                    <div className="underline text-sm font-medium mb-1">Design</div>
                                    <h2 className="text-[18px] font-semibold leading-10 md:pr-24">Designing an Effective Splash Screen: Best Practices, Tips and <br /> Examples</h2>
                                    <div className="flex items-center mt-3">
                                        <img src={Author1} className="w-8 h-8 rounded-full mr-2" />
                                        <div className="text-gray-700 text-sm">By Rasheed</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden my-6">
                                <div className="relative">
                                    <img src={BlogImg2} className="w-full h-48 object-cover" />
                                </div>
                                <div className="p-4">
                                    <div className="underline text-sm font-medium mb-1">Design</div>
                                    <h2 className="text-[18px] font-semibold leading-10 md:pr-24">Designing an Effective Splash Screen: Best Practices, Tips and <br /> Examples</h2>
                                    <div className="flex items-center mt-3">
                                        <img src={Author2} className="w-8 h-8 rounded-full mr-2" />
                                        <div className="text-gray-700 text-sm">By Rasheed</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            
        </>
    );
};

export default ArticleCard
