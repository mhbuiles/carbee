import plugin from "tailwindcss/plugin";
import { theme } from "tailwindcss/defaultConfig";
import { black as _black, white as _white } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Museo Sans Rounded"'],
      },
      boxShadow: {
        card: "0 5px 15px 0 rgba(0, 0, 0, 0.4)",
      },
    },
    colors: {
      transparent: "transparent",
      blue: "#3CB4E5",
      black: _black,
      "dark-blue": "#051C2C",
      red: "#E1251B",
      yellow: "#FED925",
      white: _white,
      green: "#00AE42",
      orange: "#FF6B00",
      "light-green": "#A2D45E",
      "font-color-primary": "#414141",
      "font-color-light-grey": "#5c5c5c",
      "brand-primary": "#fd4f35",
      "brand-primary-500": "#d8371f",
      "brand-primary-400": "#fd4f35",
      "brand-primary-300": "#fc735c",
      "brand-primary-200": "#ff9487",
      "brand-primary-100": "#ffbaad",
      "brand-primary-50": "#fcccc2",
      "brand-secondary": "#fd4f35",
      "brand-secondary-500": "#0a3642",
      "brand-secondary-400": "#004559",
      "brand-secondary-300": "#336b78",
      "brand-secondary-200": "#668f9c",
      "brand-secondary-100": "#99b5bd",
      "brand-secondary-50": "#ccd9de",
      "brand-tertiary": "#ede5d9",
      "brand-tertiary-500": "#75736e",
      " brand-tertiary-400": "#b0ada3",
      "brand-tertiary-300": "#c7bfb5",
      "brand-tertiary-200": "#d9d6cf",
      "brand-tertiary-100": "#ede5d9",
      "brand-tertiary-50": "#f5f0e8",
      "background-color-body": "#fff",
      "gray-300": "#a6a6a6",
      "gray-200": "#d3d3d3",
      "gray-100": "#e9e9e9",
      "gray-50": "#fbfbfb",
      "shade-light": "#fff",
      "shade-dark": "#3a3a3a",
      "color-danger": "#c84040",
      "color-success": "#77c697",
      "color-warn": "#fac12f",
    },
  },
  plugins: [],
};

export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
  plugin(({ addVariant }) => {
    addVariant("firefox", "@-moz-document url-prefix()");
    addVariant("safari", "@media not all and (min-resolution:.001dpcm)");
  }),
];
