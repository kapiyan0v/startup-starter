import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes.tsx";
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: '#dfdfd6'
    },
    secondary: {
      main: '#060607'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
