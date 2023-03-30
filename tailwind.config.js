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
          blue: "#066b7f",
          orange: "#f18f34",
          "orange-light": "#F4B67B",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
