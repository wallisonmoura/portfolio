/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider, Box } from '@mui/material'

import { LightTheme, DarkTheme } from '../theme'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

interface AppThemeContext {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<AppThemeContext> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light',
    )
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme

    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
