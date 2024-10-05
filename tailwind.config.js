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
        dm: ["DM Sans", "sans-serif"], // Add the font family
      },
    },
  },
  plugins: [],
};
