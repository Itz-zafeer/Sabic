import Image from "next/image";
import Link from "next/link";
import React from "react";



const Products = ({ arabic }) => {
  const products = [
    {
      heading: arabic ? "المنتجات الطويلة" : "Long Products",
      text: arabic ? "تقدم حديد مجموعة واسعة من المنتجات الطويلة في شكل قضبان تسليح الخرسانة (حديد التسليح)، ولفائف قضبان الأسلاك، وقسم الضوء، وقضبان الصلب." : "Hadeed offers a broad range of Long products in the form of concrete reinforcing bars (rebar), wire rod coil, light section, and steel billet.",
      tag: arabic ? "Rebar, Rebar in Coil, Straighten rebar, Wire Rod" : "Rebar, Rebar in Coil, Straighten rebar, Wire Rod "
    },
    {
      heading: arabic ? "المنتجات المسطحة" : "Flat Products",
      text: arabic ? "تقدم حديد مجموعة واسعة من المنتجات المسطحة المدرفلة على الساخن والمدرفلة على البارد على شكل لفائف ولفائف مشقوقة." : "Hadeed offers a broad range of hot rolled and cold rolled flat products in the form of both Coil and Slit Coil.",
      tag: arabic ? "CRC, CRCG, CRS, CRSG, HRC, HRCP, HRS, PPGI" : " CRC, CRCG, CRS, CRSG, HRC, HRCP, HRS, PPGI"
    }
  ];
  return (
    <section
      id="productsSection"
      className="bg-[#1A1C1F] relative lg:py-[10.4166666667vw] sm:py-[120px] py-[80px]"
    >
      <img src="/images/home/products/pattern.png" alt="pattern" className="flipped absolute leftRightFixer1 bottom-0 lg:h-[38.6805555556vw] lg:w-[60.4166666667vw] " />
      <div className="Container1240 relative z-[2] flex lg:gap-x-[4.44444444444vw] justify-between items-start flex-wrap sm:gap-y-[50px] gap-y-[40px]">
        <div className="lg:w-[31.5277777778vw]">
          <h2 data-aos="fade-up" className={`${arabic ? "f500" : "f700"} text-white text48 lg:leading-[2.08333333333vw]`}>
            {arabic ? "منتجاتنا" : "Our Products"}
          </h2>
          <div data-aos="fade-down" className="flex flex-col lg:gap-y-[1.42361111111vw] sm:gap-y-[25px] gap-y-[15px] text20 lg:leading-[1.94444444444vw] text-[#FBFBFB] lg:mt-[2.77777777778vw] mt-[8px]">
            <p
            >
              {arabic ? "يتم توفير منتجات حديد المعدنية تحت العلامة التجارية حديد. وباعتبارها شركة رائدة في منطقة الخليج في مجال إنتاج وتصنيع الصلب، تنتج حديد معادن عالية الجودة، وقد لعبت دورًا حيويًا في بناء وتصنيع بعض أسرع الاقتصادات نموًا في العالم." : "Hadeed’s metals products are supplied under the Hadeed brand."}
            </p>
            <p>
              {arabic ? " نحن نعمل بمسؤولية على تقليل البصمة البيئية الناجمة عن عملياتنا." : "As a leader in the Gulf region for steel production and manufacturing, Hadeed produces high- quality metals, and has played a vital role in the construction and industrialization of some of the world’s fastest growing economies."}
            </p>
            <p>
              {arabic ? "أرقام أكاسيد أكسيد الحديد وأكاسيد النيتروجين لعام 2022 هي 15.4 و707.28 طن/سنة على التوالي" : "We are responsibly working towards reducing the environmental footprint from our operations. Hadeed SOx and NOx figures for 2022 are 15.4 & 707.28 tons/year respectively"}
            </p>
          </div>
          <Link
            data-aos="fade"
            href="/pdf/product-catalouge.pdf"
            target="_blank"
            download
            className="lg:mt-[5vw] sm:mt-[40px] mt-[30px] sm:w-[32%] lg:w-[15.1388888889vw] w-full flex justify-center items-center gap-x-[4px] lg:gap-x-[0.27777777777vw] sm:text18 text-[16px] bg-[#FF9900] hover:bg-opacity-[0.8] lg:py-[1.00694444444vw] py-[16px] border7 text-white"
          >
            <img
              src="/images/icons/catalouge.svg"
              alt="catalouge"
              className="lg:w-[1.66666666667vw] lg:h-[1.66666666667vw] w-[24px] h-[24px]"
            />
            <span className="f500"> Product Catalogue</span>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delat="400"
          className="lg:w-[50.1388888889vw] flex lg:gap-x-[2.22222222222vw] items-center justify-between flex-wrap sm:gap-y-[40px] gap-y-[30px]"
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="  lg:w-[23.9583333333vw] w-full overflow-hidden"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:w-[23.9583333333vw] lg:h-[27.4305555556vw] border20 overflow-hidden">
                <Image fill src={`/images/home/products/${i + 1}.jpg`} alt="product" className="scale-[1.01] border20 object-cover" />

              </div>
              <div className="flex flex-col items-end lg:pt-[2.08333333333vw] pt-[30px]">
                <div className="text-white ">
                  <h5 className="text28">{product.heading}</h5>
                  <p className="lg:h-[6.94444444444vw] lg:mt-[0.27777777777vw] lg:mb-[1.11111111111vw] mt-[10px] mb-[18px] sm:text16 text-[16px] leading-[24px]  text-[#FBFBFB]">
                    {product.text}
                  </p>
                  <div className="lg:h-[5.625vw]">
                    <span className="text18 f500 block">{arabic ? "انواع:" : "Types:"}</span>
                    <span className="text18 f500">{product.tag}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Products;
