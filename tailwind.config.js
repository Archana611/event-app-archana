module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#E87BF8',
        DEFAULT: '#501FC1',
        dark: '#8456EC',
        darkest: '#240D57',
      },
      secondary:{
        light: '#F6F2FF',
        DEFAULT: '#EDE5FF',
        dark: '#CCB6FF',
      },
      alert:{
        info:{
          light: '#D3FFE2',
          DEFAULT: '#00805E',
        },
        error:{
          light: '#FFD7E0',
          DEFAULT: '#E61445',
        }
      },
      text:{
        DEFAULT: '#4F4F4F',
        light: '#ffffff'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
