"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const headerLinks = [
  {
    text: "About us "
  },
  {
    text: "our products "
  },
  {
    text: "Board Members "
  },
  {
    text: "Contact us "
  }
];
const navbarSocialIcons = [
  {
    img: "/images/icons/header-social/fb.svg",
    alt: "fb",
    link: "https://www.facebook.com/"
  },
  {
    img: "/images/icons/header-social/twitter.svg",
    alt: "twitter",
    link: "https://www.twitter.com/"
  },
  {
    img: "/images/icons/header-social/linkedin.svg",
    alt: "linkedin",
    link: "https://www.linkedin.com/"
  },
  {
    img: "/images/icons/header-social/insta.svg",
    alt: "insta",
    link: "https://www.instagram.com/"
  }
];

// function toggleSidebar() {
//   const body = document.querySelector("body");
//   const sideBar = document.querySelector(".sideBar");
//   const menu = document.querySelector(".menu");
//   body.classList.toggle("active");
//   sideBar.classList.toggle("active");
//   menu.classList.toggle("active");
// }

const Header = ({ arabic }) => {
  const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState("");
  const fixedHeader = useRef(null);
  const [links, setLinks] = useState([
    {
      id: "homeSection",
      linktext: arabic ? "  من نحن" : "Home",
      y: 0
    },
    {
      id: "aboutSection",
      linktext: arabic ? "  من نحن" : "About us",
      y: 0
    },
    {
      id: "productsSection",
      linktext: arabic ? "    الخدمات" : "Our products",
      y: 0
    },
    {
      id: "membersSection",
      linktext: arabic ? "    الاستدامة" : "Board Members",
      y: 0
    },

    {
      id: "contactSection",
      linktext: arabic ? "       تواصل معنا" : "Contact Us",
      y: 0
    }
  ]);

  useEffect(() => {
    const hashTag = window.location.hash;
    setHash(hashTag);
    if (hashTag) {
      scrollToElement(hashTag.slice(1) + "Section");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setFixedHeaderHeight(
        document.querySelector("#fixedHeader > div").offsetHeight
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleFixedHeader = () => {
      let offset = 400;
      let scrollTop = window.scrollY;
      if (fixedHeader?.current) {
        if (scrollTop > offset) {
          fixedHeader.current.classList.add("fixedActive");
          fixedHeader.current.style.maxHeight = fixedHeaderHeight + "px";
        } else {
          fixedHeader.current.classList.remove("fixedActive");
          fixedHeader.current.style.maxHeight = 0 + "px";
        }

        const activeLinkId = links.reduce((acc, curr) => {
          if (scrollTop + 50 >= curr.y) {
            acc = curr.id;
          }
          return acc;
        }, null);
        setActiveLink(activeLinkId);
      }
    };
    window.addEventListener("scroll", handleFixedHeader);
    return () => window.removeEventListener("scroll", handleFixedHeader);
  }, [fixedHeaderHeight]);

  function toggleSidebar() {
    if (window.innerWidth < 1024) {
      const body = document.querySelector("body");
      const sideBar = document.querySelector(".sideBar");
      const menu = document.querySelector(".menu");
      body.classList.toggle("active");
      sideBar.classList.toggle("active");
      menu.classList.toggle("active");
      setIsOpen(!isOpen);
    }
  }

  useEffect(() => {
    if (fixedHeaderHeight) {
      const prevLinks = links;
      links.forEach((link, index) => {
        const yOffset = -fixedHeaderHeight;
        const element = document.getElementById(link.id);
        const y =
          element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
        prevLinks[index].y = y;
      });
      setLinks(prevLinks);
    }
  }, [fixedHeaderHeight]);

  const scrollToElement = (id) => {
    const yOffset = -fixedHeaderHeight; // Adjust this value according to your offset
    const element = document.getElementById(id);

    const y =
      element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <header className="w-full absolute z-[10] lg:px-[6.94444444444vw] px-[20px]   lg:pt-[0.69444444444vw]">
        <div className="py-[24px] lg:py-[1.66666666667vw] flex items-center justify-between">
          <Link
            href="/"
            className="block relative z-[4] lg:w-[6.94444444444vw] lg:h-[2.63888888889vw] w-[100px] h-[38px]"
          >
            <Image src="/images/icons/logo.svg" alt="logo" fill />
          </Link>
          <nav className="text-white flex items-center lg:gap-x-[2.22222222222vw] sm:gap-x-[30px] gap-x-[16px]">
            <div className="sideBar flex flex-col justify-between overflow-hidden bg-[#121212] lg:bg-transparent  sm:pt-[250px] pt-[154px] lg:pt-[unset] fixed inset-0 lg:static z-[2] h-[100vh] lg:h-[unset]">
              <ul className=" relative z-[2] capitalize  flex flex-col sm:gap-y-[45px] gap-y-[24px] lg:flex-row lg:items-center lg:gap-x-[2.22222222222vw] text18">
                {links.map(
                  (headerLink, index) =>
                    index == 0 || (
                      <li
                        key={index}
                        onClick={() => {
                          scrollToElement(headerLink.id);
                          setActiveLink(headerLink.id);
                          toggleSidebar();
                          setHash("#" + headerLink.id.replace("Section", ""));
                          window.location.hash = headerLink.id.replace(
                            "Section",
                            ""
                          );
                        }}
                        className={`mx-[20px] cursor-pointer lg:mx-[unset] border-b-[1px] lg:border-b-0 border-[#ffffff33] pb-[24px] lg:pb-[unset]  transition-all duration-300 ${
                          activeLink == headerLink.id ? "text-[#f90]" : ""
                        } hover:text-[#f90]`}
                      >
                        {headerLink.linktext}
                      </li>
                    )
                )}
              </ul>
              <div className="lg:hidden block absolute w-full h-[425px] bottom-0  leftRightFixer1">
                <img
                  src="/images/common/pattern-nav.png"
                  alt="pattern"
                  className="w-full h-full object-cover"
                />
                <span className="navbar_Overlay w-full h-full absolute bottom-0 leftRightFixer1"></span>
              </div>
              <div className="lg:hidden relative z-[2] flex justify-center items-center gap-x-[24px] pb-[24px]">
                {navbarSocialIcons.map((navbarSocialIcon, i) => (
                  <Link
                    target="_blank"
                    href={`${navbarSocialIcon.link}`}
                    key={i}
                    className="relative w-[24px] h-[24px] sm:w-[35px] sm:h-[35px]"
                  >
                    <Image
                      fill
                      src={navbarSocialIcon.img}
                      alt={navbarSocialIcon.alt}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <span className="hidden lg:block bg-[#ffffff33] w-[1px] h-[1.38888888889vw]"></span>
            <Link
              href="/"
              className={`${
                arabic ? "" : " mt-[-0.25vw]"
              } relative z-[4] lg:text16 leading-[24px] text-[16px] Rubik transition-all duration-300 hover:text-[#f90]`}
            >
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
      <header
        ref={fixedHeader}
        id="fixedHeader"
        className={`w-full fixed z-[10] ${
          isOpen ? "" : " bg-white "
        } transition-all duration-500  max-h-[0] lg:px-[6.94444444444vw] px-[20px] overflow-hidden `}
      >
        <div className="py-[16px] lg:py-[1vw] flex items-center justify-between ">
          <Link
            href="/"
            className="block relative z-[4] lg:w-[5vw] lg:h-[1.895vw] w-[80px] h-[30px]"
          >
            <Image src="/images/icons/logo.svg" alt="logo" fill />
          </Link>
          <nav className="flex items-center lg:gap-x-[1.5vw] sm:gap-x-[20px] gap-x-[16px]">
            <div className="sideBar flex flex-col justify-between overflow-hidden bg-[#121212] lg:bg-transparent  sm:pt-[250px] pt-[154px] lg:pt-[unset] absolute inset-0 lg:static z-[2] h-[100vh] lg:h-[unset]">
              <ul className=" relative z-[2] capitalize  flex flex-col sm:gap-y-[45px] gap-y-[24px] lg:flex-row lg:items-center lg:gap-x-[2.22222222222vw] text16">
                {links.map(
                  (headerLink, index) =>
                    index == 0 || (
                      <li
                        key={index}
                        onClick={() => {
                          scrollToElement(headerLink.id);
                          setActiveLink(headerLink.id);
                          toggleSidebar();
                          setHash("#" + headerLink.id.replace("Section", ""));
                          window.location.hash = headerLink.id.replace(
                            "Section",
                            ""
                          );
                        }}
                        className={`mx-[20px] cursor-pointer lg:mx-[unset] border-b-[1px] lg:border-b-0 border-[#00033] pb-[24px] lg:pb-[unset]  transition-all duration-300 ${
                          activeLink == headerLink.id ? "text-[#f90]" : ""
                        } hover:text-[#f90]`}
                      >
                        {headerLink.linktext}
                      </li>
                    )
                )}
              </ul>
              <div className="lg:hidden block absolute w-full h-[425px] bottom-0  leftRightFixer1">
                <img
                  src="/images/common/pattern-nav.png"
                  alt="pattern"
                  className="w-full h-full object-cover"
                />
                <span className="navbar_Overlay w-full h-full absolute bottom-0 leftRightFixer1"></span>
              </div>
              <div className="lg:hidden relative z-[2] flex justify-center items-center gap-x-[24px] pb-[24px]">
                {navbarSocialIcons.map((navbarSocialIcon, i) => (
                  <Link
                    target="_blank"
                    href={`${navbarSocialIcon.link}`}
                    key={i}
                    className="relative w-[24px] h-[24px] sm:w-[35px] sm:h-[35px]"
                  >
                    <Image
                      fill
                      src={navbarSocialIcon.img}
                      alt={navbarSocialIcon.alt}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <span className="hidden lg:block bg-[#00000033] w-[1px] h-[1.38888888889vw]"></span>
            <Link
              href="/"
              className={`${
                arabic ? " " : "mt-[-0.25vw]"
              } relative z-[4] lg:text16 leading-[24px] ${
                isOpen ? " text-white" : ""
              } text-[16px] Rubik transition-all duration-300 hover:text-[#f90]`}
            >
              عربي
            </Link>
            <div
              onClick={toggleSidebar}
              className="block lg:hidden menu min-w-[20px] h-[20px] sm:w-[4vw] sm:h-[4vw] cursor-pointer z-[2] top-[4px]  "
            >
              <span
                style={{ backgroundColor: isOpen ? "white" : "black" }}
                className={`top-0`}
              ></span>
              <span
                style={{ backgroundColor: isOpen ? "white" : "black" }}
                className={`top-[30%]`}
              ></span>
              <span
                style={{ backgroundColor: isOpen ? "white" : "black" }}
                className={`top-[60%]`}
              ></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
