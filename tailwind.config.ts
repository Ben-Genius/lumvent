import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}', // Corrected the missing '}' at the end
    './app/**/*.{js,ts,jsx,tsx}', // Corrected the missing '}' at the end
  ],
  theme: {
    extend: {
      // screens: {
      //   xs: '480px', // extra small devices
      //   sm: '640px', // small devices
      //   md: '768px', // medium devices
      //   lg: '1024px', // large devices
      //   xl: '1280px', // extra large devices
      //   '2xl': '1536px', // 2x extra large devices
      // },
      colors: {
        color1: '#232933',
        color2: '#33302B',
        color3: '#282325',
        color4: '#131517',
        color5: '#141618',
        color6: '#1F1E2A',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right bottom, #232933, #33302B, #282325, #131517, #131517, #141618, #1F1E2A)',
      },
    },
  },
  plugins: [],
};

export default config;
