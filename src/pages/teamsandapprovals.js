import React from "react";

const TA = () => {
  return (
    <>
      <div
        className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-[rgba(255,255,255,1)] min-h-screen overflow-x-hidden
      xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)] xs:p-2 xs:text-[rgba(255,255,255,1)] xs:min-h-screen xs:overflow-x-hidden"
      >
        <div
          className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-[rgba(255,255,255,1)] min-h-screen 
        xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)]  xs:p-2 xs:text-[rgba(255,255,255,1)] xs:min-h-screen"
        >
          <h1
            className="flex font-jakarta w-[864px] h-[53px] mb-10 text-[48px] whitespace-nowrap text-center font-bold justify-center items-center mx-auto py-8
          xs:flex xs:font-jakarta xs:mb-10  xs:mx-auto xs:py-8"
          >
            <p
              className="xs:text-[30px] leading-[33px] xs:w-[333px] xs:h-[33px] xs:text-center xs:relative
            xs:justify-center xs:items-center xs:right-[260px]"
            >
              Teams & Approvals
            </p>
          </h1>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[350px] left-[45px] rounded-[20px] 
          xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:min-h-auto 
          xs:justify-center xs:items-center xs:top-[-20px] xs:w-[330px] xs:h-[330px] xs:left-[10px] xs:rounded-[20px]"
          >
            <div
              className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-170px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[287px] xs:h-[56px] xs:relative xs:top-[-170px] "
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[145px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-2xl 
              xs:flex-grow xs:relative xs:left-[40px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta xs:bold xs:text-[20px]"
              >
                Postiz-Teams & Approvals
              </h1>
            </div>

            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-150px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[]"
            >
              <ul
                className="space-y-2 relative right-[-202px] top-[90px]
              xs:space-y-2 xs:relative xs:left-[310px] xs:top-[150px]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Approvals Workflows
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Leave Comments on Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px]  w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Tag Team Members To Comments
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* buffer section */}

          <div
            className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center min-h-[350px]
         items-center top-[-355px] w-[572px]  left-[622px] rounded-[20px]
         xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:max-h-screen xs:justify-center xs:min-h-[335px]
         xs:items-center xs:top-[-5px] xs:w-[330px] xs:left-[10px] xs:rounded-[20px]"
          >
            <div
              className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-170px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[287px] xs:h-[56px] xs:relative xs:top-[-110px] xs:left-[-3px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[145px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] 
              font-jakarta font-bold text-2xl xs:flex-grow xs:relative xs:top-[145px] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)]
              "
              >
                Buffer-Teams &<br className="hidden xs:block" /> Approvals
              </h1>
            </div>

            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-150px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[330px] xs:h-[334px] xs:relative xs:top-[0px] xs:left-[-20px]"
            >
              <ul
                className="space-y-2 relative right-[-202px] top-[90px]
              xs:space-y-2 xs:relative xs:right-[-245px] xs:top-[5px]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Approvals Workflows
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/RedMark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/RedMark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Leave Comments on Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/RedMark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/RedMark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Tag Team Members To Comments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TA;
