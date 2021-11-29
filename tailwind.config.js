module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-first": "#e8e5e2",
        "primary-second": "#8aa99a",
        "primary-third": "#243c5a",
        "primary-fourth": "#1D1D35",
        "primary-dark": "#121212",
        "primary-dark-text": "#a6d1c9",
        "primary-dark-contact": "#84719B",
      },
      screens: {
        blg: "1100px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
