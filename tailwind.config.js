/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'acumin-pro-bold' : ['acumin-pro-bold', 'sans-serif'],
        'acumin-pro-book' : ['acumin-pro-book', 'sans-serif'],
        'acumin-pro-medium' : ['acumin-pro-medium', 'sans-serif'],
        'monbaiti' : ['monbaiti', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-image": "url('/imgs/Group 30.png')"
      },
      aspectRatio:{
        '3/4': '3 / 4',
        '6/9' : '6 / 9'
      }
    },  
    screens: {
      'xl' : '1280px'
    },
  },
  plugins: [],
};
