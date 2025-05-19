module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{jsx,tsx, css}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {  // Add this dark color scale
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#0f172a',
        },
        light: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          DEFAULT: '#f5f5f5',
        },
        primary: {
          50: '#fff7e6',
          100: '#ffefcc',
          200: '#ffe7b3',
          300: '#ffdf99',
          400: '#ffd780',
          500: '#ffcf66', // Main orange-yellow
          600: '#ffc74d',
          700: '#ffbf33',
          800: '#ffb71a',
          900: '#ffaf00',
          DEFAULT: '#ffcf66',
        },
        accent: {
          light: '#f8fafc',
          dark: '#1e293b',
        },
        secondary: {
          light: '#e2e8f0',
          dark: '#334155',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"BillionDreams"', 'cursive'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        soft: '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 24px 0 rgba(0, 0, 0, 0.1)',
        glow: '0 0 15px rgba(255, 207, 102, 0.3)',
        'glow-lg': '0 0 25px rgba(255, 207, 102, 0.5)',
      },
    },
  },
  plugins: [
  ],
}
