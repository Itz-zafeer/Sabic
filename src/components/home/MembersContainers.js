import React, { useEffect, useRef, useState } from "react";
import MemberCard from "./MemberCard";

const MembersContainers = ({ membersData, openPopup }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [splitOfFourMembers, setSplitOfFourMembers] = useState([]);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const chunk = (arr, size) =>
      Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );

    // Split membersData into groups of four
    const newSplit = chunk(membersData, 4);
    setSplitOfFourMembers(newSplit);
  }, []);
  useEffect(() => {
    const newPosition = `translateX(-${currentItem * 100}%)`;
    wrapperRef.current.style.transform = newPosition;
  }, [currentItem]);
  return (
    <div className="mobileMemberSlider">
      <div ref={wrapperRef} className="mobileMemberSliderWrapper">
        {splitOfFourMembers.map((members, index) => (
          <div className="Container1240" key={index}>
            <div
              data-aos="fade"
              className="flex lg:gap-[3.47222222222vw] justify-between gap-y-[25px] flex-wrap lg:mt-[2.77777777778vw] mt-[30px]"
            >
              {members?.map((member, index) => (
                <MemberCard openPopup={openPopup} key={index} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mobileMemberSliderNavigation Container1240 sm:hidden">
        <img
          onClick={() => setCurrentItem(currentItem - 1)}
          src="/images/icons/sliderLeft.svg"
          alt="chevron"
          className={`w-[32px] mr-auto ${
            currentItem == 0 ? "opacity-[0.5] pointer-events-none " : ""
          }`}
        />

        {splitOfFourMembers.map((item, index) => (
          <span
            key={index}
            onClick={() => setCurrentItem(index)}
            className={`navItems ${currentItem == index ? "active" : ""} `}
          ></span>
        ))}
        <img
          src="/images/icons/sliderRight.svg"
          alt="chevron"
          onClick={() => setCurrentItem(currentItem + 1)}
          className={`w-[32px] ml-auto ${
            currentItem == splitOfFourMembers.length - 1
              ? "opacity-[0.5] pointer-events-none "
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default MembersContainers;
