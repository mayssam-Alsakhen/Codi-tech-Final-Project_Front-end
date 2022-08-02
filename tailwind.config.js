/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { max: "1025px" },
      // => @media (max-width: 991px) { ... }
      md: { max: "800px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
    
    extend: {
      colors:{
        "basic" : "#Df7A1A",
        "primary" : "#9e0404",
        "secondary" : "#404040",
      }
    },
  },
  plugins: [],
}
