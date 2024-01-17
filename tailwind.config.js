/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          100: "#fffdfb",
          200: "#fffbf7",
          300: "#fff8f4",
          400: "#fff6f0",
          DEFAULT: "#fff4ec",
          600: "#ccc3bd",
          700: "#99928e",
          800: "#66625e",
          900: "#33312f"
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover', 'hover'],
    },
  },
  plugins: [],
};