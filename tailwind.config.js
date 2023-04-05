/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
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
  plugins: [
    require("flowbite/plugin"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
};
