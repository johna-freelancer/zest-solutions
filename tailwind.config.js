/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zest: {
          DEFAULT: 'var(--zest)',
          light: 'var(--zest-light)',
          hover: 'var(--zest-hover)',
          glow: 'var(--zest-glow)',
        },
        dark: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(circle at 50% 0%, var(--zest-glow) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
