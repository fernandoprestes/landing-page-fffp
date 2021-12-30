module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    colors: {
      'space-cadet': '#2F2E41',
      'mint-cream': '#E9F5F1',
      'sea-green': '#0cbb7e'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
