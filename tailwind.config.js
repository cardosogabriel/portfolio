/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.{html,js}'],
  },
  theme: {
    extend: {},
    colors: {
      accent: '#7c3aed', //violet-500
      accentHover: '#6d28d9', //violet-700
      medium: '#64748b', //slate-500
      background: '#F3F4F6',
      violet: colors.violet,
      lime: colors.lime,
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}



