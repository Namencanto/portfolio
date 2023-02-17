/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["color-link"]: "var(--color-link)",
        ["color-background"]: "var(--background-color)",
        ["color-text-primary"]: "var(--color-primary)",

        ["color-cv-primary"]: "var(--cv-primary)",
        ["color-cv-secondary"]: "var(--cv-secondary)",
      },
      boxShadow: {
        ["default-lg"]: "0 10px 15px -3px var(--shadow-color)",
        ["default-xl"]: "0 20px 25px -5px var(--shadow-color)",
      },
      textColor: {
        ["main-color-700"]: "var(--main-color-700)",
        ["main-color-600"]: "var(--main-color-600)",
      },
      screens: {
        nav: "920px",
      },
    },
  },
  plugins: [],
};
