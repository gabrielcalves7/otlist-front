import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'linear-gradient-example':
          'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,30,108,1) 35%, rgba(0,212,255,1) 100%)',
      },
      colors: {
        'pallet-orange': '#FFAA4C',
        'pallet-dark-blue': '#001E6C',
        'pallet-medium-blue': '#035397',
        'pallet-light-blue': '#5089C6',
        'main': '#007ced',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}
export default config
