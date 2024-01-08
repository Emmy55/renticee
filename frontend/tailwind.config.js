/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-rgba": "rgba(3, 95, 206, 0.90)",
        "verify-rgba1": "rgba(4, 11, 171, 0.90)",
        "verify-rgba2": "rgba(14, 21, 178, 0.78)",
        primary: "#01257D",
        secondary: "#00FFFF",
        b: "#222222",
      },
      backgroundImage: {
        "hero-img": "url('/src/assets/images/hero-bg2.svg')",
        "hero-img2": "url('/src/assets/images/hero-bg-img-2.svg')",
        "insura-hero-img": "url('/src/components/houseInsurance/images/bg-hero.svg')",
        "insura-hero-img2": "url('/src/components/houseInsurance/images/bg-hero-2.svg')",
      },
      boxShadow: {
        "3xl": "0px 40px 100px 0px rgba(119, 122, 242, 0.10)",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};