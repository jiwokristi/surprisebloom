import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    //? ----- WHITESPACE SYSTEM -----
    spacing: {
      0: '0',
      1: '0.1rem',
      2: '0.2rem',
      4: '0.4rem',
      8: '0.8rem',
      12: '1.2rem',
      16: '1.6rem',
      24: '2.4rem',
      32: '3.2rem',
      48: '4.8rem',
      64: '6.4rem',
      80: '8rem',
      96: '9.6rem',
      128: '12.8rem',
    },

    //? ----- TYPOGRAPHY SYSTEM -----
    fontSize: {
      10: '1rem',
      12: '1.2rem',
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      30: '3rem',
      36: '3.6rem',
      44: '4.4rem',
      52: '5.2rem',
      62: '6.2rem',
      74: '7.4rem',
      86: '8.6rem',
      98: '9.8rem',
    },
    lineHeight: {
      DEFAULT: '1',
      medium: '1.2',
      paragraph: '1.5',
    },
    letterSpacing: {
      '0.1': '0.1',
      '0.25': '0.25',
      '1.25': '1.25',
    },
    extend: {
      fontFamily: {
        'general-sans-extralight': ['GeneralSans-Extralight', 'sans-serif'],
        'general-sans-light': ['GeneralSans-Light', 'sans-serif'],
        'general-sans': ['GeneralSans-Regular', 'sans-serif'],
        'general-sans-medium': ['GeneralSans-Medium', 'sans-serif'],
        'general-sans-semibold': ['GeneralSans-Semibold', 'sans-serif'],
        'general-sans-bold': ['GeneralSans-Bold', 'sans-serif'],

        'zodiak-light': ['Zodiak-Light', 'serif'],
        zodiak: ['Zodiak-Regular', 'serif'],
        'zodiak-bold': ['Zodiak-Bold', 'serif'],
      },
      colors: {
        'almost-white': '#FBF8F2',
        gray: {
          1: '#0C0C0C',
          2: '#323232',
          3: '#545454',
        },
        beige: {
          1: '#767776',
          2: '#9F9F9B',
          3: '#C3C8C5',
        },
        brown: {
          1: '#837964',
          2: '#A9A08A',
          3: '#BFBBA5',
        },
        green: {
          1: '#E3E5D8',
        },
      },
    },
  },
  plugins: [],
}

export default config
