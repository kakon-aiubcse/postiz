import React from "react";

const PC = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden">
        <header
          className="flex justify-center items-center text-center py-8"
          style={{
            fontFamily: "Plus Jakarta Sans",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "52.8px",
            textAlign: "center",
          }}
        >
          Platform Comparison
        </header>

        <div
          className="flex relative flex-col max-h-screen justify-center items-center top-[5px] w-[594px] h-[280px] left-[40px] rounded-[20px]"
          style={{
            background:
              "linear-gradient(299.04deg, #5608D5 13.62%, #24005E 83.78%)",
          }}
        >
          <div className="flex relative top-[5px] left-[-89px] w-[235px] h-[70px]">
            <img src="/Logo2.png" alt="Logo2" className="h-[62px] w-[192px]" />
          </div>
          <div className="flex relative top-[-5px] w-[100px] h-[44px] left-[-150px] ">
            <p className=" font-dm-sans text-[30px] font-semibold leading-[40.27px] text-left">
              Postiz
            </p>
          </div>
          <div className="flex relative top-[-2px] w-[454px] h-[116px] left-[26px] ">
            <p className=" font-dm-sans text-[20px] font-normal leading-[25.64px] text-[left]">
              Postiz helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        <div className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center items-center top-[-275px] w-[554px] h-[280px] left-[643px] rounded-[20px]">
          <div className="flex relative top-[-10px] left-[-89px] w-[235px] h-[70px]">
            <img src="/maskgroup.png" alt="maskgroup Logo" className="" />
          </div>
          <div className="flex relative top-[-10px] w-[100px] h-[44px] left-[-150px] ">
            <p className=" font-dm-sans text-[34px] font-semibold leading-[44.27px] text-left">
              Buffer
            </p>
          </div>
          <div className="flex relative top-[-10px] w-[454px] h-[116px] left-[26px] ">
            <p className=" font-dm-sans text-[22px] font-normal leading-[28.64px] text-[left]">
              Buffer helps you build an audience organically. We’re a
              values-driven company that provides affordable, intuitive,
              marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>
        <div className="flex bg-black p-5  rounded-[10px] relative flex-col max-h-screen justify-center items-center top-[-440px] w-[50px] h-[45px] left-[615px] ">
          <p className="text-xl font-dm-sans text-[28px] font-extrabold leading-[26.04px] text-center ">
            vs
          </p>
        </div>
      </div>
    </>
  );
};
export default PC;
