/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ff4c60",
        secondary: "#65ebe7",
        titlesColor: "#454360",
        blackColor: "#4b4870",
        textColor: "#596172",
        borderColor: "#eee",
        bgColor: "#f9f9fe",
      },
      fontFamily: {
        serifPro: ["Source Serif Pro", "serif"],
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      boxShadow: {
        cardShadow:
          "0 3px 12px -1px rgb(7 10 25 / 10%), 0 22px 27px -30px rgb(7 10 25 / 10%)",
        tagShadow: "0px 2px 6px rgb(7 10 25 / 10%)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
