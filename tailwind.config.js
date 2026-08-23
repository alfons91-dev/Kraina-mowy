/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'system-ui', 'sans-serif'],
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
      },
      colors: {
        grass: {
          50: '#f1faf0',
          100: '#dcf2d8',
          200: '#b3e2ac',
          300: '#87cf7c',
          400: '#63bc55',
          500: '#4a9f3c',
          600: '#3a812e',
          700: '#306826',
          800: '#294f21',
          900: '#20401b',
        },
        dirt: {
          50: '#f7efe6',
          100: '#ecd9c2',
          200: '#d8b48a',
          300: '#bd8f5f',
          400: '#a1723f',
          500: '#875c30',
          600: '#6d4926',
          700: '#57391e',
          800: '#432b17',
          900: '#331f11',
        },
        diamond: {
          50: '#eafdff',
          100: '#cbf7fb',
          200: '#9aecf3',
          300: '#63dae8',
          400: '#37c1d6',
          500: '#22a2ba',
          600: '#1c8197',
          700: '#1a677a',
          800: '#1a5464',
          900: '#194655',
        },
        gold: {
          50: '#fff9e8',
          100: '#ffedb8',
          200: '#ffdc7a',
          300: '#ffc73d',
          400: '#f7b115',
          500: '#dd9509',
          600: '#b57406',
          700: '#8f590a',
          800: '#75480f',
          900: '#623d11',
        },
      },
      boxShadow: {
        block: '0 6px 0 0 rgba(0,0,0,0.25)',
        blockSm: '0 4px 0 0 rgba(0,0,0,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '70%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(-20vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0.2' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        popIn: 'popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        wiggle: 'wiggle 1.2s ease-in-out infinite',
        fall: 'fall linear forwards',
        blink: 'blink 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
