/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    colors: {
      primary: {
        red: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        blue: "#60D5FF",
        cyan: "hsl(165.24590163934425, 47.28682170542637%, 74.70588235294117%)",
        "blue-dark": "hsl(198, 62%, 26%)",
        "cyan-desaturated": "hsl(167, 40%, 24%)",
        "cyan-moderate": "hsl(168, 34%, 41%)",
      },
      neutral: {
        "blue-desaturated": "hsl(212, 27%, 19%)",
        "grayish-blue-900": "hsl(213, 9%, 39%)",
        "grayish-blue-800": "hsl(213, 9%, 39%)",
        "grayish-blue-700": "hsl(232, 10%, 55%)",
        "grayish-blue-500": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
  },
  plugins: [],
};
