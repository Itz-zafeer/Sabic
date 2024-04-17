import Link from 'next/link'
import React from 'react'


const products = [
    {
        heading: "Long Products",
        text: "Hadeed offers a broad range of Long products in the form of concrete reinforcing bars (rebar), wire rod coil, light section, and steel billet.",
        tag: "Rebar, Rebar in Coil, Straighten rebar, Wire Rod ",
    },
    {
        heading: "Flat Products",
        text: "Hadeed offers a broad range of hot rolled and cold rolled flat products in the form of both Coil and Slit Coil.",
        tag: "CRC, CRCG, CRS, CRSG, HRC, HRCP, HRS, PPGI ",
    },
]


const Products = () => {
    return (
        <section className='bg-[#1A1C1F] lg:pt-[12.5vw] pt-[132px] lg:pb-[10.5555555556vw] pb-[125px]'>
            <div className='Container1240'>
                <div className='w-[317px] mx-[auto] lg:w-[unset]'>
                    <h2 data-aos='fade-up' className='f500 text-white text48'>
                        Our Products
                    </h2>
                    <p data-aos='fade-down' className='text16 text-[#FBFBFB] lg:mt-[1.11111111111vw] mt-[8px]'>
                        Hadeed’s metals products are supplied under the Hadeed brand. As a leader in the Gulf region for steel production and manufacturing, Hadeed produces high- quality metals, and has played a vital role in the construction and industrialization of some of the world’s fastest growing economies. We are responsibly working towards reducing the environmental footprint from our operations. Hadeed SOx and NOx figures for 2022 are 15.4 & 707.28 tons/year respectively
                    </p>
                </div>
                <div data-aos='fade-up' data-aos-delat='400' className='flex items-stretch justify-between flex-wrap gap-y-[40px] lg:my-[3.81944444444vw] my-[40px]'>
                    {
                        products.map((product, i) => (
                            <div key={i} className='product_Card border20 lg:w-[41.1805555556vw] w-full overflow-hidden'>
                                <div className='flex flex-col items-end lg:pt-[2.08333333333vw] pt-[30px]'>
                                    <div className='text-white lg:w-[35.625vw] w-[254px] mx-[auto]'>
                                        <h5 className='text28'>
                                            {product.heading}
                                        </h5>
                                        <p className='lg:h-[5.20833333333vw] lg:mt-[0.27777777777vw] lg:mb-[0.55555555555vw] mt-[4px] mb-[11px] sm:text16 text-[16px] leading-[24px]  text-[#FBFBFB]'>
                                            {product.text}
                                        </p>
                                        <span className='text18 f700'>
                                            {product.tag}
                                        </span>
                                    </div>
                                    <img src={`/images/home/products/${i + 1}.png`} alt="products" className='lg:mt-[3.05555555556vw] mt-[20px] w-full lg:w-[30.4861111111vw] lg:h-[15.9027777778vw] h-[175px]' />
                                </div>
                            </div>
                        ))
                    }

                </div>
                <Link data-aos='fade' href='/pdf/code-of-conduct.pdf' target="_blank" download className='mx-[auto] lg:w-[23.2638888889vw] w-full flex justify-center items-center gap-x-[4px] lg:gap-x-[0.27777777777vw] sm:text18 text-[16px] bg-[#FF9900] hover:bg-opacity-[0.8] lg:py-[1.00694444444vw] py-[16px] border7 text-white'>
                    <img src="/images/icons/catalouge.svg" alt="catalouge" className='lg:w-[1.66666666667vw] lg:h-[1.66666666667vw] w-[24px] h-[24px]' />
                    <span className='f500'> Product Catalogue</span>
                </Link>
            </div>
        </section>
    )
}

export default Products
