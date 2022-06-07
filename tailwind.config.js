module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#309975",
      secondary: "#dad873",
      accent: "#64cea9",
      white: "#fff",
      dark: "#000",
      gray: "#adb5bd",
    },
    ripple: (theme) => ({
      colors: theme("colors"),
    }),
    extend: {},
  },
  plugins: [require("tailwindcss-ripple")(), require("@tailwindcss/forms")],
};
