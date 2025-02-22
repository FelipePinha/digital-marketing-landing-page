import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: '#D3F9FF',
        onahau: '#BEE1E6',
        lagoon: '#006D77',
        charcoal: '#444444',
        gainsboro: '#E0E0E0',
        'suvaGrey': '#929292'
      },
    },
  },
  plugins: [],
} satisfies Config;
