module.exports = {
  darkMode: 'class', // Enables dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './web/src/**/*.{js,jsx,ts,tsx}', // Ensure Redwood's directories are included
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a202c',
      },
    },
  },
  plugins: [],
}
