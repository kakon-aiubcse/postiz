import React from "react";

const PP = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-[rgba(255,255,255,1)] min-h-screen overflow-x-hidden">
        <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-[rgba(255,255,255,1)] min-h-screen ">
          <header className="flex font-jakarta text-[48px] font-bold justify-center items-center text-center py-8">
            <p className="  xs:relative xs:left-[12px] xs:h-[33px] xs:w-[335px] xs:font-jakarta xs:text-[30px] xs:font-bold xs:leading-[33px] xs:text-center">
              Pricing & Plans{" "}
            </p>
          </header>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[1355px] left-[44px] rounded-[20px] border border-[rgba(255,255,255,0.05)]
          
          xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:min-h-auto 
          xs:justify-center xs:items-center xs:top-[-5px] xs:w-[345px] xs:h-[1326px] xs:left-[0px] xs:rounded-[20px]

          "
          >
            {/* topnav */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[8px] left-[-45px] 
            xs:flex xs:items-center xs:justify-between xs:w-[287px] xs:h-[134px] xs:relative xs:top-[5px] xs:left-[-1px]
            "
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[-82px] w-[300px] h-[80px]
               text-[rgba(255,255,255,1)] font-jakarta font-bold text-3xl 
               xs:flex-grow xs:whitespace-nowrap xs:relative xs:top-[-82px] xs:w-[300px] xs:h-[80px] 
             xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-bold xs:text-3xl
"
              >
                Postiz Pricing
              </h1>
              <span
                className="flex items-center relative top-[-30px] w-[300px] h-[80px] left-[-200px] space-x-2
              xs:flex xs:items-center xs:relative xs:top-[-45px] xs:w-[370px] xs:h-[80px] xs:left-[-200px] xs:space-x-2
"
              >
                <img
                  src="/Mark.svg"
                  className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                />
                <span
                  className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap
                xs:h-[46px] xs:relative xs:top-[10px] xs:w-[251px] xs:font-jdm xs:font-[400] xs:text-[18px] xs:leading-[24px] xs:whitespace-pre-line
"
                >
                  14 day free trial, credit card required
                </span>
              </span>
              <span
                className="flex items-center relative top-[25px] w-[300px] h-[80px] left-[-465px] space-x-2
               xs:flex xs:items-center xs:relative xs:top-[35px] xs:w-[370px] xs:h-[80px] xs:left-[-460px] xs:space-x-2"
              >
                <img
                  src="/Mark.svg"
                  className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                />
                <span
                  className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap
                 xs:h-[46px] xs:relative xs:top-[10px]  xs:w-[251px] xs:font-jdm xs:font-[400] xs:text-[18px] xs:leading-[24px] "
                >
                  10% annual discount
                </span>
              </span>
            </div>
            {/* boxes postliz */}
            <div
              className=" top-[30px] flex-col flex flex-wrap gap-4 mx-4 relative
            xs:top-[10px] xs:flex-col xs:flex xs:flex-wrap xs:gap-4 xs:mx-4 xs:relative xs:right-[252px] 
"
            >
              <div
                className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] 
              rounded-2xl w-[80%] md:w-[500px]  h-[146px] text-[rgba(255,255,255,1)]
              xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
              xs:rounded-2xl  xs:w-[287px]  xs:left-[250px]
"
              >
                <div
                  className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)]
                xs:flex xs:relative xs:p-[19px] xs:rounded-lg xs: xs:w-auto xs:text-[rgba(255,255,255,1)]
"
                >
                  <h2
                    className="text-2xl font-bold mb-4
                  xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center
"
                  >
                    Standart
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px]
                  xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] 
                    font-jakarta font-semibold text-4xl 
                    xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-68px] xs:top-[19px]
                     xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]
"
                    >
                      $29
                    </span>
                    <span
                      className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-90px] text-lg ml-1  font-jakarta
                    xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-80px] xs:text-lg xs:ml-1 xs:font-jakarta
                    xs:h[20px] xs:w[40px]
"
                    >
                      /mo
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2">
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]
                    xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[114px] xs:h-[23px] xs:right-[175px] xs:top-[70px] xs:whitespace-nowrap 
"
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]
                    xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-288px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: 1
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
 xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
xs:rounded-2xl  xs:w-[287px]  xs:left-[250px] xs:overflow-x-hidden"
              >
                <div
                  className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)] xs:flex xs:relative xs:p-[19px] xs:rounded-lg xs: xs:w-auto xs:text-[rgba(255,255,255,1)]
