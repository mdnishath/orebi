/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        secondery: "#767676",
        gray: "#F5F5F3",
        "white-off": "rgb(255 255 255 / 70%)",
        arrow: "rgb(0 0 0 / 20%)",
        divid: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
