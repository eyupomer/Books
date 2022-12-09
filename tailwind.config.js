/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purplecolor: "#8d27ae",
        pinkcolor: "#d9176d",
        greycolor: "#f3f3f3",
        whitecolor: "#fff",
        blackcolor: "#010101",
        lightblackcolor: "#717171",
      },
      backgroundImage: {
        "headerimg": "linear-gradient(to bottom, rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)), url(./images/library-img.jpg)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
