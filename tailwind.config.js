/** @type {import('tailwindcss').Config} */

// Yesicon svg
const {addDynamicIconSelectors} = require("@iconify/tailwind");

module.exports = {
  plugins: [addDynamicIconSelectors()],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["arcade", "font-mono"],
      },
    },
  },
  plugins: [],
};
