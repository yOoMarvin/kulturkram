import { theme as chakraTheme } from '@chakra-ui/core'

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    accent: {
      50: '#ffe5fc',
      100: '#fcb7e9',
      200: '#f68ad8',
      300: '#f05bc7',
      400: '#eb2eb7',
      500: '#d1149e',
      600: '#a40d7b',
      700: '#750659',
      800: '#490236',
      900: '#1c0016'
    },
    primary: {
      50: '#fffbda',
      100: '#fff3ad',
      200: '#ffeb7d',
      300: '#ffe34b',
      400: '#ffdb1a',
      500: '#e6c200',
      600: '#b39700',
      700: '#806c00',
      800: '#4d4100',
      900: '#1c1600'
    }
  },
  fonts: {
    ...chakraTheme.fonts,
    body: 'Open Sans, sans-serif',
    heading: 'Kanit, sans-serif',
    mono: 'Space Mono, monospace'
  },
  fontWeights: {
    normal: 400,
    medium: 700,
    bold: 900
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
    '7xl': '72px'
  },
  icons: {
    ...chakraTheme.icons,
    youtube: {
      path: (
        <g
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' />
          <path d='M9.75 15.02l5.75-3.27-5.75-3.27v6.54z' />
        </g>
      )
    },
    facebook: {
      path: (
        <g
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
        </g>
      )
    },
    instagram: {
      path: (
        <g
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
          <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
        </g>
      )
    }
  }
}

export default theme