"
                >
                  <h2
                    className="text-2xl font-bold mb-4 
    xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center"
                  >
                    Team
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px]
     xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[74px] w-[44px] left-[-62px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl
      xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-44px] xs:top-[19px]
      xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x] "
                    >
                      $39
                    </span>
                    <span
                      className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-50px] text-lg ml-1
        xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-55px] xs:text-lg xs:ml-1 xs:font-jakarta
    xs:h[20px] xs:w[40px]"
                    >
                      /mo
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2">
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold left-[35px] text-xl w-[180px] h-[26px]
        xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
     leading-[23px] xs:w-[114px] xs:h-[23px] xs:left-[-150px] xs:top-[70px] xs:whitespace-nowrap "
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-145px] font-dm font-semibold text-xl w-[180px] h-[26px]
       xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-264px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: unlimited
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] 
  rounded-2xl w-[80%] md:w-[500px]  h-[146px]
  xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
xs:rounded-2xl  xs:w-[287px]  xs:left-[250px] xs:overflow-x-hidden
  "
              >
                <div
                  className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)]
    xs:flex xs:relative xs:p-[19px] xs:rounded-lg xs: xs:w-auto xs:text-[rgba(255,255,255,1)]"
                >
                  <h2 className="text-2xl font-bold mb-4  xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center">
                    Pro
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px]
        xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[74px] w-[44px] left-[-41px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl
        xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-31px] xs:top-[19px]
      xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]  "
                    >
                      $49
                    </span>
                    <span
                      className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-30px] text-lg ml-1
         xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-42px] xs:text-lg xs:ml-1 xs:font-jakarta
    xs:h[20px] xs:w[40px]"
                    >
                      /mo
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2">
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl left-[60px] w-[180px] h-[26px]
        xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
     leading-[23px] xs:w-[114px] xs:h-[23px] xs:left-[-137px] xs:top-[70px] xs:whitespace-nowrap "
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-120px] font-dm font-semibold text-xl w-[180px] h-[26px]
        xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-251px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: unlimited
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl 
w-[80%] md:w-[500px]  h-[146px]
s:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
xs:rounded-2xl  xs:w-[287px]  xs:left-[250px] xs:overflow-x-hidden"
              >
                <div
                  className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)]
   xs:flex xs:relative xs:p-[19px] xs:rounded-lg xs: xs:w-auto xs:text-[rgba(255,255,255,1)]"
                >
                  <h2
                    className="text-2xl font-bold mb-4
      xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center"
                  >
                    Ultimate
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px]
     xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl 
       xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-68px] xs:top-[19px]
      xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x] "
                    >
                      $99
                    </span>
                    <span
                      className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-90px] text-lg ml-1
       xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-80px] xs:text-lg xs:ml-1 xs:font-jakarta
    xs:h[20px] xs:w[40px]"
                    >
                      /mo
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2">
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]
       xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
     leading-[23px] xs:w-[114px] xs:h-[23px] xs:right-[175px] xs:top-[70px] xs:whitespace-nowrap "
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]
      xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-288px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: unlimited
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex relative  rounded-2xl  w-[80%] md:w-[362px]  h-[28px]
              xs:flex xs:relative  xs:bg-[rgba(36,35,35,1)] xs:h-[50px]
                xs:w-[287px]  xs:left-[250px] xs:overflow-hidden"
              >
                <div
                  className="flex relative  rounded-2xl w-[80%]  md:w-[362px]  h-[28px] mb-10 xs:mb-10
                xs:flex xs:bg-[rgba(26,25,25,1)] xs:w-[287px] xs:h-[4px] "
                >
                  <div className=" xs:flex xs:bg-[rgba(26,25,25,1)] flex relative p-[30px] rounded-lg  w-auto text-[rgba(255,255,255,1)]">
                    <h1
                      className="flex-grow whitespace-nowrap relative left-[-22px] top-[-22px] w-[362px] h-[28px]
                     text-[rgba(255,255,255,1)] font-jakarta font-bold text-base pb-10 
                     xs:flex xs:bg-[rgba(26,25,25,1)] xs:font-jakarta xs:font-[700] xs:text-[18px] xs:leading-[23px] xs:w-[287px] xs:h-[50px] xs:whitespace-pre-line "
                    >
                      On-premise services & Enterprise
                    </h1>
                  </div>
                </div>
              </div>

              <div
                className="bg-cb flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
                xs:bg-cb xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
                xs:rounded-2xl  xs:w-[287px]  xs:left-[250px] xs:overflow-x-hidden"
              >
                <div
                  className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)]
                  xs:flex xs:relative xs:p-[19px] xs:rounded-lg xs:shadow-lg xs:w-auto xs:text-[rgba(255,255,255,1)]"
                >
                  <h2
                    className="text-base font-medium h-[24px] w-[240px] mb-4
                    xs:relative xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center xs:right-[25px]"
                  >
                    Self Service Installation
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px] 
                   xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[74px] w-[44px] left-[-240px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl 
                      xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:right-[57px] xs:top-[20px]
                     xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]"
                    >
                      $2000
                    </span>
                    <span
                      className=" flex whitespace-nowrap relative text-[rgba(255,255,255,1)] top-[59px] left-[-190px] h-[24px] w-[105px] text-lg ml-1
                      xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-220px] xs:text-lg xs:ml-1 xs:font-jakarta
   xs:h[20px] xs:w[40px]"
                    >
                      /one time
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2 xs:relative xs:left-[-170px]">
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold left-[-140px] text-xl w-[180px] h-[26px]
                      xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
    leading-[23px] xs:w-[114px] xs:h-[23px] xs:left-[-175px] xs:top-[72px] xs:whitespace-nowrap"
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-319px] font-dm font-semibold text-xl w-[180px] h-[26px]
                       xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
    leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-459px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: unlimited
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="bg-cp flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
                xs:bg-cp xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
                xs:rounded-2xl  xs:w-[287px]  xs:left-[250px] xs:overflow-x-hidden"
              >
                <div
                  className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)]
                xs:flex xs:relative xs:p-[19px] xs:rounded-lg xs:shadow-lg xs:w-auto xs:text-[rgba(255,255,255,1)]"
                >
                  <h2
                    className="text-2xl font-bold mb-4
                 xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center"
                  >
                    Enterprise
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px]
                   xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[154px] w-[44px] left-[-117px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl 
                  xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-83px] xs:top-[19px]
                xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]"
                    >
                      Custom
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2 xs:relative xs:right-[178px]">
                    <span
                      className="text-[rgba(255,255,255,1)] left-[-10px] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]
                      xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                      leading-[23px] xs:w-[114px] xs:h-[23px]  xs:top-[70px] xs:whitespace-nowrap"
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-190px] font-dm font-semibold text-xl w-[180px] h-[26px]
                      xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                      leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-302px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: unlimited
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* buffer section */}

          <div
            className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center min-h-[1355px]
         items-center top-[-1360px] w-[572px]  left-[622px] rounded-[20px] border border-[rgba(255,255,255,0.05)]
             xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:min-h-[900px] 
          xs:justify-center xs:items-center xs:top-[2px] xs:w-[345px] xs:h-[900px] xs:left-[0px] xs:rounded-[20px]"
          >
            {/* top nav */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-12px] left-[-45px]
 xs:flex xs:items-center xs:justify-between xs:w-[287px] xs:h-[134px] xs:relative xs:top-[15px] xs:left-[-1px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[-245px] w-[300px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-3xl 
               xs:flex-grow xs:whitespace-nowrap xs:relative xs:top-[-82px] xs:w-[300px] xs:h-[80px] 
             xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-bold xs:text-3xl"
              >
                Buffer Pricing
              </h1>
              <span
                className="flex items-center relative top-[-190px] w-[300px] h-[80px] left-[-200px] space-x-2
              xs:flex xs:items-center xs:relative xs:top-[-45px] xs:w-[370px] xs:h-[80px] xs:left-[-200px] xs:space-x-2"
              >
                <img
                  src="/Mark.svg"
                  className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                />
                <span
                  className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap
                 xs:h-[46px] xs:relative xs:top-[10px] xs:w-[251px] xs:font-jdm xs:font-[400] xs:text-[18px] xs:leading-[24px] xs:whitespace-pre-line"
                >
                  14 day free trial, credit card required
                </span>
              </span>
              <span
                className="flex items-center relative top-[-130px] w-[300px] h-[80px] left-[-465px] space-x-2
              xs:flex xs:items-center xs:relative xs:top-[20px] xs:w-[370px] xs:h-[80px] xs:left-[-460px] xs:space-x-2"
              >
                <img
                  src="/Mark.svg"
                  className="w-[34px] h-[34px] xs:w-[24px] xs:h-[24px]"
                />
                <span
                  className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap
                xs:h-[46px] xs:relative xs:top-[10px]  xs:w-[251px] xs:font-jdm xs:font-[400] xs:text-[18px] xs:leading-[24px] "
                >
                  10% annual discount
                </span>
              </span>
            </div>
            {/* boxes */}
            <div
              className=" top-[-155px] flex-col flex flex-wrap gap-4 mx-4 relative
             xs:top-[0px] xs:flex-col xs:flex xs:flex-wrap xs:gap-4 xs:relative xs:right-[2px] xs:overflow-hidden"
            >
              <div
                className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]

              xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
              xs:rounded-2xl  xs:w-[287px]  xs:left-[0px] xs:overflow-x-hidden"
              >
                <div
                  className=" flex relative p-[30px] rounded-lg w-auto text-[rgba(255,255,255,1)]
                xs:flex xs:relative xs:p-[19px] xs:rounded-lg  xs:w-auto xs:text-[rgba(255,255,255,1)] xs:overflow-x-hidden"
                >
                  <h2
                    className="text-2xl font-bold mb-4 
                  xs:relative xs:top-[-5px]  xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center"
                  >
                    Free
                  </h2>
                  <div
                    className="flex relative w-[130px] h-[44px] gap-[8px]
                    xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                  >
                    <span
                      className=" flex relative h-[74px] w-[44px] left-[-50px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl 
                     xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-39px] xs:top-[19px]
                     xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]"
                    >
                      $0
                    </span>
                    <span
                      className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-63px] text-lg ml-1
                     xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-70px] xs:text-lg xs:ml-1 xs:font-jakarta
                    xs:h[20px] xs:w[40px]"
                    >
                      /mo
                    </span>
                  </div>
                  <div className="mb-2 xs:mb-2 xs:relative  xs:right-[206px]">
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold left-[60px] text-xl w-[180px] h-[26px]
                     xs:text-[rgba(255,255,255,1)] xs:flex xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[114px] xs:h-[23px]  xs:top-[70px] xs:whitespace-nowrap "
                    >
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span
                      className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-119px] font-dm font-semibold text-xl w-[180px] h-[26px]
                     xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-260px] xs:top-[90px] xs:whitespace-nowrap"
                    >
                      Users: unlimited
                    </span>
                  </div>
                </div>
              </div>

              <div
                className=" relative border  border-[rgba(255,255,255,0.05)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
             xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
              xs:rounded-2xl  xs:w-[287px]  xs:left-[0px] xs:overflow-hidden"
              >
                <div
                  className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
