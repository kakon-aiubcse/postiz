import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="bg-[rgba(14,14,14,1)] h-screen ">
        <div
          className="bg-[rgba(14,14,14,1)] text-white"
          style={{
            position: "relative",
            width: "307.99px",
            height: "307.99px",
            top: "110px",
            transform: "rotate(46.78deg)",
            left: "100px",
          }}
        >
          <img
            src="/vector.png"
            className="h-[31.96px] w-[98px]   "
            style={{
              position: "relative",
              width: "164px",
              height: "257.94px",
              top: "189.67px",
              transform: "rotate(-33deg)",
              left: "-49px",
            }}
            alt="Logo"
          />
        </div>
      </div>
      <div
        className=" justify-center items-center flex flex-col mx-28 "
        style={{
          background: "rgba(14, 14, 14, 1)",
          position: "relative",
          top: "-600px",
          left: "",
        }}
      >
        <div className="bg-[rgba(14,14,14,1)] mb-2">
          <p
            className="text-white text-center"
            style={{
              width: "803.82px",
              height: "154px",
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              fontSize: "70px",
              lineHeight: "77px",
              textAlign: "center",
            }}
          >
            Postiz and Buffer comparison
          </p>
        </div>
        <div
          style={{
            position: "relative",
            width: "336.48px",
            height: "20.88px",
            top: "00px",
            left: "61px",
            gap: "0px",
          }}
          className="mb-2"
        >
          <img src="/Line2.png" alt="Comparison Line" className="w-full" />
        </div>

        <div
          className="text-white text-center mb-2"
          style={{
            width: "771px",
            height: "58px",
          }}
        >
          <p
            style={{
              fontFamily: "DM Sans",
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "28.64px",
              textAlign: "center",
            }}
          >
            Postiz's superior scheduling flow, competitor tracking, and client
            management make it the best Buffer alternative.
          </p>
        </div>
        <div>
          <button className="bg-white h-[57px] w-[191px] pl-[32px] hover:bg-gray-200 text-black rounded-[30px] border border-gray-300 flex items-center justify-between">
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
      </div>

      <img
        className="bg-[rgba(14,14,14,1) ] relative top-[-900px] left-[1142px] "
        src="/highlight26.png"
      />
      <img
        className="bg-[rgba(14,14,14,1) ] relative top-[-600px] p-10 mb-0 overflow-hidden"
        src="/promo.svg"
      />
    </>
  );
};

export default Homepage;
