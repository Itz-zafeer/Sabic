import Link from 'next/link'
import React from 'react'
const formLinks = [
    {
        text: "Located at Airport Road, Qordoba, Riyadh, Saudi Arabia",
        link: "https://www.google.com/maps/place/SABIC+Headquarters/@24.7980241,46.7226041,15z/data=!4m2!3m1!1s0x0:0x1e48cd2938c27cd1?sa=X&ved=1t:2428&ictx=111",
        img: "/images/icons/Location.svg",
        alt: "Location",
    },
    {
        text: "info@hadeed.com.sa",
        link: "mailto:info@hadeed.com.sa",
        img: "/images/icons/email.svg",
        alt: "email",
    },
    {
        text: "+966 1122 58000",
        link: "tel:+966 1122 58000",
        img: "/images/icons/phone.svg",
        alt: "phone",
    },
]
const Content = () => {
    return (
        <div data-aos='fade-down' className='lg:w-[37.9166666667vw]'>
            <div>
                <h2 className='f500 text-white text48 capitalize'>
                    Get in touch with us
                </h2>
                <p className='lg:mt-[0.69444444444vw] mt-[8px] text-white text-opacity-[0.7] text16'>
                    Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
            </div>
            <ul className='sm:text16 text-[13px] leading-[19.5px] flex flex-col lg:gap-y-[0.90277777777vw] lg:mt-[2.08333333333vw] gap-y-[13px] mt-[13px]'>
                {
                    formLinks.map((formLink, i) => (
                        <li>
                            <Link target={i === 0 ? '_blank' : '_self'} key={i} href={`${formLink.link}`} className='opacity_Hover flex gap-x-[11px] lg:gap-x-[0.76388888888vw] items-center'>
                                <img src={formLink.img} alt={`${formLink.alt}`} className='lg:w-[1.28958333333vw] w-[18.57px] flipped' />
                                <span className='text-white text-opacity-[0.7] underline'> {formLink.text}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Content
