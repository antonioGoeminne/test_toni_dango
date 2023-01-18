/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      ...defaultTheme.screens
    },
    extend: {
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(145px, max-content))',
      }
    },
  },
  plugins: [],
}
