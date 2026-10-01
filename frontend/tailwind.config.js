/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#13131f',
          700: '#1c1c2e',
        },
        neon: {
          pink: '#ff2a6d',
          magenta: '#c100ff',
          violet: '#6b00ff',
          cyan: '#05d9e8',
        },
        accent: {
          gold: '#ffd700',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #c100ff, 0 0 10px #c100ff, 0 0 15px #c100ff' },
          '100%': { boxShadow: '0 0 10px #ff2a6d, 0 0 20px #ff2a6d, 0 0 30px #ff2a6d' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
