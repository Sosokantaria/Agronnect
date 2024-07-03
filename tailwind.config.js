const defaultTheme = require("tailwindcss/defaultTheme");
// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        base: "14px",
        xl: "16px",
        "2xl": "18px",
        "3xl": "20px",
        "4xl": "24px",
        "5xl": "30px",
      },
      fontFamily: {
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        robotoSlab: ["Roboto Slab"],
      },
      screens: {
        mobile: "400px",
        tablet: "790px",
        md: "900px",
        laptop: "1130px",
        desktop: "1280px",
      },
      colors: {
        blue: { darkest: "rgba(54, 72, 104, 1)" },
        gray: {
          dark: "rgba(123, 128, 154, 1)",
          lite: "rgba(233, 236, 239, 1)",
          bgdark: "rgba(248, 249, 250, 1)",
          bgdarker: "rgba(240, 244, 247, 1)",
          border: "rgba(206, 212, 218, 1)",
        },
        black: "rgba(52, 58, 64, 1)",
        white: "rgba(255, 255, 255, 1)",
        whiteDark:"rgba(252, 246, 242, 1)",
        whiteRgb: "rgba(0, 0, 0, 0.25)",
        teal: {
          dark: "rgba(3, 136, 119, 1)",
          lite: "rgba(0, 171, 137, 1)",
          liter: "rgba(179, 219, 214, 1)",
          litest: "rgba(229, 247, 243, 1)",
          100:" rgba(206, 239, 232, 1)",
          
        },
        red: "rgba(253, 51, 51, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
