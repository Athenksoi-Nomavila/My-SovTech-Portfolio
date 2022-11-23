/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      burtons: "burtons",
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
export const plugins = [];
