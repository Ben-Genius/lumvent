import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}', // Corrected the missing '}' at the end
    './app/**/*.{js,ts,jsx,tsx}', // Corrected the missing '}' at the end
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px', // extra small devices
        sm: '640px', // small devices
        md: '768px', // medium devices
        lg: '1024px', // large devices
        xl: '1280px', // extra large devices
        '2xl': '1536px', // 2x extra large devices
      },
    },
  },
  plugins: [],
};

export default config;
