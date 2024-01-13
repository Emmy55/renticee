/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-rgba": "rgba(3, 95, 206, 0.90)",
      },
      height: {
        'screen-2': '200vh', // adjust as needed
        'screen-3': '130vh', // adjust as needed
      },
      width: {
        'screen-2': '48vw',
        'screen-3': '68.3vw',
      },
      top: {
        'full-1': '130vh',
      },
      left: {
        'full-2': '228px',
        'full-3': '128vh',
      }, 
      right: {
        'full-2': '54vw'
      }
    },
  },
  plugins: [],
};
