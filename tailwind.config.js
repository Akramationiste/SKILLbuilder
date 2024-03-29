/**
 * 
 *  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',},
      colors:  {
        bluea: "#6FFFE9",
        bulea: "#1C2541",
        bula: "#4FC3D0",
        bulei: "#5BC0BE",
        bluei: "#5BC0BE",
        blua: "#00C1FF"
      }
    },
  },
    plugins: [
        require('flowbite/plugin'),
        require("daisyui") 
    ]


}

