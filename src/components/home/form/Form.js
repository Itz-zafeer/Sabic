"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formDataSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(50)
    .nonempty({ message: "This Field is required" }),
  email: z.string().email().nonempty({ message: "This Field is required" }),
  mobileNumber: z
    .string()
    .min(3)
    .max(15)
    .nonempty({ message: "This Field is required" }),
  inquiryType: z.string().nonempty({ message: "This Field is required" }),
  message: z
    .string()
    .min(3)
    .max(500)
    .nonempty({ message: "This Field is required" })
});

const inquiries = [
  {
    setting: "1 inquiries"
  },
  {
    setting: "2 inquiries"
  },
  {
    setting: "3 inquiries"
  },
  {
    setting: "4 inquiries"
  }
];

const Form = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [openDropDown, setOpenDropDown] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleValue = (value) => {
    setValue("inquiryType", value);
  };
  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const onSubmit = async (formData) => {
    setIsLoading(true);

    try {
      formDataSchema.parse(formData);
      // Simulate form submission delay (replace with your actual submission logic)
      console.log(JSON.stringify(formData));
      try {
        const response = await fetch("/api/contact", {
          method: "post",
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSuccessMessage(true);
          setErrorMessage(false);

          setErrors({});
          reset();
        } else {
          // Handle HTTP error responses here
          throw new Error("HTTP error " + response.status);
        }
      } catch (error) {
        // Handle fetch-related errors
        console.error("Fetch error:", error);
        setErrorMessage(true);
        setSuccessMessage(false);
      }
    } catch (validationError) {
      const newErrors = {};
      validationError.errors?.forEach((newError) => {
        newErrors[newError.path[0]] = { message: newError.message };
      });
      setErrors(newErrors);
      setSuccessMessage(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-aos="fade-up"
      className="lg:w-[40.9027777778vw]"
    >
      <div
        className={` w-full flex flex-col ${
          Object.keys(errors).length > 1
            ? " gap-y-[30px] mb-[15px] lg:gap-y-[2.5vw]  lg:mb-[1.25vw]"
            : " lg:gap-y-[1.66666666667vw] gap-y-[16px] "
        } `}
      >
        <div
          className={`flex justify-between items-center flex-wrap  ${
            Object.keys(errors).length > 1
              ? " gap-y-[30px]   lg:gap-y-[2.5vw]   "
              : " lg:gap-y-[1.66666666667vw] gap-y-[16px] "
          }`}
        >
          <div className="w-full lg:w-[unset]">
            <div className="lg:w-[20vw] w-full lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]">
              <input
                type="text"
                className={`lg:placeholder:text-[1.11111111111vw] placeholder:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-[90%] outline-none  `}
                placeholder="Name"
                {...register("name")}
              />
            </div>
            {errors?.name && (
              <span className="absolute text16 text-red-600">
                {errors?.name.message}
              </span>
            )}
          </div>
          <div className="w-full lg:w-[unset]">
            <div className="lg:w-[20vw] w-full lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]">
              <input
                type="text"
                className={`lg:placeholder:text-[1.11111111111vw] placeholder:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-[90%] outline-none  `}
                placeholder="Email"
                {...register("email")}
              />
            </div>
            {errors?.email && (
              <span className="absolute text16 text-red-600">
                {errors?.email?.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className=" lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]">
            <input
              type="number"
              className={`lg:placeholder:text-[1.11111111111vw] placeholder:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-[90%] outline-none  `}
              placeholder="Mobile number"
              {...register("mobileNumber")}
            />
          </div>
          {errors?.mobileNumber && (
            <span className="absolute text16 text-red-600">
              {errors?.mobileNumber?.message}
            </span>
          )}
        </div>
        <div>
          <div
            onClick={() => {
              handleDropDown();
            }}
            className=" relative lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px] f500 cursor-pointer text-white"
          >
            <div
              className={`  lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66] `}
            >
              <input
                type="text"
                className={`lg:placeholder:text-[1.11111111111vw] placeholder:text-[16px] placeholder:text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px] cursor-pointer bg-transparent w-[90%] outline-none  `}
                placeholder={"Inquiry type"}
                onKeyDown={(e) => e.preventDefault()}
                {...register("inquiryType")}
              />
              <img
                src="/images/icons/arrow-down.svg"
                alt="chevron"
                className={`${
                  openDropDown ? "scale-y-[-1]" : ""
                } transition-all duration-300 transform lg:min-w-[1.52777777778vw] lg:w-[1.52777777778vw] lg:h-[1.52777777778vw] min-w-[22px] w-[22px] h-[22px]`}
              />
            </div>
            <div
              className={`${
                openDropDown ? "max-h-[500px] " : "max-h-0"
              } drop_DownItems z-[2] border7 transition-all duration-300 overflow-hidden absolute w-full top-[100%] leftRightFixer1`}
            >
              <ul className="bg-[#868686] lg:px-[2.22222222222vw] px-[20px] lg:py-[0.76388888888vw] py-[10px] flex flex-col lg:gap-y-[0.76388888888vw] gap-y-[10px]">
                {inquiries?.map((value, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      handleValue(value.setting);
                    }}
                    className="border-b-[1px] border-[#ffffff1a] lg:pb-[0.76388888888vw] pb-[10px] text-white"
                  >
                    <span>{value.setting}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {errors?.inquiryType && (
            <span className="absolute text16 text-red-600">
              {errors?.inquiryType?.message}
            </span>
          )}
        </div>
        <div>
          <div className="lg:py-[0.97222222222vw] py-[8px] lg:px-[2.22222222222vw] px-[20px] border7 flex justify-between items-center border  border-[#ffffff1a] bg-[#ffffff66]">
            <textarea
              placeholder="Message"
              {...register("message")}
              className="lg:placeholder:text-[1.11111111111vw] placeholder:text-[16px] placeholder:text-white text-white placeholder:text-opacity-[0.75] placeholder:font-[500] font-[500] lg:text-[1.11111111111vw]  text-[16px] lg:leading-[1.66666666667vw] leading-[24px]   bg-transparent w-full outline-none"
            ></textarea>
          </div>
          {errors?.message && (
            <span className="absolute text16 text-red-600">
              {errors?.message?.message}
            </span>
          )}
        </div>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className={`capitalize f500 text18 border7 bg-[#FF9900] text-white hover:bg-opacity-[0.7] lg:py-[0.97222222222vw] lg:px-[2.83333333333vw] py-[14px] w-full lg:w-[unset] mt-[24px] lg:mt-[1.66666666667vw] ${
          isLoading ? "opacity-[0.7] pointer-events-none " : ""
        }`}
      >
        {isLoading ? "Loading..." : "Send Message"}
      </button>
      {successMessage && (
        <span className="block text24 mt-[1vw] text-green-600">
          Your Form has been Successfully Submitted!
        </span>
      )}
      {errorMessage && (
        <span className="block text24 mt-[1vw] text-red-600">
          Something went wrong, Try Again!
        </span>
      )}
    </form>
  );
};

export default Form;
