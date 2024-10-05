// components/Header.js
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header
      className=" text-white"
      style={{ background: "rgba(14, 14, 14, 1)" }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Company Name */}
        <div className="flex items-center justify-center relative left-[30px]">
          <img src="/Logo.png" className="h-[31.96px] w-[98px]" alt="Logo" />
        </div>

        {/* Centered Menu */}
        <nav className="flex-grow text-center">
          <ul className="flex justify-center space-x-8 pl-16">
            <li>
              <Link href="/" className="hover:underline">
                Features
              </Link>
            </li>
            <li className="relative group">
              <Link href="/" className="hover:underline flex items-center">
                Provider
                <img
                  src="/arrowdown.svg"
                  alt="Dropdown Icon"
                  className="w-4 h-4 ml-1"
                />
              </Link>
              <ul className="absolute left-0 hidden mt-1 group-hover:block bg-[rgba(14,14,14,1)] shadow-md">
                <li>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                    N/A
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons on the Right */}
        <div
          className="flex justify-center"
          style={{ width: "255px", height: "45px", gap: "8px" }}
        >
          <button className="bg-[rgba(14,14,14,1)] hover:bg-[rgba(14,14,14,1)] text-white rounded-[30px] border border-gray-300 px-[12px] pl-[24px] pr-[24px]">
            <span
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20.83px",
                textAlign: "left",
              }}
            >
              <p className="font-semibold">Log In</p>
            </span>
          </button>

          <button className="bg-white  hover:bg-white text-black rounded-[30px] border border-gray-300 px-[12px] pl-[24px] flex items-center justify-between">
            <span
              className="flex items-center"
              style={{
                fontFamily: "DM Sans",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "21px",
                textAlign: "left",
              }}
            >
              <p className="font-semibold">Get Started</p>
              <img
                src="/chevron-right-double.svg"
                alt="Dropdown Icon"
                className="w-[20px] h-[20px] ml-1"
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
