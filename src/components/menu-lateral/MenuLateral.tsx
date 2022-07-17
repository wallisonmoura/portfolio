import * as UI from '@mui/material'
import * as Icon from '@mui/icons-material'
import foto from '../../assets/perfil.jpeg'

import { useAppThemeContext, useDrawerContext } from '../../context'
import { ListItemLink } from '..'

export const MenuLateral: React.FC = () => {
  const theme = UI.useTheme()
  const smDown = UI.useMediaQuery(theme.breakpoints.down('sm'))

  const { toggleTheme } = useAppThemeContext()
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()

  return (
    <>
      <UI.Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <UI.Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <UI.Box
            width="100%"
            height={theme.spacing(22)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <UI.Avatar
              sx={{
                height: theme.spacing(17),
                width: theme.spacing(17),
              }}
              src={foto}
            />
          </UI.Box>
          <UI.Divider />
          <UI.Box flex={1}>
            <UI.List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  to={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </UI.List>
          </UI.Box>
          <UI.Stack flexDirection="row" gap={3} justifyContent="center">
            <UI.Link
              href="https://www.linkedin.com/in/wallison-moura/"
              rel="noopener"
              target="_blank"
            >
              <UI.IconButton size="small">
                <UI.Avatar sx={{ width: 30, height: 30 }}>
                  <Icon.LinkedIn />
                </UI.Avatar>
              </UI.IconButton>
            </UI.Link>
            <UI.Link
              href="https://github.com/wallisonmoura"
              rel="noopener"
              target="_blank"
            >
              <UI.IconButton size="small">
                <UI.Avatar sx={{ width: 30, height: 30 }}>
                  <Icon.GitHub />
                </UI.Avatar>
              </UI.IconButton>
            </UI.Link>
            <UI.Link
              href="https://www.instagram.com/wallison.moura/"
              rel="noopener"
              target="_blank"
            >
              <UI.IconButton size="small">
                <UI.Avatar sx={{ width: 30, height: 30 }}>
                  <Icon.Instagram />
                </UI.Avatar>
              </UI.IconButton>
            </UI.Link>
          </UI.Stack>
          <UI.Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={theme.spacing(5)}
            marginBottom={theme.spacing(2)}
          >
            <UI.Switch onChange={toggleTheme} />
          </UI.Box>
        </UI.Box>
      </UI.Drawer>
      {smDown && (
        <UI.AppBar
          sx={{
            background: `${theme.palette.background.default}`,
            marginBottom: 2,
          }}
        >
          <UI.Toolbar>
            <UI.IconButton onClick={toggleDrawerOpen}>
              <Icon.Menu />
            </UI.IconButton>
          </UI.Toolbar>
        </UI.AppBar>
      )}
    </>
  )
}
