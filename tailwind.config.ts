import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#080808',
        'surface': '#101010',
        'surface2': '#161616',
        'white': '#F2F0EC',
        'gold': '#C8A96E',
        'muted': '#555555',
        'border': '#1E1E1E',
        'border2': '#2A2A2A',
        'green': '#4ADE80',
      },
      fontFamily: {
        'sans': 'var(--font-dm-sans)',
        'display': 'var(--font-syne)',
      },
      spacing: {
        'gutter': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
