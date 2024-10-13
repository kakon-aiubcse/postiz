/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update the paths based on your file structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif", "DM Sans"],
        dm: ["DM Sans", "sans-serif"],
      },
      screens: {
        xs: { min: "1px", max: "376px" },
        "xs-min": { min: "376 px" },
      },
      backgroundImage: {
        cb: "linear-gradient(149.98deg, #45007C 18.31%, #1C0033 105.71%)",
        cp: "linear-gradient(147.83deg, #6B007C 19.31%, #280033 98.28%)",
      },
    },
  },
  plugins: [],
};
