"use client";

import React, { useState } from "react";
import MemberCard from "./MemberCard";
import MemberPopup from "./MemberPopup";

const membersData = [
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  },
  {
    title: " Earl Hansen",
    designation: "Central Integration Architect",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.jpg"
  }
];

const Members = () => {
  const [currentMember, setCurrentMember] = useState({});

  const openPopup = (member) => {
    const memberPopupMain = document.querySelector(".member_PopupMain");
    const body = document.querySelector("body");
    memberPopupMain.classList.add("active");
    body.classList.add("active");
    setCurrentMember(member);
  };
  const closePopup = () => {
    const memberPopupMain = document.querySelector(".member_PopupMain");
    const body = document.querySelector("body");
    memberPopupMain.classList.remove("active");
    body.classList.remove("active");
  };
  return (
    <section id="membersSection">
      <div className="relative bg-[#FBFBFB] lg:py-[10.4166666667vw]   py-[100px]">
        <img
          src="/images/home/about/pattern.png"
          alt="pattern"
          className=" absolute leftRightFixer2  lg:w-[38.6805555556vw] sm:w-[70%] w-full top-0"
        />
        <MemberPopup closePopup={closePopup} memberData={currentMember} />
        <div className="Container1240 relative z-[2]">
          <div className="w-[full] mx-[auto] lg:mx-[unset] lg:w-[51.3194444444vw]">
            <h2 data-aos="fade-up" className="f500 text-[#121212] text48">
              Board Members
            </h2>
            <p
              data-aos="fade-down"
              className="text16 text-[#666] lg:mt-[1.11111111111vw] mt-[8px]"
            >
              Our highly experienced leadership team has strong sector knowledge
              and a deep commitment to maintaining the highest standards of
              excellence.
            </p>
          </div>
          <div
            data-aos="fade"
            className="flex lg:gap-[3.47222222222vw] justify-between gap-y-[25px] flex-wrap lg:mt-[2.77777777778vw] mt-[30px]"
          >
            {membersData?.map((member, index) => (
              <MemberCard openPopup={openPopup} key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
