import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section
      id="aboutSection"
      className="relative bg-[#FBFBFB] lg:pt-[12.5vw] lg:pb-[5.97222222222vw] sm:pt-[120px]  pt-[92px] pb-[220px] "
    >
      <img
        src="/images/home/about/pattern.png"
        alt="pattern"
        className=" absolute leftRightFixer2 lg:top-[-5.69444444444vw] lg:w-[38.6805555556vw] sm:w-[70%] w-full top-0"
      />
      <div className="absolute lg:leftRightFixer1 left-[50%] translate-x-[-50%] lg:translate-x-[unset] bottom-[-90px] sm:bottom-[-150px] lg:bottom-[-3.125vw] lg:w-[50.0694444444vw] lg:h-[52.7777777778vw] sm:w-[58%] sm:h-[320px] w-[88%] h-[237px]">
        <img
          data-aos="fade"
          src="/images/home/about/banner1.png"
          alt="banner"
          className="hidden lg:block w-full h-full object-cover"
        />
        <img
          data-aos="fade"
          src="/images/home/about/mob-banner1.jpg"
          alt="banner"
          className="lg:hidden block w-full h-full object-cover rounded-[20px]"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="relative z-[2] Container1240 flex justify-end"
      >
        <div className="lg:pt-[1.31944444444vw] lg:w-[38.5416666667vw] text16 flex flex-col lg:gap-y-[1.25vw] gap-y-[25px] text-[#121212]">
          <div>
            <h2 className="text48 f500 text-[#121212]">
              Saudi Iron and Steel Company{" "}
              <span className="text-[#F90]">(Hadeed)</span>
            </h2>
            <div className="flex flex-col lg:gap-y-[1.25vw] lg:mt-[0.83333333333vw] mt-[8px] gap-y-[25px]">
              <p>
                Hadeed supply a wide range of high-quality flat and long steel
                products. Hadeed’s products have contributed to supporting the
                urban renaissance locally and globally, providing the
                construction and downstream industries – including oil, gas, and
                water pipelines – high-value products manufactured by a
                qualified national workforce with leading research and
                technology capabilities.
              </p>
              <p>
                Hadeed is a key player in the Saudi strategic industries with a
                pivotal role in enabling Saudi Vision 2030.
              </p>
            </div>
          </div>
          <div>
            <h4 className="sm:text24  text-[24px] leading-[33px] f500">
              Our Vision
            </h4>
            <p className="mt-[6px] lg:mt-[unset]">
              To be the preferred local and regional leader in the steel
              industry.
            </p>
          </div>
          <div>
            <h4 className="sm:text24  text-[24px] leading-[33px] f500">
              Our Mission
            </h4>
            <p className="mt-[6px] lg:mt-[unset]">
              To offer our customers quality, innovative, and diverse steel
              solutions in collaboration with our resources, while maintaining
              the best-in-class Environment, Health, Safety, Security, and
              Reliability standards to maximize the value for our stakeholders
              and enabling Saudi Vision 2030.
            </p>
          </div>
          <Link
            href="/pdf/code-of-conduct.pdf"
            target="_blank"
            download
            className="flex items-center lg:gap-x-[gap-x-[vw]vw] gap-x-[10px]"
          >
            <img
              src="/images/icons/download.svg"
              alt="download"
              className="lg:w-[1.66666666667vw] lg:h-[1.66666666667vw] w-[24px] h-[24px]"
            />
            <span>Download Code of Conduct</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
