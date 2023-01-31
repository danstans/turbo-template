const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("ui/tailwind.config")],
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.styles.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...colors,
      primary: colors.blue,
      secondary: colors.blue,
      tertiary: colors.fuchsia,
    },
  },
  plugins: [],
};
