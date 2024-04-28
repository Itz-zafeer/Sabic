"use client";

import React, { useState } from "react";
import MemberCard from "./MemberCard";
import MemberPopup from "./MemberPopup";
import MembersContainers from "./MembersContainers";



const Members = ({ arabic }) => {
  const chairmanData = {
    title: arabic ? "Full Name" : "Full Name",
    designation: arabic ? "Chairman" : "Chairman",
    desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae. Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae."
      : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae. Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.  Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
    img: "/images/home/members/1.png"
  };

  const membersData = [
    {
      title: arabic ? "Earl Hansen" : "Full Name",
      designation: arabic ? "Central Operations Orchestrator" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Woodrow Parker" : "Full Name",
      designation: arabic ? "Lead Tactics Facilitator" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Elsie Sporer" : "Full Name",
      designation: arabic ? "Future Intranet Coordinator" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Earl Hansen" : "Full Name",
      designation: arabic ? "Central Integration Architect" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Ella Pfannerstill" : "Full Name",
      designation: arabic ? "Dynamic Brand Producer" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Al O'Kon" : "Full Name",
      designation: arabic ? "Regional Integration Consultant" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Blanche Barton" : "Full Name",
      designation: arabic ? "Customer Optimization Supervisor" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },
    {
      title: arabic ? "Kenneth Weber" : "Full Name",
      designation: arabic ? "National Markets Coordinator" : "Position",
      desc: arabic ? "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae." : "Lorem ipsum dolor sit amet consectetur. Tellus non dui ultricies massa scelerisque cursus leo morbi vestibulum. Varius purus accumsan elementum vitae.",
      img: "/images/home/members/1.png"
    },

  ];
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
                className={`${arabic ? "font-[500]" : "font-[700]"} text-[#121212] text48`}
              >
                {arabic ? "مجلس الإدارة" : "Board Members"}
              </h2>
              <p
                data-aos="fade-down"
                className="text20 text-[#666] lg:mt-[1.11111111111vw] mt-[8px]"
              >
                {arabic ? "يتمتع فريق القيادة ذو الخبرة العالية لدينا بمعرفة قوية بالقطاع والتزام عميق بالحفاظ على أعلى معايير التميز." : "Our highly experienced leadership team has strong sector knowledge and a deep commitment to maintaining the highest standards of excellence."}
              </p>
            </div>
          </div>
          <div className="Container1240 flex justify-center lg:mt-[3vw] mt-[40px] relative">
            <MemberCard arabic={arabic} member={chairmanData} openPopup={openPopup} bigCard />
          </div>
          <MembersContainers membersData={membersData} openPopup={openPopup} />
        </div>
      </section>
      <MemberPopup closePopup={closePopup} memberData={currentMember} />
    </>
  );
};

export default Members;
