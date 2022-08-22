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
          "desc":"#0B0B74",
          "forgot":"#006BC2",
        },
        "cover":"#C7C7C7",
       
        "submit": "#F5D382",
        // primary:"#c5c5c5",
        // blue:{
        //   DEFAULT:"#02265656",
        //   900:"#02265656",
        // }
      },

      width: {
        100: "1284px",
        "poster" : "850px",
        "c-full": "100%",
        "coverDesc ": "50%",
      },
      backgroundImage: {
        "dark-gr":
          "linear-gradient(0deg, transparent 0%, transparent 50%, rgba(18, 18, 18, 0.7) 78%, rgb(18, 18, 18) 100%);",
      },
      fontSize:{
        "title": "17px",
        "sm-title":"16px",
        "title-main": "20px;"
      },
      fontFamily:{
        "body": ["'Roboto', sans-serif"],    
        "coverFont": ["'Verdana', 'sans-serif'"]
      }
    },
  },
  plugins: [],
};
