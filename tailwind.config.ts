import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './styles/**/*.css'],
  theme: {
    extend: {
      colors: {
        ink: '#07090b',
        panel: '#0f1417',
        panelSoft: '#11191d',
        line: 'rgba(148, 163, 184, 0.18)',
        neon: '#69f08c',
        moss: '#2dd46f',
        mist: '#d8fbe3'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(105, 240, 140, 0.18), 0 12px 48px rgba(6, 10, 8, 0.55)',
        soft: '0 10px 30px rgba(0, 0, 0, 0.28)'
      },
      backgroundImage: {
        'aurora-dark': 'radial-gradient(circle at top, rgba(105, 240, 140, 0.18), transparent 30%), radial-gradient(circle at right, rgba(45, 212, 111, 0.14), transparent 22%), linear-gradient(180deg, #050607 0%, #071012 45%, #060708 100%)'
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -12px, 0) scale(1.03)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        floatSlow: 'floatSlow 10s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;