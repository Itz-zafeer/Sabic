"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const headerLinks = [
    {
        text: "About us ",
    },
    {
        text: "our products ",
    },
    {
        text: "Board Members ",
    },
    {
        text: "Contact us ",
    },
]
const navbarSocialIcons = [
    {
        img: "/images/icons/header-social/fb.svg",
        alt: "fb",
        link: "https://www.facebook.com/",
    },
    {
        img: "/images/icons/header-social/twitter.svg",
        alt: "twitter",
        link: "https://www.twitter.com/",

    },
    {
        img: "/images/icons/header-social/linkedin.svg",
        alt: "linkedin",
        link: "https://www.linkedin.com/",

    },
    {
        img: "/images/icons/header-social/insta.svg",
        alt: "insta",
        link: "https://www.instagram.com/",

    },
]

function toggleSidebar() {
    const body = document.querySelector("body");
    const sideBar = document.querySelector(".sideBar");
    const menu = document.querySelector(".menu");
    body.classList.toggle("active");
    sideBar.classList.toggle("active");
    menu.classList.toggle("active");
}

const Header = () => {
    return (
        <header className='w-full absolute z-[10] lg:px-[6.94444444444vw] px-[20px] pt-[38px] lg:pt-[0.69444444444vw]'>
            <div className='py-[24px] lg:py-[1.66666666667vw] flex items-center justify-between'>
                <Link href='/' className='block relative z-[4] lg:w-[6.94444444444vw] lg:h-[2.63888888889vw] w-[100px] h-[38px]'>
                    <Image src='/images/icons/logo.svg' alt='logo' fill />
                </Link>
                <nav className='text-white flex items-center lg:gap-x-[2.22222222222vw] sm:gap-x-[30px] gap-x-[16px]'>
                    <div className='sideBar flex flex-col justify-between overflow-hidden bg-[#121212] lg:bg-transparent  sm:pt-[250px] pt-[154px] lg:pt-[unset] absolute inset-0 lg:static z-[2] h-[100vh] lg:h-[unset]'>
                        <ul className=' relative z-[2] capitalize  flex flex-col sm:gap-y-[45px] gap-y-[24px] lg:flex-row lg:items-center lg:gap-x-[2.22222222222vw] text18'>
                            {
                                headerLinks.map((headerLink, index) => (
                                    <li key={index} className='mx-[20px] lg:mx-[unset] border-b-[1px] lg:border-b-0 border-[#ffffff33] pb-[24px] lg:pb-[unset] opacity_Hover'>
                                        <Link href='/'>
                                            {headerLink.text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='lg:hidden block absolute w-full h-[425px] bottom-0  leftRightFixer1'>
                            <img src="/images/common/pattern-nav.png" alt="pattern"
                                className='w-full h-full object-cover'
                            />
                            <span className='navbar_Overlay w-full h-full absolute bottom-0 leftRightFixer1'></span>
                        </div>
                        <div className='lg:hidden relative z-[2] flex justify-center items-center gap-x-[24px] pb-[24px]'>
                            {
                                navbarSocialIcons.map((navbarSocialIcon, i) => (
                                    <Link target='_blank' href={`${navbarSocialIcon.link}`} key={i} className='relative w-[24px] h-[24px] sm:w-[35px] sm:h-[35px]'>
                                        <Image fill src={navbarSocialIcon.img} alt={navbarSocialIcon.alt} />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <span className='hidden lg:block bg-[#ffffff33] w-[1px] h-[1.38888888889vw]'></span>
                    <Link href='/' className='opacity_Hover relative z-[4] lg:text16 leading-[24px] text-[16px] Rubik'>
                        عربي
                    </Link>
                    <div
                        onClick={toggleSidebar}
                        className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
                    >
                        <span className="top-0"></span>
                        <span className="top-[30%]"></span>
                        <span className="top-[60%]"></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
