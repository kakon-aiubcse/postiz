import React from "react";

const PC = () => {
  return (
    <>
      <div
        className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-[rgba(255,255,255,1)] min-h-screen 
      overflow-x-hidden "
      >
        <header
          className="flex justify-center items-center  py-8 font-jakarta text-[48px] font-bold leading-[52.8px] text-center
         xs:relative xs:left-[12px] xs:h-[33px] xs:w-[335px] xs:font-jakarta xs:text-[30px] xs:font-bold xs:leading-[33px] xs:text-center
"
        >
          Platform Comparison
        </header>

        <div
          className="flex relative flex-col max-h-screen justify-center items-center
           top-[5px] w-[594px] h-[280px] left-[40px] rounded-[20px]
           xs:flex xs:relative xs:flex-col xs:max-h-screen xs:justify-center xs:items-center
           xs:top-[5px] xs:w-[335px] xs:h-[300px] xs:left-[12px] xs:rounded-[20px]"
          style={{
            background:
              "linear-gradient(299.04deg, #5608D5 13.62%, #24005E 83.78%)",
          }}
        >
          <div
            className="flex relative top-[5px] left-[-89px] w-[235px] h-[70px]
          xs:flex xs:relative xs:top-[-100px] xs:left-[-65px] xs:w-[163px] xs:h-[5px]
"
          >
            <img
              src="/Logo2.png"
              alt="Logo2"
              className="h-[62px] w-[192px] xs:h-[40px] xs:w-[140px]"
            />
          </div>
          <div
            className="flex relative top-[-5px] w-[100px] h-[44px] left-[-150px]
          xs:flex xs:relative xs:top-[-45px] xs:w-[50px] xs:h-[4px] xs:left-[-118px] "
          >
            <p
              className=" font-dm-sans text-[30px] font-semibold leading-[40.27px] text-left
            xs:font-dm xs:text-[22px] xs:font-[500] xs:leading-[28px] xs:text-left"
            >
              Postiz
            </p>
          </div>
          <div
            className="flex relative top-[-2px] w-[454px] h-[116px] left-[26px] 
           xs:flex xs:relative xs:top-[5px] xs:w-[287px] xs:h-[4px] xs:left-[1px]"
          >
            <p
              className=" font-dm-sans text-[20px] font-normal leading-[25.64px] text-left
            xs:text-[rgba(209,209,209,1)] xs:font-dm xs:text-[18px] xs:font-[400] xs:leading-[23px] xs:text-left"
            >
              Postiz helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        <div
          className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center items-center 
        top-[-275px] w-[554px] h-[280px] left-[643px] rounded-[20px]
        xs:flex xs:relative xs:flex-col xs:max-h-screen xs:justify-center xs:items-center
           xs:top-[15px] xs:w-[335px] xs:h-[300px] xs:left-[12px] xs:rounded-[20px] 
"
        >
          <div
            className="flex relative top-[-10px] left-[-89px] w-[235px] h-[70px]
          xs:flex xs:relative xs:top-[-110px] xs:left-[-65px] xs:w-[163px] xs:h-[5px]"
          >
            <img
              src="/maskgroup.png"
              alt="maskgroup Logo"
              className="xs:h-[44px] xs:w-[140px]"
            />
          </div>
          <div
            className="flex relative top-[-15px] w-[90px] h-[32px] left-[-156px] 
          xs:flex xs:relative xs:top-[-55px] xs:w-[50px] xs:h-[4px] xs:left-[-118px]"
          >
            <p
              className=" font-dm-sans text-[30px] font-semibold leading-[44.27px] text-left
            xs:font-dm xs:text-[22px] xs:font-[500] xs:leading-[28px] xs:text-left"
            >
              Buffer
            </p>
          </div>
          <div
            className="flex relative top-[1px] w-[454px] h-[116px] left-[26px] 
          xs:flex xs:relative xs:top-[-5px] xs:w-[287px] xs:h-[4px] xs:left-[1px]"
          >
            <p
              className=" font-dm-sans text-[22px] font-normal leading-[28.64px] text-[left]
             xs:text-[rgba(209,209,209,1)] xs:font-dm xs:text-[18px] xs:font-[400] xs:leading-[23px] xs:text-left"
            >
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        <div
          className="flex bg-black p-5  rounded-[10px] relative flex-col max-h-screen 
        justify-center items-center top-[-440px] w-[50px] h-[45px] left-[615px] 

        xs:flex xs:bg-black xs:p-[7px] xs:rounded-[8px] xs:relative xs:flex-col xs:max-h-screen 
        xs:justify-center xs:items-center xs:top-[-302px] xs:w-[32px] xs:h-[32px] xs:left-[160px]
        "
        >
          <p
            className="text-xl font-dm text-[28px] font-extrabold leading-[26.04px] text-center
          xs:text-[12px] xs:font-dm xs:font-extrabold xs:leading-[18.62px] xs:text-center
          "
          >
            vs
          </p>
        </div>
      </div>
    </>
  );
};
export default PC;
