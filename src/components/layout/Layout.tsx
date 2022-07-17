import * as UI from '@mui/material'

import { MenuLateral } from '../menu-lateral/MenuLateral'

interface ILayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const theme = UI.useTheme()
  const smDown = UI.useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = UI.useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <MenuLateral />

      <UI.Stack
        marginTop={smDown ? theme.spacing(6) : 0}
        marginLeft={smDown ? 0 : theme.spacing(28)}
        padding={theme.spacing(2)}
        height={mdDown ? 'auto' : '100vh'}
      >
        {children}
      </UI.Stack>
    </>
  )
}
