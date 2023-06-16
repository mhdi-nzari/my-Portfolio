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
    },
    extend: {
      fontFamily: {
        dana: ["var(--default-font)"],
      },
      colors: {
        primary: {
          DEFAULT: "#262C9C",
        },
        gray: {
          600: "#596066",
          800: "#383F45",
        },

        basketGreen:"#2F9461"
      },
      fontSize: {
        14: "14px",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