xs:flex xs:relative xs:p-[19px] xs:rounded-lg  xs:w-auto xs:text-[rgba(255,255,255,1)] xs:overflow-hidden"
                >
                  <div className=" flex relative p-[30px] rounded-lg   w-auto text-[rgba(255,255,255,1)]">
                    <h2
                      className="text-2xl font-bold mb-4
      xs:relative xs:top-[-40px] xs:left-[-30px] xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center"
                    >
                      Essentials
                    </h2>
                    <div
                      className="flex relative w-[130px] h-[44px] gap-[8px]
      xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]"
                    >
                      <span
                        className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl 
       xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-112px] xs:top-[-15px]
                     xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]"
                      >
                        $6
                      </span>
                      <span
                        className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-100px] text-lg ml-1
        xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[-4px] xs:left-[-145px] xs:text-lg xs:ml-1 xs:font-jakarta
                    xs:h[20px] xs:w[40px]"
                      >
                        /mo
                      </span>
                    </div>
                    <div className="mb-2 xs:relative  xs:right-[206px]">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]
      xs:text-[rgba(255,255,255,1)] xs:flex xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[114px] xs:h-[23px]  xs:top-[40px] xs:left-[-10px] xs:whitespace-nowrap"
                      >
                        Social sets: 1
                      </span>
                    </div>
                    <div className="mb-2 xs:mb-2 xs:relative xs:left-[-40px] xs:top-[18px]">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative top-[20px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]
      xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px]  xs:whitespace-nowrap"
                      >
                        (Additional:6$)
                      </span>
                    </div>
                    <div className="xs:relative xs:left-[-30px] xs:top-[0px]">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative top-[60px] left-[-361px] font-dm font-semibold text-xl w-[180px] h-[26px]
      xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px]  xs:whitespace-nowrap"
                      >
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className=" bg-[rgba(36,35,35,1)] relative border  border-[rgba(255,255,255,0.05)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
              xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
              xs:rounded-2xl  xs:w-[287px]  xs:left-[0px] xs:overflow-hidden"
              >
                <div
                  className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]
                  xs:flex xs:relative xs:p-[19px] xs:rounded-lg  xs:w-auto xs:text-[rgba(255,255,255,1)] xs:overflow-hidden"
                >
                  <div className=" flex relative p-[30px] rounded-lg  xs:relative xs:top-[-40px]  w-auto text-[rgba(255,255,255,1)]">
                    <h2
                      className="text-2xl font-bold mb-4 
                    xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center xs:relative xs:left-[-27px]"
                    >
                      Team
                    </h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px] xs:flex  xs:relative  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]">
                      <span
                        className=" flex relative h-[74px] w-[44px] left-[-60px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl
xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-70px] xs:top-[22px]
                     xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x] "
                      >
                        $12
                      </span>
                      <span
                        className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-40px] text-lg ml-1
 xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[33px] xs:left-[-80px] xs:text-lg xs:ml-1 xs:font-jakarta
                    xs:h[20px] xs:w[40px]"
                      >
                        /mo
                      </span>
                    </div>
                    <div className="mb-2 xs:relative xs:top-[80px]  xs:right-[220px]">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative left-[46px] font-dm font-semibold text-xl w-[180px] h-[26px]
 xs:text-[rgba(255,255,255,1)] xs:flex xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[114px] xs:h-[23px]  xs:whitespace-nowrap"
                      >
                        Social sets: 1
                      </span>
                    </div>
                    <div className="mb-2 xs:relative xs:top-[58px] xs:right-[40px]">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative top-[20px] left-[-135px] font-dm font-semibold text-xl w-[180px] h-[26px]
xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px] xs:whitespace-nowrap"
                      >
                        (Additional:12$)
                      </span>
                    </div>
                    <div>
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative top-[60px] left-[-313px] font-dm font-semibold text-xl w-[180px] h-[26px]
 xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-348px] xs:top-[100px] xs:whitespace-nowrap"
                      >
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="  relative border  border-[rgba(255,255,255,0.05)] rounded-2xl w-[80%] md:w-[500px]  h-[146px] 
xs:flex xs:relative xs:border xs:border-[rgba(255,255,255,0.05)] xs:bg-[rgba(36,35,35,1)] 
xs:rounded-2xl  xs:w-[287px]  xs:left-[0px] xs:top-[-5px] xs:overflow-X-hidden"
              >
                <div
                  className="flex relative border  border-[rgba(255,255,255,0.05)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px] 
