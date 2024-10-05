import React from "react";

const TA = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden">
        <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen ">
          <h1 className="flex font-jakarta w-[864px] h-[53px] mb-10 text-[48px] whitespace-nowrap text-center font-bold justify-center items-center mx-auto py-8">
            <p className="">Teams & Approvals</p>
          </h1>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[350px] left-[45px] rounded-[20px] "
          >
            <div className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-170px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[145px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-2xl ">
                Postiz-Teams & Approvals
              </h1>
            </div>

            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-150px] left-[-45px]">
              <ul className="space-y-2 relative right-[-202px] top-[90px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Approvals Workflows
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Leave Comments on Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
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
         items-center top-[-355px] w-[572px]  left-[622px] rounded-[20px]"
          >
            <div className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-170px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[145px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-2xl ">
                Buffer-Teams & Approvals
              </h1>
            </div>

            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-150px] left-[-45px]">
              <ul className="space-y-2 relative right-[-202px] top-[90px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Approvals Workflows
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/RedMark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/RedMark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Leave Comments on Posts
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/RedMark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users To Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/RedMark.svg" className="w-[34px] h-[34px]" />
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
