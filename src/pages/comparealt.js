import React from "react";

const CA = () => {
  return (
    <>
      <div
        className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden
      xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)] xs:p-2 xs:text-white xs:min-h-screen xs:overflow-x-hidden"
      >
        <div
          className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen 
        xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)] xs:p-2 xs:text-white xs:min-h-screen xs:relative xs:left-[30px]"
        >
          <h1
            className="flex font-jakarta w-[864px] h-[53px] mb-10 text-[48px] whitespace-nowrap 
          text-center font-bold justify-center items-center mx-auto py-8
          xs:flex xs:font-jakarta xs:w-[330px] xs:h-[33px] xs:mb-5  xs:text-[30px] xs:leading-[33px] xs:whitespace-nowrap
           xs:text-center xs:font-bold xs:justify-center xs:items-center xs:mx-auto xs:py-4 xs:right-[20px]"
          >
            <p className="xs:relative xs:right-[18px]">Compare Alternatives</p>
          </h1>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[450px] left-[45px] rounded-[20px] 
          xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:min-h-auto xs:justify-center xs:items-center
          xs:top-[px] xs:w-[330px] xs:h-[447px] xs:left-[-20px] xs:rounded-[20px]"
          >
            <div
              className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-200px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-220px] xs:left-[70px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[145px] w-[414px] h-[80px] 
              text-[rgba(255,255,255,1)] font-jakarta font-bold text-2xl 
              xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-bold xs:text-xl"
              >
                Postiz-Compare <br className="hidden xs:block" /> Alternatives
              </h1>
            </div>
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-150px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[70px]"
            >
              <ul
                className="space-y-0 relative right-[-202px] top-[90px]
              xs:space-y-0 xs:relative xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Later
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow  text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Hootsuite
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow  text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Loomly
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow  text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Planoly
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Sendible
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Socialpilot
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Sprout social
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Iconosquare
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Postiz vs. Hopperhq
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* buffer section */}

          <div
            className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center min-h-[450px]
         items-center top-[-455px] w-[572px]  left-[622px] rounded-[20px]
         xs:flex xs:bg-[rgba(26,25,25,1)]  xs:relative xs:flex-col xs:max-h-screen xs:justify-center xs:min-h-[455px] 
         xs:w-[330px] xs:h-[447px] xs:top-[5px] xs:left-[-20px]"
          >
            <div
              className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-200px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:relative  xs:w-[330px] xs:h-[447px] xs:top-[-230px] xs:left-[30px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[145px] w-[414px] h-[80px] 
              text-[rgba(255,255,255,1)] font-jakarta font-bold text-2xl
              xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-bold xs:text-xl  "
              >
                Buffer-Compare <br className="hidden xs:block" /> Alternatives
              </h1>
            </div>
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-150px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-210px] xs:left-[70px]"
            >
              <ul
                className="space-y-0 relative right-[-202px] top-[90px]
              xs:space-y-0 xs:relative xs:font-medium xs:text-[20px] xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px]  ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Later
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow  text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Hootsuite
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow  text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Loomly
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow  text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Planoly
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Sendible
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Socialpilot
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Sprout social
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Iconosquare
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] ">
                  <span className="font-dm flex-grow text-xl font-bold text-[rgba(255,255,255,1)] whitespace-nowrap xs:font-medium xs:text-[20px]">
                    Buffer vs. Hopperhq
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
export default CA;