xs:flex xs:relative xs:p-[19px]  xs:rounded-lg  xs:w-auto xs:text-[rgba(255,255,255,1)] xs:overflow-hidden"
                >
                  <div className=" flex relative p-[30px] rounded-lg xs:relative xs:top-[-35px] xs:right-[20px] w-auto text-[rgba(255,255,255,1)]">
                    <h2 className="text-2xl font-bold mb-4  xs:relative xs:top-[-5px] xs:left-[-1px] xs:font-jakarta xs:font-medium xs:text-[18px] xs:leading-[19.8px] xs:text-center">
                      Agency
                    </h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px] xs:flex  xs:relative xs:left-[-25px]  xs:w-[107px]  xs:h-[35px]  xs:gap-[8px]">
                      <span
                        className=" flex relative h-[74px] w-[44px] left-[-85px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl  xs:flex xs:relative xs:h-[65px] xs:w-[70px] xs:left-[-39px] xs:top-[19px]
                     xs:text-[rgba(255,255,255,1)] xs:font-jakarta xs:font-semibold xs:text-[32px] leading-[40x]"
                      >
                        $120
                      </span>
                      <span
                        className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-55px] text-lg ml-1 
                        xs:flex xs:relative xs:text-[rgba(255,255,255,1)] xs:top-[30px] xs:left-[-40px] xs:text-lg xs:ml-1 xs:font-jakarta
                    xs:h[20px] xs:w[40px] "
                      >
                        /mo
                      </span>
                    </div>
                    <div className="mb-2 xs:relative  xs:right-[186px]">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]
  xs:text-[rgba(255,255,255,1)] xs:flex xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[114px] xs:h-[23px]  xs:top-[75px] xs:left-[16px] xs:whitespace-nowrap"
                      >
                        Social sets: 1
                      </span>
                    </div>
                    <div className="mb-2">
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative top-[20px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]
xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-170px] xs:top-[75px] xs:whitespace-nowrap"
                      >
                        (Additional:6$)
                      </span>
                    </div>
                    <div>
                      <span
                        className="text-[rgba(255,255,255,1)] flex relative top-[60px] left-[-361px] font-dm font-semibold text-xl w-[180px] h-[26px]
 xs:text-[rgba(255,255,255,1)] xs:flex xs:relative xs:font-dm xs:font-[400] xs:text-[18px]
                     leading-[23px] xs:w-[61px] xs:h-[21px] xs:left-[-345px] xs:top-[95px] xs:whitespace-nowrap"
                      >
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PP;
