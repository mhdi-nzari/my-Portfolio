/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        dana: ["var(--default-font)"],
      },
      colors: {
        primary: {
          DEFAULT: "#262C9C",
        },
        secondary: "#F1891E",
        grey: {
          500: "#676E76",
          600: "#596066",
          800: "#383F45",
          900: "#24292E",
        },

        basketGreen: "#2F9461",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        27: "27px",
        28: "28px",
        29: "29px",
        30: "30px",
        31: "31px",
        32: "32px",
        34: "34px",
        56: "56px",
        68: "68px",
       
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        hero: "url('/images/hero.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
