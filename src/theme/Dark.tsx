import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#999999',
      dark: '#6b6b6b',
      light: '#adadad',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF0035',
      dark: '#b20025',
      light: '#ff335d',
      contrastText: '#fff',
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
})
