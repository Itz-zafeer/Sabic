"use client";

import React, { useState } from "react";
import MemberCard from "./MemberCard";
import MemberPopup from "./MemberPopup";
import MembersContainers from "./MembersContainers";

const chairmanData = {
  title: " Full Name",
  designation: "Chairman",
  desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae. Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
  img: "/images/home/members/1.png"
};

const membersData = [
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  },
  {
    title: "Full Name",
    designation: "Position",
    desc: "  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
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
    <>
      <section id="membersSection">
        <div className="relative bg-[#FBFBFB] z-[2] lg:py-[10.4166666667vw]   py-[100px]">
          <img
            src="/images/home/members/pattern.png"
            alt="pattern"
            className=" absolute leftRightFixer2  lg:w-[38.6805555556vw] sm:w-[70%] w-full top-0"
          />
          <img
            src="/images/home/members/pattern.png"
            alt="pattern"
            className=" absolute leftRightFixer transform scale-x-[-1]   lg:w-[38.6805555556vw] sm:w-[70%] w-full top-0"
          />

          <div className="Container1240 relative z-[2]">
            <div className="w-[full] mx-[auto] lg:mx-[unset] lg:mx-auto lg:text-center lg:w-[51.3194444444vw]">
              <h2
                data-aos="fade-up"
                className="font-[700] text-[#121212] text48"
              >
                Board Members
              </h2>
              <p
                data-aos="fade-down"
                className="text20 text-[#666] lg:mt-[1.11111111111vw] mt-[8px]"
              >
                Our highly experienced leadership team has strong sector
                knowledge and a deep commitment to maintaining the highest
                standards of excellence.
              </p>
            </div>
          </div>
          <div className="Container1240 flex justify-center lg:mt-[3vw] mt-[40px] relative">
            <MemberCard member={chairmanData} openPopup={openPopup} bigCard />
          </div>
          <MembersContainers membersData={membersData} openPopup={openPopup} />
        </div>
      </section>
      <MemberPopup closePopup={closePopup} memberData={currentMember} />
    </>
  );
};

export default Members;
