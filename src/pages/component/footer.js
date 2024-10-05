import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="bg-[rgba(14,14,14,1)] text-white relative overflow-x-hidden  py-10 px-6 mb-0 h-[457px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Section: Logo and Social Media */}
          <div className="absolute left-[60px]">
            <h1 className="text-xl font-bold mb-2">
              <img src="/Logo.png" className="h-[45px] w-[153px]" />
            </h1>
            <p className="text-gray-400 mb-4">
              Open-source social media scheduling tool
            </p>
            <div className="flex space-x-2">
              <a href="#">
                <img src="/github.png" className="w-[32px] h-[30px]" />
              </a>
              <a href="#">
                <img src="/discord.png" className="w-[32px] h-[30px]" />
              </a>
              <a href="#">
                <img src="/linkedin.png" className="w-[32px] h-[30px]" />
              </a>
              <a href="#">
                <img src="/x.png" className="w-[32px] h-[30px]" />
              </a>
            </div>
          </div>

          {/* Free Tools */}
          <div className="absolute left-[575px]">
            <h2 className="text-lg font-semibold mb-4">Free Tools</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Free Marketing Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  List your agency
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="absolute left-[855px]">
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Channels
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Alternatives
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Comparisons
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="absolute left-[1050px]">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" absolute top-[350px] w-[1080px] left-[60px] border-t border-gray-700 ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row pt-8 justify-between text-gray-400">
            <p className="absolute ">© Postiz, 2024. All rights reserved.</p>
            <p className="absolute left-[300px]">
              Designed by{" "}
              <a src="https://peppermint.id/">
                <img
                  src="/peppermint.png"
                  className="absolute left-[100px] top-[-1px] w-[125px] h-[30px]"
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
