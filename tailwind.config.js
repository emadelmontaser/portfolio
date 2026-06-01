module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0c',
        charcoal: '#111214',
        muted: '#9aa0a6',
        accent: '#3b82f6'
      },
      maxWidth: {
        'content': '1120px'
      }
    },
  },
  plugins: [],
}
