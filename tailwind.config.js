/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        jfd: {
          grey: "#373737",
          "grey-light": "#5C5C5C",
          "grey-lighter": "#F5F5F5",
          blue: "#066b7f",
          "blue-light": "#09A4C3",
          "blue-lighter": "#ECFBFE",
          orange: "#f18f34",
          "orange-light": "#F4AB66",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
