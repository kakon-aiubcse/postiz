import React from "react";
const Footer = () => {
  return (
    <>
      <footer
        className="bg-[rgba(14,14,14,1)] text-white relative overflow-x-hidden 
       py-10 px-6 mb-0 h-[457px]
       xs:bg-[rgba(14,14,14,1)] xs:text-white xs:relative xs:overflow-x-hidden xs:py-10 xs:px-6 xs:h-[1152px]"
      >
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6
        xs:max-w-7xl xs:mx-auto xs:grid xs:grid-cols-1 xs:md-grid-cols-4 xs:gap-6"
        >
          {/* Left Section: Logo and Social Media */}
          <div className="absolute left-[60px] xs:absolute xs:left-[120px] xs:top-[70px]">
            <h1
              className="text-xl font-bold mb-2
            xs:text-xl xs:font-bold xs:mb-2"
            >
              <img
                src="/Logo.png"
                className="h-[45px] w-[153px] xs:h-[45px] xs:w-[143px]"
              />
            </h1>
            <p
              className="text-gray-400 mb-4
            xs:text-gray-400 xs:mb-4 xs:relative xs:right-[90px] xs:w-[313px] xs:h-[45px] xs:text-center"
            >
              Open-source social media <br className="hidden xs:block" />{" "}
              scheduling tool
            </p>
            <div className="flex space-x-2 xs:flex xs:space-x-2 xs:absolute xs:top-[720px] left-[-20px]">
              <a href="#">
                <img
                  src="/github.png"
                  className="w-[32px] h-[30px] xs:h-[44px] xs:w-[44px]"
                />
              </a>
              <a href="#">
                <img
                  src="/discord.png"
                  className="w-[32px] h-[30px] xs:h-[44px] xs:w-[44px]"
                />
              </a>
              <a href="#">
                <img
                  src="/linkedin.png"
                  className="w-[32px] h-[30px] xs:h-[44px] xs:w-[44px]"
                />
              </a>
              <a href="#">
                <img
                  src="/x.png"
                  className="w-[32px] h-[30px] xs:h-[44px] xs:w-[44px]"
                />
              </a>
            </div>
          </div>

          {/* Free Tools */}
          <div
            className="absolute left-[575px]
          xs:absolute xs:left-[120px] xs:top-[220px] xs:text-center"
          >
            <h2 className="text-lg font-semibold mb-4 xs:text-lg xs:font-semibold xs:mb-4 ">
              Free Tools
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Free Marketing Tools
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  List your agency
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="absolute left-[855px] xs:absolute xs:left-[150px] xs:top-[360px] xs:text-center">
            <h2 className="text-lg font-semibold mb-4 xs:text-lg xs:font-semibold xs:mb-4 ">
              Resources
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Channels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Alternatives
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Comparisons
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="absolute left-[1050px] xs:absolute xs:left-[140px] xs:top-[600px] xs:text-center">
            <h2 className="text-lg font-semibold mb-4 xs:text-lg xs:font-semibold xs:mb-4">
              Company
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white xs:text-gray-400 xs:hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className=" absolute top-[350px] w-[1080px] left-[60px] border-t border-gray-700 
        xs:absolute xs:top-[750px] xs:left-[20px] xs:w-[330px] xs:border-t xs:border-gray-700 "
        >
          <div
            className="max-w-7xl mx-auto flex flex-col md:flex-row pt-8 justify-between text-gray-400
          xs:max-w-7xl xs:mx-auto xs:flex xs:flex-col xs:md:flex-row xs:pt-8 xs:justify-between xs:text-gray-400"
          >
            <p className="absolute xs:absolute xs:top-[160px] xs:left-[55px]">
              © Postiz, 2024. All rights reserved.
            </p>
            <p className="absolute left-[300px] xs:absolute xs:left-[85px] top-[120px]">
              Designed by{" "}
              <a src="https://peppermint.id/">
                <img
                  src="/peppermint.png"
                  className="absolute left-[100px] top-[-1px] w-[125px] h-[30px]
                  xs:absolute xs:left-[] xs:top-[] xs:w-[] xs:h-[]"
                />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
