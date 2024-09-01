/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat'
      },
      colors: {
        primary: '#FBB911' /* Yellow */,
        secondary: '#D4281C' /* Red */,
        tertiary: '#E67C30' /* Gold */,
      }
    },
  },
  plugins: [],
};
