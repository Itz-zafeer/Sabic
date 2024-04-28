import Link from "next/link";
import React from "react";

const About = ({ arabic }) => {
  return (
    <section
      id="aboutSection"
      className="relative bg-[#FBFBFB]  lg:pt-[8vw] lg:pb-[10vw] sm:pt-[120px]  pt-[92px] pb-[120px] "
    >
      {/* <img
        src="/images/home/about/pattern.png"
        alt="pattern"
        className=" absolute leftRightFixer2 lg:top-[-5.69444444444vw] lg:w-[38.6805555556vw] sm:w-[70%] w-full top-0"
      /> */}
      <img
        src="/images/home/about/pattern.png"
        className="w-[250%] h-[600px] lg:w-[38.6805555556vw] lg:h-[60.4166666667vw] bottom-0 leftRightFixer1 flipped absolute object-cover"
        alt="pattern"
      />

      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="relative z-[2] Container1240 flex justify-end"
      >
        <div className="lg:pt-[1.31944444444vw] lg:w-[46.875vw] text16 flex flex-col lg:gap-y-[1.6vw] gap-y-[25px] text-[#121212]">
          <div>
            <h2 className={`${arabic ? "font-[500]" : "font-[300]"} text48  text-[#121212]  lg:w-[38.5416666667vw]`}>
              {arabic ? "الشركة السعودية للحديد والصلب " : "Saudi Iron and Steel "}
              <span className="font-[700]">
                {arabic || "Company"} <span className="text-[#F90]">{arabic ? "(حـــديـــد)" : "(Hadeed)"}</span>
              </span>
            </h2>
            <div className="flex flex-col lg:gap-y-[1.6vw] lg:mt-[0.83333333333vw] mt-[8px] text20 gap-y-[25px]">
              <p>
                {arabic ? "توفر حديد مجموعة واسعة من المنتجات الفولاذية المسطحة والطويلة عالية الجودة. وقد ساهمت منتجات حديد في دعم النهضة الحضرية محلياً وعالمياً، حيث قدمت لصناعات البناء والصناعات التحويلية - بما في ذلك خطوط أنابيب النفط والغاز والمياه - منتجات عالية القيمة تصنعها قوى عاملة وطنية مؤهلة تتمتع بقدرات بحثية وتكنولوجية رائدة." : "Hadeed supply a wide range of high-quality flat and long steel products. Hadeed’s products have contributed to supporting the urban renaissance locally and globally, providing the construction and downstream industries – including oil, gas, and water pipelines – high-value products manufactured by a qualified national workforce with leading research and technology capabilities."}
              </p>
              <p className="font-[500]">
                {arabic ? "حديد لاعب رئيسي في الصناعات الاستراتيجية السعودية ولها دور محوري في تمكين رؤية السعودية 2030." : "Hadeed is a key player in the Saudi strategic industries with a pivotal role in enabling Saudi Vision 2030."}
              </p>
            </div>
          </div>
          <div>
            <h4 className="sm:text24  text-[24px] leading-[33px] f500">
              {arabic ? "رؤيتنا" : "Our Vision"}
            </h4>
            <p className="mt-[6px] lg:mt-[unset] text20">
              {arabic ? "أن نكون الشركة الرائدة محلياً وإقليمياً في صناعة الصلب." : "To be the preferred local and regional leader in the steel industry."}
            </p>
          </div>
          <div>
            <h4 className="sm:text24  text-[24px] leading-[33px] f500">
              {arabic ? "مهمتنا" : "Our Mission"}
            </h4>
            <p className="mt-[6px] lg:mt-[unset] text20">
              {arabic ? "أن نقدم لعملائنا حلولاً فولاذية عالية الجودة ومبتكرة ومتنوعة بالتعاون مع مواردنا، مع الحفاظ على أفضل معايير البيئة والصحة والسلامة والأمن والموثوقية لتحقيق أقصى قدر من القيمة لأصحاب المصلحة لدينا وتمكين الرؤية السعودية 2030." : "To offer our customers quality, innovative, and diverse steel solutions in collaboration with our resources, while maintaining the best-in-class Environment, Health, Safety, Security, and Reliability standards to maximize the value for our stakeholders and enabling Saudi Vision 2030."}
            </p>
          </div>
          <Link
            href="/pdf/code-of-conduct.pdf"
            target="_blank"
            download
            className="flex items-center lg:gap-x-[0.6vw] gap-x-[10px]"
          >
            <img
              src="/images/icons/download.svg"
              alt="download"
              className="lg:w-[1.66666666667vw] lg:h-[1.66666666667vw] w-[24px] h-[24px]"
            />
            <span className={`${arabic ? "font-[400]" : "font-[500]"}`}>{arabic ? "تحميل قواعد السلوك" : "Download Code of Conduct"}</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-[30px] lg:m-0 lg:absolute lg:leftRightFixer1  lg:translate-x-[unset]  lg:bottom-[10vw] lg:w-[40.8333333333vw] lg:h-[43.0555555556vw] sm:w-[58%] sm:h-[320px] w-[88%] h-[237px]">
        {/* <img
          data-aos="fade"
          src="/images/home/about/banner1.png"
          alt="banner"
          className="hidden lg:block w-full h-full object-cover opacity-0"
        /> */}
        <img
          data-aos="fade"
          src="/images/home/about/mob-banner1.jpg"
          alt="banner"
          className="lg:hidden block w-full h-full object-cover rounded-[20px]"
        />
        <div
          data-aos="fade"
          className="w-[29.7222222222vw]  hidden lg:block  top-0 leftRightFixer2   absolute h-[43.0555555556vw] rounded-[1vw] overflow-hidden"
        >
          <img src="/images/about/02.png" className="w-full flipped" />
        </div>
        <div
          data-aos="fade"
          className="w-[9.23611111111vw]  hidden lg:block  bottom-0 leftRightFixer1  absolute h-[33.8194444444vw] overflow-hidden rounded-tr-[1vw]  rounded-br-[1vw]"
        >
          <img src="/images/about/01.png" className="w-full flipped" />
        </div>
      </div>
    </section>
  );
};

export default About;
