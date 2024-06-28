// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: "790px",
        md: "900px",
        laptop: "1130px",
        desktop: "1280px",
      },
      colors: {
        gray: {
          dark: "rgba(123, 128, 154, 1)",
          lite: "rgba(233, 236, 239, 1)",
          bgdark:"rgba(248, 249, 250, 1)"
        },
        black: "rgba(52, 58, 64, 1)",
        white: "rgba(255, 255, 255, 1)",
        whiteRgb: "rgba(0, 0, 0, 0.25)",
        teal: {
          dark: "rgba(3, 136, 119, 1)",
          lite: "rgba(0, 171, 137, 1)",
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
