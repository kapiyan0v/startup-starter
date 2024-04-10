import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
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
    action: {
      active: '#fff',
      hover: 'rgba(225, 225, 225, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(225, 225, 225, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(225, 225, 225, 0.3)',
      disabledOpacity: 0.38,
      disabledBackground: 'rgba(225, 225, 225, 0.12)',
      focus: 'rgba(225, 225, 225, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
