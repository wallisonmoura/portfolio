/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
  drawerOptions: IDrawerOptions[]
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

interface AppThemeContext {
  children: React.ReactNode
}

interface IDrawerOptions {
  icon: React.ReactElement
  path: string
  label: string
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const AppDrawerProvider: React.FC<AppThemeContext> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const handleDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    [],
  )

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawerOpen,
        drawerOptions,
        isDrawerOpen,
        setDrawerOptions: handleDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
