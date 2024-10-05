import React from "react";

const PP = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden">
        <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen ">
          <header className="flex font-jakarta text-[48px] font-bold justify-center items-center text-center py-8">
            <p className=" ">Pricing & Plans </p>
          </header>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[1355px] left-[44px] rounded-[20px] "
          >
            {/* topnav */}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[8px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[-82px] w-[300px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-3xl ">
                Postiz Pricing
              </h1>
              <span className="flex items-center relative top-[-30px] w-[300px] h-[80px] left-[-200px] space-x-2">
                <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                  14 day free trial, credit card required
                </span>
              </span>
              <span className="flex items-center relative top-[25px] w-[300px] h-[80px] left-[-465px] space-x-2">
                <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                  10% annual discount
                </span>
              </span>
            </div>
            {/* boxes postliz */}
            <div className=" top-[30px] flex-col flex flex-wrap gap-4 mx-4 relative">
              <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                  <h2 className="text-2xl font-bold mb-4">Standart</h2>
                  <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                    <span className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                      $29
                    </span>
                    <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-90px] text-lg ml-1">
                      /mo
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]">
                      Social sets: 1
                    </span>
                  </div>
                  <div>
                    <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                      Users: 1
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative border border-[rgba(255,255,255,0.5)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h2 className="text-2xl font-bold mb-4">Team</h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                      <span className=" flex relative h-[74px] w-[44px] left-[-62px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                        $39
                      </span>
                      <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-50px] text-lg ml-1">
                        /mo
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold left-[35px] text-xl w-[180px] h-[26px]">
                        Social sets: 1
                      </span>
                    </div>
                    <div>
                      <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-143px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] bg-[rgba(36,35,35,1)] md:w-[500px]  h-[146px]">
                {" "}
                <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h2 className="text-2xl font-bold mb-4">Pro</h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                      <span className=" flex relative h-[74px] w-[44px] left-[-41px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                        $49
                      </span>
                      <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-30px] text-lg ml-1">
                        /mo
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl left-[60px] w-[180px] h-[26px]">
                        Social sets: 1
                      </span>
                    </div>
                    <div>
                      <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-120px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative border border-[rgba(255,255,255,0.5)] rounded-2xl bg-[rgba(36,35,35,1)] w-[80%] md:w-[500px]  h-[146px]">
                <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h2 className="text-2xl font-bold mb-4">Ultimate</h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                      <span className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                        $99
                      </span>
                      <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-90px] text-lg ml-1">
                        /mo
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Social sets: 1
                      </span>
                    </div>
                    <div>
                      <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative  rounded-2xl  w-[80%] md:w-[362px]  h-[28px]">
                <div className="flex relative   rounded-2xl w-[80%]  md:w-[362px]  h-[28px] mb-10">
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h1 className="flex-grow whitespace-nowrap relative left-[-22px] top-[-22px] w-[362px] h-[28px] text-[rgba(255,255,255,1)] font-jakarta font-bold text-base pb-10 ">
                      On-premise services & Enterprise
                    </h1>
                  </div>
                </div>
              </div>

              <div className="relative border border-[rgba(255,255,255,0.5)] rounded-2xl bg-[rgba(36,35,35,1)] w-[80%] md:w-[500px]  h-[146px]">
                <div
                  style={{
                    background:
                      "linear-gradient(149.98deg, #45007C 18.31%, #1C0033 105.71%)",
                  }}
                  className="flex relative border border-[rgba(255,255,255,0.5)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]"
                >
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h2 className="text-base font-medium h-[24px] w-[240px] mb-4">
                      Self Service Installation
                    </h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                      <span className=" flex relative h-[74px] w-[44px] left-[-240px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                        $2000
                      </span>
                      <span className=" flex whitespace-nowrap relative text-[rgba(255,255,255,1)] top-[59px] left-[-190px] h-[24px] w-[105px] text-lg ml-1">
                        /one time
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold left-[-140px] text-xl w-[180px] h-[26px]">
                        Social sets: 1
                      </span>
                    </div>
                    <div>
                      <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-319px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative border  border-[rgba(255,255,255,0.5)] rounded-2xl bg-[rgba(36,35,35,1)] 
              w-[80%] md:w-[500px]  h-[146px]"
              >
                <div
                  className="flex relative border border-[rgba(255,255,255,0.5)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]"
                  style={{
                    background:
                      "linear-gradient(147.83deg, #6B007C 19.31%, #280033 98.28%)",
                  }}
                >
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                      <span className=" flex relative h-[154px] w-[44px] left-[-117px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                        Custom
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[rgba(255,255,255,1)] left-[-10px] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Social sets: 1
                      </span>
                    </div>
                    <div>
                      <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-190px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* buffer section */}

          <div
            className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center min-h-[1355px]
         items-center top-[-1360px] w-[572px]  left-[622px] rounded-[20px]"
          >
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-12px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[-250px] w-[300px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-3xl ">
                Buffer Pricing
              </h1>
              <span className="flex items-center relative top-[-190px] w-[300px] h-[80px] left-[-200px] space-x-2">
                <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                  14 day free trial, credit card required
                </span>
              </span>
              <span className="flex items-center relative top-[-130px] w-[300px] h-[80px] left-[-465px] space-x-2">
                <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                  10% annual discount
                </span>
              </span>
            </div>
            {/* boxes */}
            <div className="bg-[rgba(26,25,25,1)] top-[-155px] flex-col flex flex-wrap gap-4 mx-4 relative">
              <div className=" bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                    <h2 className="text-2xl font-bold mb-4">Free</h2>
                    <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                      <span className=" flex relative h-[74px] w-[44px] left-[-50px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                        $0
                      </span>
                      <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-63px] text-lg ml-1">
                        /mo
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold left-[60px] text-xl w-[180px] h-[26px]">
                        Social sets: 1
                      </span>
                    </div>
                    <div>
                      <span className="text-[rgba(255,255,255,1)] flex relative top-[30px] left-[-119px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                        Users: unlimited
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                <div className=" bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                    <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                      <h2 className="text-2xl font-bold mb-4">Essentials</h2>
                      <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                        <span className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                          $6
                        </span>
                        <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-100px] text-lg ml-1">
                          /mo
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]">
                          Social sets: 1
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-[rgba(255,255,255,1)] flex relative top-[20px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                          (Additional:6$)
                        </span>
                      </div>
                      <div>
                        <span className="text-[rgba(255,255,255,1)] flex relative top-[60px] left-[-361px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                          Users: unlimited
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                <div className=" bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                    <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                      <h2 className="text-2xl font-bold mb-4">Team</h2>
                      <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                        <span className=" flex relative h-[74px] w-[44px] left-[-60px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                          $12
                        </span>
                        <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-40px] text-lg ml-1">
                          /mo
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-[rgba(255,255,255,1)] flex relative left-[46px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                          Social sets: 1
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-[rgba(255,255,255,1)] flex relative top-[20px] left-[-135px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                          (Additional:12$)
                        </span>
                      </div>
                      <div>
                        <span className="text-[rgba(255,255,255,1)] flex relative top-[60px] left-[-313px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                          Users: unlimited
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                <div className=" bg-[rgba(36,35,35,1)] relative border border-[rgba(255,255,255,0.5)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                  <div className="flex relative border border-[hsla(0,0%,100%,1)] bg-[rgba(36,35,35,1)] rounded-2xl w-[80%] md:w-[500px]  h-[146px]">
                    <div className=" flex relative p-[30px] rounded-lg shadow-lg  w-auto text-white">
                      <h2 className="text-2xl font-bold mb-4">Essentials</h2>
                      <div className="flex relative w-[130px] h-[44px] gap-[8px]">
                        <span className=" flex relative h-[74px] w-[44px] left-[-100px] top-[50px] text-[rgba(255,255,255,1)] font-jakarta font-semibold text-4xl ">
                          $120
                        </span>
                        <span className=" flex relative text-[rgba(255,255,255,1)] top-[59px] left-[-70px] text-lg ml-1">
                          /mo
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-[rgba(255,255,255,1)] flex relative font-dm font-semibold text-xl w-[180px] h-[26px]">
                          Social sets: 1
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-[rgba(255,255,255,1)] flex relative top-[20px] left-[-180px] font-dm font-semibold text-xl w-[180px] h-[26px]">
                          (Additional:6$)
                        </span>
                      </div>
                      <div>
                        <span className="text-[rgba(255,255,255,1)] flex relative top-[60px] left-[-361px] font-dm font-semibold text-xl w-[180px] h-[26px]">
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
      </div>
    </>
  );
};
export default PP;
