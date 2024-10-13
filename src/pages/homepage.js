import React from "react";

const Homepage = () => {
  return (
    <>
      {/* first design */}
      <div className="bg-[rgba(14,14,14,1)] h-screen ">
        <div
          className="bg-[rgba(14,14,14,1)] text-white relative w-[307.99px] h-[307.99px] top-[110px] left-[100px] transform rotate-[46.78deg]
       xs:relative xs:hidden xs:w-[118.13px] xs:h-[118.13px] xs:top-[284.25px] xs:left-[-1.4px]  xs:rotate-[46.78deg]
        "
        >
          <img
            src="/vector.png"
            className=" relative w-[164px] h-[257.94px] top-[189.67px] left-[-49px] rotate-[-33deg]  
             xs:relative  xs:w-[118.13px] xs:h-[118.13px] xs:top-[84.25px] xs:left-[40px]  xs:rotate-[-8.78deg]"
            alt="Logo"
          />
        </div>
        <div className="xs:absolute xs:top-[200px] xs:right-[302px] ">
          <img
            src="/tornadomobile.svg"
            className=" 
            xs:block hidden  xs:w-[155.13px] xs:h-[209px]   "
            alt="Logo"
          />
        </div>
      </div>
      {/* body  */}
      <div
        className=" justify-center items-center flex flex-col mx-28 
        xs:flex-col xs-relative xs-w-[305px]"
        style={{
          background: "rgba(14, 14, 14, 1)",
          position: "relative",
          top: "-600px",
          left: "",
        }}
      >
        <div className="bg-[rgba(14,14,14,1)] mb-2 xs:relative  xs:w-[335px] xs:left-[10px] xs:top-[2px]">
          <p
            className="text-[rgba(255,255,255,1)] text-center w-[803.82px] h-[154px] font-jakarta font-[700] text-[70px] leading-[77px] 
            xs:h-[80px] xs:relative  xs:w-[305px] xs:font-jakarta xs:font-[400] xs:text-[40px] xs:leading-[44px]"
          >
            Postiz and Buffer comparison
          </p>
        </div>

        <div className="mb-2 relative w-[336.48px] h-[20.88px] top-0 left-[61px] xs:relative xs:mb-2 xs:w-[200px] xs:h-[14px] xs:top-[5px] xs:left-[22px]">
          <img src="/Line2.png" alt="Comparison Line" className="w-full" />
        </div>

        <div
          className="text-[rgba(255,255,255,1)] text-center mb-2 w-[771px] h-[58px]
          xs:w-[332px] xs:h-[92]"
        >
          <p
            className="font-dm font-normal text-[22px] leading-[28.64px] text-center 
          xs:text-[rgba(209,209,209,1)] xs:font-dm xs:font-normal xs:text-[18px] xs:leading-[23.64px] xs:text-center "
          >
            Postiz's superior scheduling flow, competitor tracking, and client
            management make it the best Buffer alternative.
          </p>
        </div>
        <div>
          <button
            className="bg-white h-[57px] w-[191px] pl-[32px] hover:bg-gray-200
           text-black rounded-[30px] border border-gray-300 flex items-center justify-between
            xs:relative xs:top-[45px] xs:h-[45px] xs:w-[155px]"
          >
            <span
              className="flex items-center font-dm text-[19px] font-medium leading-[24px] text-left 
             xs:h-[21px] xs:w-[89px] xs:font-dm xs:text-[16px] xs:font-medium xs:leading-[20px] xs:whitespace-nowrap xs:text-left"
            >
              Get Started
              <img
                src="/chevron-right-double.svg"
                alt="Dropdown Icon"
                className="w-[24px] h-[24px] xs:w-[20px] xs:h-[20px]  ml-1"
              />
            </span>
          </button>
        </div>
      </div>
      {/* last design  */}

      <img
        className="bg-[rgba(14,14,14,1) ] flex xs:hidden relative top-[-900px] left-[1142px]
         "
        src="/highlight26.png"
      />
      <div className="xs:absolute top-[12px]  xs:left-[354px] ">
        <img
          src="/highlight26mobile.svg"
          className=" 
            xs:block hidden xs:overflow-x-hidden  xs:w-[110px] xs:h-[55px]  "
          alt="Logo"
        />
      </div>
      <img
        className="bg-[rgba(14,14,14,1) ] xs:hidden relative top-[-600px] p-10 mb-0 overflow-hidden"
        src="/promo.svg"
      />
      <div className="xs:absolute top-[402px]  xs:left-[20px] xs:w-[335px] xs:h-[372px] ">
        <img
          src="/promomobile.svg"
          className=" 
            xs:block hidden xs:overflow-x-hidden   "
          alt="Logo"
        />
      </div>
    </>
  );
};

export default Homepage;
