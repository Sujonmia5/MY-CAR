const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {}
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dd2400",
        },
      },
    ],
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('preline/plugin'),
  ],
}
