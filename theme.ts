import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { Permanent_Marker, Poppins } from '@next/font/google';

export const marker = Permanent_Marker({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
export const poppins = Poppins({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'var(--marker-font)',
  },
});

export default theme;