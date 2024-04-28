"use client";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import arrow from "../../../public/json/arrow.json";
import HeroSlide from "./HeroSlide";
const skipSection = () => {
  window.scroll(0, window.innerHeight);
};

const Hero = ({ arabic }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const timerRef = useRef(null); // Define timerRef using useRef

  // Function to update the current slide manually
  const updateSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    resetTimer();
  };

  // Timer to automatically update the current slide every 8 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 8000);

    return () => clearInterval(timerRef.current);
  }, []);

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 8000);
  };

  const slides = [
    {
      heading: arabic ? "حــــديــــد" : " Hadeed",
      desc: arabic
        ? "صياغة المستقبل من خلال إنتاج الصلب الصديق للبيئة، حديد من سابك تقود النمو الصناعي في الخليج بالابتكار والمسؤولية"
        : " Forging the future with eco-conscious steel production, SABIC's Hadid leads with innovation and responsibility in the Gulf's industrial growth",
      img: "/images/home/hero/1.jpg"
    },
    {
      heading: arabic ? "حــــديــــد 02" : " Hadeed 02",
      desc: arabic
        ? "صياغة المستقبل من خلال إنتاج الصلب الصديق للبيئة، حديد من سابك تقود النمو الصناعي في الخليج بالابتكار والمسؤولية"
        : " Forging the future with eco-conscious steel production, SABIC's Hadid leads with innovation and responsibility in the Gulf's industrial growth",
      img: "/images/home/hero/2.jpg"
    },
    {
      heading: arabic ? "حــــديــــد 03" : " Hadeed 03",
      desc: arabic
        ? "صياغة المستقبل من خلال إنتاج الصلب الصديق للبيئة، حديد من سابك تقود النمو الصناعي في الخليج بالابتكار والمسؤولية"
        : " Forging the future with eco-conscious steel production, SABIC's Hadid leads with innovation and responsibility in the Gulf's industrial growth",
      img: "/images/home/hero/3.jpg"
    }
  ];

  return (
    <section
      id="homeSection"
      className="h-[100vh] sm:h-[600px] lg:h-[100vh] relative z-[2] "
    >
      <div className="overlays atlwh_Full z-[1]">
        <div className="overlay_dark atlwh_Full"></div>
        <div className="overlay_nav atlwh_Full"></div>
      </div>
      <div className="relative w-full h-full  ">
        {slides?.map((slide, index) => (
          <HeroSlide
            key={index}
            heading={slide.heading}
            img={slide.img}
            desc={slide.desc}
            index={index + 1}
            currentSlide={currentSlide}
          />
        ))}
      </div>
      <div className="overflow-hidden atlwh_Full ">
        <div className="heroNavigation z-[2]">
          {slides?.map((slide, index) => (
            <span
              key={index}
              onClick={() => updateSlide(index + 1)}
              className={`heroNavigationCircle ${
                currentSlide == index + 1 ? "active" : ""
              }`}
            ></span>
          ))}
        </div>
        <div
          className="absolute bottom-[24px] z-[10] sm:bottom-[35px] lg:bottom-[2.15277777778vw] transform left-[50%] translate-x-[-50%] lg:w-[1.66666666667vw]  lg:h-[2.77777777778vw]  w-[24px] h-[40px] sm:w-[35px] sm:h-[35px] cursor-pointer"
          onClick={skipSection}
        >
          <Lottie loop animationData={arrow} play className="  w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
