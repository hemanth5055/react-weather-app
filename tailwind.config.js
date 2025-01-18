/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        cloud : "url('./assets/union.png')",
        thunder : "url('./assets/thunder.png')",
        snow : "url('./assets/snow.png')",
        rain : "url('./assets/rain.png')",
        sun : "url('./assets/sunj.png')",
        moon : "url('./assets/moon.png')",
      },
      fontFamily:{
        metro:["Metrophobic", "serif"],
        mooli:["Mooli", "serif"],
        mont:["Montserrat","serif"]

      }
    },
  },
  plugins: [],
}