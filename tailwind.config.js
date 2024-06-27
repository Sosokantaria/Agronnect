// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontsize: {
        xs: "12px",
        sm: "14px",
        lg: "16px",
        xl: "20px",
        "2xl": "30px",
      },
      colors: {
        white: "rgba(255, 255, 255, 1)",
        teal: {
          dark: "rgba(3, 136, 119, 1)",
          lite: "rgba(0, 171, 137, 1)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
