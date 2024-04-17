import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const navbarSocialIcons = [
    {
        img: "/images/icons/footer-social/fb.svg",
        alt: "fb",
        link: "https://www.facebook.com/",
    },
    {
        img: "/images/icons/footer-social/twitter.svg",
        alt: "twitter",
        link: "https://www.twitter.com/",

    },
    {
        img: "/images/icons/footer-social/linkedin.svg",
        alt: "linkedin",
        link: "https://www.linkedin.com/",

    },
    {
        img: "/images/icons/footer-social/insta.svg",
        alt: "insta",
        link: "https://www.instagram.com/",

    },
]
const Footer = () => {
    return (
        <footer className='bg-white'>
            <div className='Container1240 lg:py-[1.38888888889vw] py-[17px] flex flex-wrap gap-y-[5px] lg:justify-between justify-center items-center lg:text-[0.97222222222vw] text-[13px] lg:leading-[1.45833333333vw] leading-[19.5px]'>
                <Link target='_blank' href='/https://brackets-tech.com/' className='order-[1]  lg:order-[unset] text-[#000] text-opacity-[0.7]'>
                    Designed & Developed by Brackets Technology
                </Link>
                <div className=' flex  justify-center items-center lg:gap-x-[1.66666666667vw] gap-x-[24px] '>
                    {
                        navbarSocialIcons.map((navbarSocialIcon, i) => (
                            <Link target='_blank' href={`${navbarSocialIcon.link}`} key={i} className='opacity_Hover relative w-[24px] h-[24px] lg:w-[1.66666666667vw] lg:h-[1.66666666667vw]'>
                                <Image fill src={navbarSocialIcon.img} alt={navbarSocialIcon.alt} />
                            </Link>
                        ))
                    }
                </div>
                <span className='block mt-[4px] lg:mt-[unset] w-full lg:w-[unset] text-center lg:text-end text-[#000] text-opacity-[0.7]'>Copyright © 2024 SABIC</span>
            </div>
        </footer>
    )
}

export default Footer
