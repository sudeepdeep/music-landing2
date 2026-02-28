/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#5458fb",
        "background-light": "#f6f6f8",
        "background-dark": "#141121",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
        bitcount: ["Bitcount Single", "system-ui"],
        barlow: ["Barlow Condensed", "system-ui"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
