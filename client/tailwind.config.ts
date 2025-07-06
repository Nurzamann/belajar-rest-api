import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./index.html",                 // Vite HTML entry
    "./src/**/*.{js,ts,jsx,tsx}",   // semua komponen React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
