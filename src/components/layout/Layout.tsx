import * as UI from '@mui/material'

import { MenuLateral } from '../menu-lateral/MenuLateral'

interface ILayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const theme = UI.useTheme()
  const smDown = UI.useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <MenuLateral />

      <UI.Stack
        marginTop={smDown ? theme.spacing(4) : 0}
        marginLeft={smDown ? 0 : theme.spacing(28)}
        padding={2}
      >
        {children}
      </UI.Stack>
    </>
  )
}
