const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mediumGray: `hsl(0deg 0% 41% / <alpha-value>)`,
      whitish: `hsl(0deg 0% 98% / <alpha-value>)`,
      lighterBlack: `hsl(0deg 0% 8%)`,
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
