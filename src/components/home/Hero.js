"use client";

import React from "react";
import Lottie from "react-lottie-player";
import arrow from "../../../public/json/arrow.json";
const skipSection = () => {
  window.scroll(0, window.innerHeight);
};
const Hero = () => {
  return (
    <section
      id="homeSection"
      className="h-[100vh] sm:h-[600px] lg:h-[100vh] relative z-[2] flex items-end pb-[127px] lg:pb-[33vh] sm:pb-[110px]"
    >
      <div className="overflow-hidden atlwh_Full">
        <div className="atlwh_Full">
          <span className="atlwh_Full bg-[#121212] bg-opacity-[0.6]"></span>
          <span className="hero_Overlay2 atlwh_Full"></span>
          <span className="atlwh_Full hero_Overlay3 bottom-0 top-[unset] lg:h-[33.5115277778vw] h-[51.112%] "></span>
        </div>
        <div className="atlwh_Full z-[-1]">
          <img
            src="/images/home/hero/hero.jpg"
            alt="hero"
            className="w-full h-full object-cover hidden lg:block"
          />
          <img
            src="/images/home/hero/hero-mob.jpg"
            alt="hero"
            className="w-full h-full object-cover lg:hidden block"
          />
          {/* <video src="/video/hero.mp4" loop muted autoPlay className='w-full h-full object-cover atlwh_Full' > </video> */}
        </div>
        <div
          className="absolute bottom-[24px] sm:bottom-[35px] lg:bottom-[4.65277777778vw] transform left-[50%] translate-x-[-50%]
  lg:w-[1.94444444444vw]  lg:h-[1.94444444444vw]
  w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] cursor-pointer"
          onClick={skipSection}
        >
          <Lottie
            loop
            animationData={arrow}
            play
            className="
      w-full h-full"
          />
        </div>
      </div>
      <div className="relative z-[2] Container1240">
        <div className="text-center lg:text-start lg:w-[42.4305555556vw] sm:w-[unset] w-[297px] lg:mx-[unset] mx-[auto]">
          <h1 data-aos="fade-up" className="f500 text-white text72">
            Hadeed
          </h1>
          <p
            data-aos="fade-down"
            className="text-white text-opacity-[0.8] text24 mt-[4px] lg:mt-[0.83333333333vw]"
          >
            Forging the future with eco-conscious steel production, SABIC's
            Hadid leads with innovation and responsibility in the Gulf's
            industrial growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
