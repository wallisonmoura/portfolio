import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#00426a',
      dark: '#005F98',
      light: '#337FAC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF0035',
      dark: '#b20025',
      light: '#ff335d',
      contrastText: '#fff',
    },
    background: {
      default: grey[100],
      paper: grey[50],
    },
    text: {
      primary: '#373737',
    },
  },
  typography: {
    fontWeightBold: 'bold',
  },
})
