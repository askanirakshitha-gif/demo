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
          950: '#030712',
          900: '#0f172a',
          850: '#1e293b',
          800: '#1e293b',
          700: '#334155',
        },
        neon: {
          pink: '#3b82f6',
          magenta: '#2563eb',
          violet: '#1d4ed8',
          cyan: '#60a5fa',
        },
        accent: {
          gold: '#60a5fa',
        },
        pink: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
          950: '#172554',
        },
        purple: {
          300: '#bfdbfe',
          400: '#93c5fd',
          500: '#60a5fa',
          600: '#3b82f6',
          900: '#1e3a8a',
          950: '#172554',
        },
        cyan: {
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          900: '#1e3a8a',
          950: '#172554',
        },
        amber: {
          300: '#a5f3fc',
          400: '#22d3ee',
          500: '#06b6d4',
          900: '#164e63',
          950: '#083344',
        },
        gray: {
          300: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
          800: '#1e293b',
          900: '#0f172a',
        },
        white: '#ffffff',
        black: '#030712',
        zinc: {
          300: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
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
