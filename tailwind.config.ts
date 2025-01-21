import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1024px',
        xl: '1264px',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': {
          DEFAULT: '#FFC6C9',
          textColor: '#1C0F0D',
          lightPink: '#FD5D69',
          darkPink: '#EC888D' 
        }
      },
    },
  },
  plugins: [],
};
export default config;