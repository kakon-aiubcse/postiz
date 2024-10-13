import React from "react";

const GS = () => {
  return (
    <>
      <div
        className="flex items-center justify-center flex-col bg-[rgba(26,25,25,1)] p-2
       text-white h-[1080px] overflow-x-hidden
       xs:flex xs:items-center xs:justify-center xs:flex-col xs:bg-[rgba(26,25,25,1)] xs:p-2 
       xs:text-white xs:h-[552px] xs:overflow-x-hidden"
      >
        <div
          className="flex relative top-[-120px] w-[632px] h-[229px]
        xs:flex xs:relative xs:top-[40px] xs:w-[335px] xs:h-[250px] xs:overflow-x-hidden"
        >
          <span
            className="flex relative h-[66px] w-[632px]
          xs:flex xs:relative xs:h-[88px] xs:w-[335px] top-[0px] xs:left-[0px] xs:text-center"
          >
            <h1
              className="font-jakarta font-bold text-[60px] leading-[66px]
            xs:font-jakarta xs:font-bold xs:text-[44px] xs:leading-[40px]"
            >
              Ready to get started?
            </h1>
          </span>
          <span
            className="flex absolute left-[54px] h-[78px] top-[80px] w-[538px]
          xs:flex xs:absolute xs:left-[0px] xs:h-[69px] xs:top-[100px] xs:w-[330px]"
          >
            <h2
              className="font-dm font-[370] text-[20px] leading-[28.64px] text-center
            xs:font-dm xs:font-[400] xs:text-[18px] xs:leading-[23px] xs:text-center"
            >
              Elevate your social media planning and achieve new{" "}
              <br className="xs:hidden" /> heights of efficiency and
              effectiveness with Postiz.
            </h2>
          </span>
        </div>
        <button
          className="bg-white relative left-[-20px] top-[-180px] h-[55px] w-[191px] 
        pl-[32px] hover:bg-gray-200 text-black rounded-[30px] border border-gray-300 
        flex items-center justify-between
        xs:bg-white xs:relative xs:left-[0px] xs:top-[-20px] xs:h-[45px] xs:w-[] xs:pl-[155px] xs:hover:bg-gray-200 
        xs:text-black xs:rounded-[] xs:border xs:border-gray-300 xs:flex xs:items-center xs:justify-between"
        >
          <span
            className="flex items-center font-dm text-[19px] font-[500] leading-[24px] 
            xs:flex xs:items-center xs:font-dm xs:text-[] xs:font-[500] xs:leading-[20px] 
          xs:relative  xs:w-[89px] xs:h-[21px] xs:whitespace-nowrap xs:left-[-120px] "
          >
            Get Started
            <img
              src="/chevron-right-double.svg"
              alt="Dropdown Icon"
              className="w-[24px] h-[24px] ml-1 xs:w-[] xs:h-[] xs:ml-1"
            />
          </span>
        </button>
        <div
          className="flex relative w-[1050px] h-[345px] top-[-130px] overflow-hidden
        xs:flex xs:relative xs:w-[330px] xs:h-[98px] xs:top-[0px] xs:overflow-hidden"
        >
          <img
            src="/postiz.png"
            className="w-[1087px] h-[541px] xs:w-[330px] xs:h-[151px]"
          />
        </div>
      </div>
    </>
  );
};
export default GS;
