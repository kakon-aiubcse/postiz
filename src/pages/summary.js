import React from "react";

const Summary = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden xs:hidden">
        <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen ">
          <h1 className="flex font-jakarta w-[864px] h-[53px] mb-10 text-[48px] whitespace-nowrap text-center font-bold justify-center items-center mx-auto py-8">
            <p className="">Summary</p>
          </h1>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[1140px] h-[194px] left-[45px] rounded-[20px] "
          >
            <div className="flex  items-center justify-between w-[414px] h-[28px] relative top-[15 px] left-[-325px]">
              <h1 className="flex-grow whitespace-nowrap relative  w-[414px] h-[80px] text-[rgba(255,255,255,1)] font-jakarta font-bold text-xl ">
                Which platform is the most affordable?
              </h1>
            </div>

            <section className="flex items-center relative top-[1px] w-[1232px] h-[58px] left-[80px] ">
              <span className="font-dm flex-grow font-normal w-[1232px] h-[58px] text-[rgba(209,209,209,1)] ">
                The most affordable plan is the Standart plan from Postiz. It
                starts from $29 per month, and includes 1 social set (which
                includes 1 social profiles), and <br /> 1 users.
              </span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default Summary;
