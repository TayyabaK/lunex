import type { Config } from "tailwindcss";

const config: Config = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  // plugins: [],

  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        browngrey: "#2D2C2D",
      },
      backgroundImage: {
        "custom-gradient-topleft": "url('/assets/bg-top-gradient.svg')",
        "custom-gradient-topright": "url('/assets/token-bg-grad.svg')",
      },
      backgroundSize: {
        "half-width-height": "100% 50%", // Full width, half height
      },
      backgroundPosition: {
        "top-left-half": "top left 0% 50%", // Start from top left, shift down by 50%
      },
        screens: {
        'xl2': '1420px', // Custom breakpoint for screens larger than 1420px
        'xm': '768px',
      },
      
    },
  },
  plugins: [],
};
export default config;
