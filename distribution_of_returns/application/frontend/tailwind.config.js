/** @type {import('tailwindcss').Config} */

import mainConstants from './src/constants/mainConstants'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [mainConstants.meta.theme],
  },
}

