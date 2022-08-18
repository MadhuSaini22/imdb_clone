/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "1340px",
        },
        center: true,
        // padding: {
        //   DEFAULT: "1rem",
        // },
      },
      colors: {
        dark: {
          900: "#111111",
          800: "#212325",
        },
        // primary:"#c5c5c5",
        // blue:{
        //   DEFAULT:"#02265656",
        //   900:"#02265656",
        // }
      },
      backgroundColor: {
        DEFAULT: "#111111",
      },
      width: {
        100: "1284px",
      },
    },
  },
  plugins: [],
};
