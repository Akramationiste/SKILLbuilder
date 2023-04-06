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
      colors:  {
        bluea: "#6FFFE9",
        bulea: "#1C2541"
      }
    },
  },
    plugins: [
        require('flowbite/plugin'),
        require("daisyui") 
    ]


}

