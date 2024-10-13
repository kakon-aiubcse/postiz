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
      <div
        className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden
      xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)] xs:p-2 xs:text-white xs:min-h-[1100px] xs:overflow-x-hidden"
      >
        {/* banner */}
        <div
          className="flex bg-[rgba(60,26,201,1)] top-5 relative w-[1150px] h-[270px] rounded-[20px] right-[-53px]
        xs:flex xs:bg-[rgba(60,26,201,1)] xs:top-5 xs:relative xs:w-[330px] xs:h-[372px] xs:rounded-[20px] xs:right-[-15px]"
        >
          <div
            className="flex relative top-[15px] left-[20px] h-[162px] w-[754px] gap-[32px]
          xs:flex xs:relative xs:top-[] xs:left-[]  xs:gap-[20px] "
          >
            <div
              className="h-[162px] w-[754px] text-white top-[50px] left-[20px] flex relative 
             xs:text-white xs:top-[] xs:left-[] xs:flex xs:relative"
            >
              <span
                className="w-[504px]  whitespace-nowrap h-[106px] relative font-jakarta font-bold text-4xl leading-[52.8px]
            xs:relative xs:font-jakarta xs:font-bold xs:text-[30px] xs:leading-[33px] xs:h-[99px] xs:w-[295] xs:top-[-20px] xs:left-[-20px]"
              >
                Choose
                <span
                  className="font-jakarta font-bold text-4xl leading-[52.8px] text-[rgba(244,113,255,1)] px-2
                xs:font-jakarta xs:font-bold xs:text-[30px] xs:leading-[33px]  xs:text-[rgba(244,113,255,1)] xs:px-2"
                >
                  Postiz
                </span>
                to <br className="hidden xs:block" /> enhance your{" "}
                <br className="block xs:hidden" />
                social <br className="hidden xs:block" /> media approach!
              </span>
              <img
                src="/Line1.svg"
                className=" bg-[rgba(60,26,201,1)] relative w-[259px] h-[8px] right-[435px] top-[41px]
                xs:bg-[rgba(60,26,201,1)] xs:relative xs:w-[102px] xs:h-[6px] xs:left-[-415px] xs:top-[10px]"
              />{" "}
              <div
                className="w-[780px] h-[4px] font-dm top-[120px] flex absolute font-[12px] text-[15.4px] leading-[24.8px]
              xs:w-[295px] xs:h-[69px] xs:font-dm xs:top-[105px] xs:flex xs:absolute xs:font-[20px] xs:right-[480px] xs:text-[19px] xs:leading-[23px]"
              >
                Easily design, schedule, and optimize captivating content for
                all your channels.
              </div>
            </div>
          </div>
          <img
            src="Doodle.png"
            className="w-[90px] h-[98px] mt-[95px] bg-[rgba(60,26,201,1)]
          xs:hidden"
          />
          <img
            src="Doodlemobile.png"
            className="w-[90px] h-[98px] mt-[95px] bg-[rgba(60,26,201,1)] hidden 
          xs:relative xs:flex  xs:left-[-540px] xs:w-[85px] xs:h-[60px] xs:mt-[275px] xs:bg-[rgba(60,26,201,1)]"
          />
          <button
            className="bg-white relative left-[20px] top-[105px] h-[55px] w-[191px] pl-[32px]
             hover:bg-gray-200 text-black rounded-[30px] border border-gray-300 flex items-center justify-between
             
             xs:bg-white xs:flex xs:relative xs:items-center xs:justify-between  xs:hover:bg-gray-200  
              xs:rounded-[30px] xs:left-[-770px] xs:pl-[155px] xs:text-black xs:top-[280px] xs:h-[45px]  "
          >
            <span
              className="flex items-center absolute right-[50px] font-dm 
              text-[19px] font-[500] leading-[24px] text-left 
              xs:flex xs:items-center xs:absolute xs:right-[15px] xs:font-dm xs:text-[19px] 
              xs:font-[500] xs:leading-[24px] xs:text-left "
            >
              Get Started
              <img
                src="/chevron-right-double.svg"
                alt="Dropdown Icon"
                className="w-[24px] h-[24px] ml-1 xs:w-[20px] xs:h-[20px]"
              />
            </span>
          </button>
        </div>
        {/* faq */}

        <div
          className="flex w-[750px] left-[48px] h-[325px] relative top-[120px]
        xs:flex xs:w-[330PX] xs:left-[-392px] xs:h-[196px] xs:relative xs:top-[285px]"
        >
          <div
            className="flex bg-[rgba(26,25,25,1)] relative  min-h-auto border border-[rgba(255,255,255,0.5)]
          justify-center items-center top-[-5px] w-[820px] h-[155px] left-[408px] rounded-[20px]
          xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative  xs:min-h-auto xs:border  xs:border-[rgba(255,255,255,0.5)]
          xs:justify-center xs:items-center xs:top-[-5px] xs:w-[820px] xs:h-[155px] xs:left-[408px] xs:rounded-[20px] "
          >
            <div onClick={toggleDropdown}>
              <div
                className="flex items-center justify-start w-full cursor-pointer py-2
              xs:flex xs:items-center xs:justify-start xs:w-full xs:cursor-pointer xs:py-2"
              >
                {/* Dropdown icon */}
                {isOpen ? (
                  <div className="relative left-[589px] top-[-20px] xs:relative xs:left-[px] xs:top-[]">
                    <FiChevronUp className="text-white xs:text-white" />{" "}
                  </div>
                ) : (
                  <div className="relative left-[536px] xs:relative xs:left-[]">
                    <FiChevronDown className="text-white xs:text-white" />{" "}
                  </div>
                )}

                {/* Title */}
                {isOpen ? (
                  <h1
                    className="text-white  relative right-[106px] top-[-20px] font-jakarta font-normal text-xl
                  xs:text-white xs:relative xs:right-[10px] xs:top-[-6px] xs:font-jakarta xs:font-[700] xs:text-[18px] xs:leading-[22px]"
                  >
                    How easy is it to switch <br className="hidden xs:block" />{" "}
                    from Buffer to Postiz?
                  </h1>
                ) : (
                  <h1
                    className="text-white  relative right-[157px] font-jakarta font-normal text-xl
                  xs:text-white xs:relative xs:right-[5px] xs:font-jakarta xs:font-bold xs:text-lg"
                  >
                    How easy is it to switch from Buffer to Postiz?
                  </h1>
                )}
              </div>

              {/* Second div: Description (toggle visibility based on state) */}
              {isOpen && (
                <div
                  className="flex relative right-[88px]
                xs:flex xs:relative xs:right-[-4px]"
                >
                  <span
                    className="font-dm font-light text-[rgba(209,209,209,1)] leading-relaxed
                    xs:w-[295px] 
                  xs:font-dm xs:font-[400] xs:text-[17.7px] xs:text-[rgba(209,209,209,1)] xs:leading-[21px]"
                  >
                    Very easy, and only takes minutes. Our social set setup is
                    quick & <br className="hidden xs:block" /> easy so{" "}
                    <br className="xs:hidden" />
                    you’ll be up and running in no time.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="bg-[rgba(26,25,25,1)]  relative w-[752px] h-[60px] top-[-45px]   border border-[rgba(255,255,255,0.5)]
          justify-center items-center  left-[456px] rounded-[20px]
          xs:bg-[rgba(26,25,25,1)] xs:relative xs:w-[330px] xs:h-[84px] xs:top-[255px] xs:border xs:border-[rgba(255,255,255,0.5)]
          xs:justify-center xs:items-center xs:left-[15px] xs:rounded-[20px]"
        >
          <div
            className="flex items-center justify-start w-full cursor-pointer py-2
          xs:flex xs:items-center xs:justify-start xs:w-full xs:cursor-pointer xs:py-2"
          >
            <div className="relative left-[700px] top-[10px] xs:relative xs:left-[] xs:top-[]">
              <FiChevronDown className="text-white xs:text-white" />{" "}
            </div>

            <h1
              className="text-white  relative right-[-6px] top-[10px] font-jakarta font-normal text-xl
            xs:text-white xs:relative xs:right-[] xs:top-[] xs:font-jakarta xs:font-bold xs:text-xl"
            >
              Can I use Postiz & Buffer at the same time safely?
            </h1>
          </div>
        </div>
        <div
          className="bg-[rgba(26,25,25,1)]  relative w-[752px] h-[80px] top-[-35px]  
           border border-[rgba(255,255,255,0.5)]
          justify-center items-center  left-[455px] rounded-[20px]
         xs:bg-[rgba(26,25,25,1)] xs:relative xs:w-[330px] xs:h-[128px] xs:top-[270px] xs:border xs:border-[rgba(255,255,255,0.5)]
          xs:justify-center xs:items-center xs:left-[15px] xs:rounded-[20px]"
        >
          <div
            className="flex items-center justify-start w-full cursor-pointer py-2 relative top-[-17px]
          xs:flex xs:items-center xs:justify-start xs:w-full xs:cursor-pointer xs:py-2 xs:relative xs:top-[]"
          >
            <div className="relative left-[700px] top-[20px] xs:relative xs:left-[] xs:top-[]">
              <FiChevronDown className="text-white xs:text-white" />{" "}
            </div>

            <h1
              className="text-white  relative right-[-8px] top-[18px] font-jakarta font-normal text-xl
            xs:text-white xs:relative xs:right-[] xs:top-[25px] xs:font-jakarta xs:font-bold xs:text-[20px] xs:leading-[22px]"
            >
              I'm paying for Buffer, but don't want to pay double <br />
              while I get setup - can I get a extended trial?
            </h1>
          </div>
        </div>
        <div
          className="flex bg-[rgba(14,14,14,1)] relative w-[304px] h-[250px] top-[-355px] left-[55px]
        xs:flex xs:bg-[rgba(14,14,14,1)] xs:relative xs:w-[260px] xs:h-[112px] xs:top-[-300px] xs:left-[]"
        >
          <span
            className="flex absolute w-[344px] text-white h-[159px] font-jakarta font-bold text-[48px] leading-[52.8px]
          xs:flex xs:absolute xs:w-[260px] xs:text-white xs:h-[66px] xs:font-jakarta xs:font-bold xs:text-[30px] xs:leading-[33px]
          xs:text-center"
          >
            {" "}
            Frequently asked questions
          </span>
          <img
            src="doodlefaq.png"
            className="flex relative w-[223px] h-[57px] top-[170px] xs:flex xs:relative xs:w-[129px] xs:h-[33px] xs:top-[85px] xs:left-[70px]"
          />
        </div>
      </div>
    </>
  );
};
export default FQ;
