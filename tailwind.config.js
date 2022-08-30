const { transparent } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        light: "#45a383",
        DEFAULT: "#309975",
        dark: "#2b8a69",
      },
      secondary: { light: "#dedc81", DEFAULT: "#dad873", dark: "#c4c268" },
      accent: "#64cea9",
      white: "#fff",
      dark: "#000",
      gray: "#adb5bd",
      danger: colors.red,
      transparent: transparent,
    },
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
    extend: {},
  },
  plugins: [require("tailwindcss-ripple")(), require("@tailwindcss/forms")],
};
