import React from "react";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden">
        {/* banner */}
        <div className="flex bg-[rgba(60,26,201,1)] top-5 relative w-[1150px] h-[270px] rounded-[20px] right-[-53px]">
          <div className="flex relative top-[15px] left-[20px] h-[162px] w-[754px] gap-[32px] ">
            <div className="h-[162px] w-[754px] text-white top-[50px] left-[20px] flex relative ">
              <span className="w-[504px]  whitespace-nowrap h-[106px] relative font-jakarta font-bold text-4xl leading-[52.8px]">
                Choose
                <span className="font-jakarta font-bold text-4xl leading-[52.8px] text-[rgba(244,113,255,1)] px-2">
                  Postiz
                </span>
                to enhance your <br />
                social media approach!
              </span>
              <img
                src="/Line1.svg"
                className=" bg-[rgba(60,26,201,1)] relative w-[259px] h-[8px] right-[435px] top-[41px]"
              />{" "}
              <div className="w-[780px] h-[4px] font-dm top-[120px] flex absolute font-[12px] text-[15.4px] leading-[24.8px]">
                Easily design, schedule, and optimize captivating content for
                all your channels.
              </div>
            </div>
          </div>
          <img
            src="Doodle.png"
            className="w-[90px] h-[98px] mt-[95px] bg-[rgba(60,26,201,1)]"
          />
          <button className="bg-white relative left-[20px] top-[105px] h-[55px] w-[191px] pl-[32px] hover:bg-gray-200 text-black rounded-[30px] border border-gray-300 flex items-center justify-between">
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
        </div>
        {/* faq */}

        <div className="flex w-[750px] left-[48px] h-[325px] relative top-[120px]">
          <div
            className="flex bg-[rgba(26,25,25,1)] relative  min-h-auto border border-[rgba(255,255,255,0.5)]
          justify-center items-center top-[-5px] w-[820px] h-[155px] left-[408px] rounded-[20px] "
          >
            <div onClick={toggleDropdown}>
              <div className="flex items-center justify-start w-full cursor-pointer py-2">
                {/* Dropdown icon */}
                {isOpen ? (
                  <div className="relative left-[589px] top-[-20px]">
                    <FiChevronUp className="text-white" />{" "}
                  </div>
                ) : (
                  <div className="relative left-[536px]">
                    <FiChevronDown className="text-white" />{" "}
                  </div>
                )}

                {/* Title */}
                {isOpen ? (
                  <h1 className="text-white  relative right-[106px] top-[-20px] font-jakarta font-normal text-xl">
                    How easy is it to switch from Buffer to Postiz?
                  </h1>
                ) : (
                  <h1 className="text-white  relative right-[157px] font-jakarta font-normal text-xl">
                    How easy is it to switch from Buffer to Postiz?
                  </h1>
                )}
              </div>

              {/* Second div: Description (toggle visibility based on state) */}
              {isOpen && (
                <div className="flex relative right-[88px]">
                  <span className="font-dm font-light text-[rgba(209,209,209,1)] leading-relaxed">
                    Very easy, and only takes minutes. Our social set setup is
                    quick & easy so <br />
                    you’ll be up and running in no time.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="bg-[rgba(26,25,25,1)]  relative w-[752px] h-[60px] top-[-45px]   border border-[rgba(255,255,255,0.5)]
          justify-center items-center  left-[456px] rounded-[20px]"
        >
          <div className="flex items-center justify-start w-full cursor-pointer py-2">
            <div className="relative left-[700px] top-[10px]">
              <FiChevronDown className="text-white" />{" "}
            </div>

            <h1 className="text-white  relative right-[-6px] top-[10px] font-jakarta font-normal text-xl">
              Can I use Postiz & Buffer at the same time safely?
            </h1>
          </div>
        </div>
        <div
          className="bg-[rgba(26,25,25,1)]  relative w-[752px] h-[80px] top-[-35px]  
           border border-[rgba(255,255,255,0.5)]
          justify-center items-center  left-[455px] rounded-[20px]"
        >
          <div className="flex items-center justify-start w-full cursor-pointer py-2 relative top-[-17px]">
            <div className="relative left-[700px] top-[20px]">
              <FiChevronDown className="text-white" />{" "}
            </div>

            <h1 className="text-white  relative right-[-8px] top-[18px] font-jakarta font-normal text-xl">
              I'm paying for Buffer, but don't want to pay double <br />
              while I get setup - can I get a extended trial?
            </h1>
          </div>
        </div>
        <div className="flex bg-[rgba(14,14,14,1)] relative w-[304px] h-[250px] top-[-355px] left-[55px]">
          <span className="flex absolute w-[344px] text-white h-[159px] font-jakarta font-bold text-[48px] leading-[52.8px] ">
            {" "}
            Frequently asked questions
          </span>
          <img
            src="doodlefaq.png"
            className="flex relative w-[223px] h-[57px] top-[170px]"
          />
        </div>
      </div>
    </>
  );
};
export default FQ;
