import React from "react";
import Form from "./Form";
import Content from "./Content";

const FormSection = () => {
  return (
    <section id="contactSection" className="relative z-[2] ">
      <span className="bg-[#121212] bg-opacity-[0.85] atlwh_Full "></span>
      <span className="absolute h-full left-0 top-0 w-[52.1527777778vw] bg-[#1A1C1F] lg:block hidden"></span>
      <div className="Container1240  flex justify-between items-center flex-wrap flex-col-reverse lg:flex-row gap-y-[24px] lg:py-[11.25vw] py-[60px]">
        <Form />
        <Content />
      </div>
    </section>
  );
};

export default FormSection;
