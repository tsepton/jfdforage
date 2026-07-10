/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        heading: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        jfd: {
          ground: "#F7F9F9",
          "ground-2": "#ECF4F5",
          surface: "#FFFFFF",
          wash: "#ECFBFE",
          ink: "#14252A",
          "ink-soft": "#4A5C61",
          "ink-faint": "#8A9AA0",
          line: "#E1EAEB",
          teal: "#066B7F",
          "teal-bright": "#09A4C3",
          "teal-deep": "#0B2A31",
          orange: "#F18F34",
          "orange-strong": "#E07D22",
          // legacy brand keys kept for safety
          grey: "#373737",
          blue: "#066B7F",
        },
      },
      boxShadow: {
        "jfd-sm": "0 1px 2px rgba(11,42,49,.06), 0 2px 8px rgba(11,42,49,.05)",
        "jfd-md": "0 8px 24px rgba(11,42,49,.09), 0 2px 6px rgba(11,42,49,.05)",
        "jfd-lg": "0 24px 60px rgba(11,42,49,.16)",
      },
      borderRadius: {
        jfd: "16px",
        "jfd-lg": "22px",
      },
    },
  },
  plugins: [],
};
