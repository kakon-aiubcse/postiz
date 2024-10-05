import React from "react";
import Footer from "./component/footer";

const GS = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-[rgba(26,25,25,1)] p-2 text-white h-[1080px] overflow-x-hidden">
        <div className="flex relative top-[-120px] w-[632px] h-[229px]">
          <span className="flex relative h-[66px] w-[632px]">
            <h1 className="font-jakarta font-bold text-[60px] leading-[66px]">
              Ready to get started?
            </h1>
          </span>
          <span className="flex absolute left-[54px] h-[78px] top-[80px] w-[538px]">
            <h2 className="font-dm font-[370] text-[20px] leading-[28.64px] text-center">
              Elevate your social media planning and achieve new <br /> heights
              of efficiency and effectiveness with Postiz.
            </h2>
          </span>
        </div>
        <button className="bg-white relative left-[-20px] top-[-180px] h-[55px] w-[191px] pl-[32px] hover:bg-gray-200 text-black rounded-[30px] border border-gray-300 flex items-center justify-between">
          <span
            className="flex items-center"
            style={{
              fontFamily: "DM Sans",
              fontSize: "19px",
              fontWeight: 500,
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            Get Started
            <img
              src="/chevron-right-double.svg"
              alt="Dropdown Icon"
              className="w-[24px] h-[24px] ml-1"
            />
          </span>
        </button>
        <div className="flex relative w-[1050px] h-[345px] top-[-130px] overflow-hidden">
          <img src="/postiz.png" className="w-[1087px] h-[541px]" />
        </div>
      </div>
    </>
  );
};
export default GS;
