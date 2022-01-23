module.exports = {
  prefix: '',
  mode: 'jit',
  content: [
      './src/**/**/*.{html,ts,scss}',
      './src/**/*.{html,ts,scss}',
      './src/*.{html,ts,scss}',
      './*.{html,ts,scss}'    
    ],
  
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica','Arial','sans-serif']
    },
    extend: {},
  },
   corePlugins: {
    preflight: true,
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
 
