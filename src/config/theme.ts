import {createTheme} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#dfdfd6',
    },
    secondary: {
      main: '#060607'
    },
    text: {
      primary: '#dfdfd6',
      secondary: '#dfdfd6',
      disabled: '#dfdfd6',
    },
    background: {
      paper: '#1b1b1f',
      default: '#1b1b1f'
    },
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
})