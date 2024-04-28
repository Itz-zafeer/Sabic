import Image from "next/image";
import React from "react";

const HeroSlide = ({ img, heading, desc, currentSlide, index }) => {
  return (
    <div
      className={` ${
        currentSlide == index ? "active" : ""
      } w-full h-full heroSlide absolute top-0 flex items-end pb-[150px] lg:pb-[13.5vw] `}
    >
      <div className="atlwh_Full" data-aos="fade">
        <Image src={img} fill className="object-cover" />
      </div>
      <div className="relative z-[2] Container1240">
        <div className="text-center   lg:w-[49.56vw] sm:w-[unset] w-[90%]    mx-[auto]">
          <h1 data-aos="fade-up" className="f500 text-white text72">
            {heading}
          </h1>
          <p
            data-aos="fade-down"
            className="text-white text-opacity-[0.8] text24 mt-[4px] lg:mt-[0.83333333333vw]"
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
