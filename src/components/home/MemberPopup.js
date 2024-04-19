import React from "react";

const MemberPopup = ({ closePopup, memberData }) => {
  return (
    <div className="member_PopupMain z-[3]  fixed top-0 leftRightFixer2 w-full h-[100vh] z-[555]">
      <span
        onClick={closePopup}
        className=" bg-[#121212] bg-opacity-[0.7] atlwh_Full hidden lg:block"
      ></span>
      <img
        onClick={closePopup}
        src="/images/icons/close.svg"
        alt="close"
        className="hidden lg:block absolute fixeClose cursor-pointer  lg:w-[2.77777777778vw] w-[40px] top-[0.41666666666vw]"
      />
      <div className="relative z-[3] member_Popup overflow-auto lg:w-[35.6944444444vw] w-full h-full bg-white pt-[100px] lg:pt-[3.61111111111vw]">
        <img
          onClick={closePopup}
          src="/images/icons/close-mob.svg"
          alt="close"
          className="lg:hidden block absolute fixeClose cursor-pointer lg:w-[2.77777777778vw] w-[40px] top-[48px]"
        />
        <div className="Rubik member_Card lg:w-[28.0555555556vw] w-[88%] mx-[auto] border10 text-[#121212]">
          <img
            src={memberData?.img}
            alt={memberData?.title}
            className="border10 w-full h-[290px] lg:h-[20.1388888889vw] object-cover"
          />
          <h5 className="text32  lg:mt-[0.76388888888vw] mt-[11px]">
            {memberData?.title}
          </h5>
          <span className="block mb-[12px]  lg:mb-[0.97222222222vw] text20  font-[300]">
            {memberData?.designation}
          </span>
          <p className="Inter text18 text-[#121212] text-opacity-[0.7] ">
            {memberData?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberPopup;
