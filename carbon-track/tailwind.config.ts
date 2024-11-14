import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080B05',
        secondary: '#00BF00',
        fiap:'#ed145b',
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2200px",
        "mobile": "280px",
      }
    },
  },
  plugins: [],
};
export default config;
