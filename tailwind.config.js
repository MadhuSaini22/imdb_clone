/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
 
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "1286px",
        },
        center: true,
        padding: {
          DEFAULT: "0rem",
        },
      },
      colors: {
        dark: {
          900: "#111111",
          800: "#212325",
          desc: "#0B0B74",
          forgot: "#006BC2",
          lightBlack:"#1F1F1F",
        },
        headerMain:"#121212",
        cover: "#B8B8B5",       
        yellowLight : "#F5D382",
       
      },
      maxWidth:{
        container:"1286px",
        100: "50px",
      },
     
     
      backgroundImage: {
        "dark-gr":
          "linear-gradient(0deg, transparent 0%, transparent 50%, rgba(18, 18, 18, 0.7) 78%, rgb(18, 18, 18) 100%);",
      },
      fontSize: {
        title: "17px",
        "sm-title": "16px",
        "title-main": "20px;",
        xss: "10px",
      },
      fontFamily: {
        body: ["'Roboto', sans-serif"],
        coverFont: ["'Verdana', 'sans-serif'"],
      },
      boxShadow: {
        "input-focus": "0 0 3px 2px rgb(228 121 17 / 50%)",
        "details" : "rgba(0, 0, 0, 0.86) 0px 22px 40px 6px",
      },
      zIndex:{

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),     
  ],
  
};
