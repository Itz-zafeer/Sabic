'use client'
import React, { useState } from 'react'

const inquiryies = [
    {
        setting: "1 inquiryies",
    },
    {
        setting: "2 inquiryies",
    },
    {
        setting: "3 inquiryies",
    },
    {
        setting: "4 inquiryies",
    },

]

const Form = () => {
    let [handleinputValue, sethandleinputValue] = useState("Inquiry type")
    const [openDropDown, setopenDropDown] = useState(false)
    const handleValue = (value) => {
        sethandleinputValue(value)
    }
    const handleDropDown = () => {
        setopenDropDown(!openDropDown)
    }
    return (
        <form data-aos='fade-up' className='lg:w-[40.9027777778vw]'>
            <div className=' w-full flex flex-col lg:gap-y-[1.66666666667vw] gap-y-[16px]'>
                <div className='flex justify-between items-center flex-wrap lg:gap-y-[1.66666666667vw] gap-y-[16px]'>
                    <div className='lg:w-[20vw] w-full lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]'>
                        <input type="text" className={`lg:placeholded:text-[1.11111111111vw] placeholded:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-[90%] outline-none  `} placeholder='Name' />
                    </div>
                    <div className='lg:w-[20vw] w-full lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]'>
                        <input type="email" className={`lg:placeholded:text-[1.11111111111vw] placeholded:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-[90%] outline-none  `} placeholder='Email' />
                    </div>
                </div>
                <div className=' lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]'>
                    <input type="tel" className={`lg:placeholded:text-[1.11111111111vw] placeholded:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-[90%] outline-none  `} placeholder='Mobile number' />
                </div>
                <div onClick={() => { handleDropDown() }} className=' relative lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px] f500 cursor-pointer text-white'>
                    <div className={`  lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66] `}>
                        <input type="text" className={`lg:placeholded:text-[1.11111111111vw] placeholded:text-[16px] placeholder:text-white placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px] cursor-pointer bg-transparent w-[90%] outline-none  `} placeholder={handleinputValue} />
                        <img src="/images/icons/arrow-down.svg" alt="chevron" className={`${openDropDown ? "scale-y-[-1]" : ""} transition-all duration-300 transform lg:min-w-[1.52777777778vw] lg:w-[1.52777777778vw] lg:h-[1.52777777778vw] min-w-[22px] w-[22px] h-[22px]`} />
                    </div>
                    <div className={`${openDropDown ? "max-h-[500px] " : "max-h-0"} drop_DownItems z-[2] border7 transition-all duration-300 overflow-hidden absolute w-full top-[100%] leftRightFixer1`}>
                        <ul className='bg-[#868686] lg:px-[2.22222222222vw] px-[20px] lg:py-[0.76388888888vw] py-[10px] flex flex-col lg:gap-y-[0.76388888888vw] gap-y-[10px]'>
                            {inquiryies?.map((value, index) => (
                                <li key={index}
                                    onClick={() => { handleValue(value.setting) }}
                                    className='border-b-[1px] border-[#ffffff1a] lg:pb-[0.76388888888vw] pb-[10px] text-white'>
                                    <span>
                                        {value.setting}
                                    </span>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]'>
                    <textarea placeholder='Message' className='lg:placeholded:text-[1.11111111111vw] placeholded:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-full outline-none' ></textarea>
                </div>
            </div>
            <button className='capitalize f500 text18 border7 bg-[#FF9900] text-white hover:bg-opacity-[0.7] lg:py-[0.97222222222vw] lg:px-[2.83333333333vw] py-[14px] w-full lg:w-[unset] mt-[24px] lg:mt-[1.66666666667vw]'>
                Send Message
            </button>
        </form>
    )
}

export default Form
