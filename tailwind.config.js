/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10b981', // Teal
          light: '#34d399',
          dark: '#059669',
        },
        secondary: {
          DEFAULT: '#0369a1', // Blue
          light: '#0284c7',
          dark: '#075985',
        },
        accent: {
          DEFAULT: '#06b6d4', // Cyan
          light: '#22d3ee',
          dark: '#0891b2',
        },
        background: {
          light: '#f9fafb', // Gray-50
          dark: '#1f2937', // Gray-800
        },
        text: {
          light: '#111827', // Gray-900
          dark: '#f9fafb', // Gray-50
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}