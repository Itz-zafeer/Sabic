import React from 'react'
import Hero from './Hero'
import Link from 'next/link'
import About from './About'
import Products from './Products'



const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Products />
            <section>
                <div className='relative bg-[#FBFBFB] lg:pt-[12.5vw] lg:pb-[7.36111111111vw] py-[100px]'>
                    <img src="/images/home/about/pattern.png" alt="pattern"
                        className=' absolute leftRightFixer2  lg:w-[38.6805555556vw] sm:w-[70%] w-full top-0'
                    />
                    <div className='Container1240 relative z-[2]'>
                        <div className='w-[335px] mx-[auto] lg:mx-[unset] lg:w-[51.3194444444vw]'>
                            <h2 className='f500 text-[#121212] text48'>
                                Board Members
                            </h2>
                            <p className='text16 text-[#666] lg:mt-[1.38888888889vw] mt-[8px]'>
                                Our highly experienced leadership team has strong sector knowledge and a deep commitment to maintaining the highest standards of excellence.
                            </p>
                        </div>
                        <div className='flex lg:gap-[3.47222222222vw] gap-[25px] flex-wrap lg:mt-[2.77777777778vw] mt-[30px]'>
                            <div className=' member_Card lg:w-[18.75vw] w-[155px] border10'>
                                <img src="/images/home/members/1.jpg" alt="members" className='border10 w-full h-[129px] lg:h-[13.6111111111vw]' />
                                <h5 className='text20 f500 text-[#000] lg:mt-[0.76388888888vw] mt-[11px]'>
                                    Earl Hansen
                                </h5>
                                <p className='mt-[4px] mb-[8px] lg:mt-[0.27777777777vw] lg:mb-[0.20833333333vw] sm:text16 text-[12px] leading-[18px] text-[#666666]'>
                                    Central Integration Architect
                                </p>
                                <button className='text-[#000] flex items-center'>
                                    <span className='text16'>View</span>
                                    <svg className='lg:w-[0.97222222222vw] lg:h-[0.97222222222vw] w-[14px] h-[14px] flipped' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.22283 12.2412C5.18069 12.2841 5.14775 12.3346 5.12588 12.3898C5.10401 12.445 5.09365 12.5038 5.09538 12.5629C5.09712 12.6219 5.11092 12.6801 5.13599 12.734C5.16106 12.7879 5.19692 12.8365 5.24152 12.8771C5.28611 12.9177 5.33857 12.9494 5.39589 12.9705C5.45322 12.9915 5.51429 13.0015 5.57562 12.9998C5.63695 12.9981 5.69734 12.9849 5.75334 12.9607C5.80934 12.9366 5.85985 12.9021 5.90199 12.8591L9.87232 8.8115C9.95432 8.72799 10 8.61744 10 8.50253C10 8.38761 9.95432 8.27706 9.87232 8.19356L5.90199 4.14548C5.86013 4.10161 5.80963 4.06618 5.75342 4.04125C5.69722 4.01632 5.63643 4.0024 5.57459 4.00028C5.51275 3.99817 5.45109 4.0079 5.39319 4.02893C5.33529 4.04995 5.2823 4.08184 5.23731 4.12275C5.19232 4.16365 5.15622 4.21276 5.13111 4.26721C5.10599 4.32166 5.09237 4.38038 5.09102 4.43994C5.08967 4.49951 5.10063 4.55874 5.12326 4.61419C5.14589 4.66965 5.17973 4.72022 5.22283 4.76297L8.89048 8.50253L5.22283 12.2412Z" fill="black" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage
