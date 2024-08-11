/** @type {import('tailwindcss').Config} */

// Yesicon svg
const {addDynamicIconSelectors} = require("@iconify/tailwind");

module.exports = {
  plugins: [addDynamicIconSelectors()],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#100C08",
        win: "#03C03C",
        lose: "#8B0000",
      },
      fontFamily: {
        arcade: ["arcade"],
      },
    },
  },
  plugins: [],
};
