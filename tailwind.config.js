/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["color-link"]: "#1f2937",
        ["color-background"]: "#ecf0f3",
        ["color-text-primary"]: "#5651e5",

        ["color-link-dark"]: "#E8E9EB",
        ["color-background-dark"]: "#1C1C1D",
        ["color-text-primary-dark"]: "#5651e5",
      },
    },
  },
  plugins: [],
};
