/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '768px',
      xl: '976px',
      '2xl': '1100px',
      '3xl': '1440px',
      '4xl': '1550px',
      widescreen: {
        raw: '(min-aspect-ratio: 3/2)',
      },
      tallscreen: { raw: '(max-aspect-ratio: 13/20)' },
    },
    extend: {
      colors: {
        'primary-1': 'hsl(257, 40%, 49%)',
        'primary-2': 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
