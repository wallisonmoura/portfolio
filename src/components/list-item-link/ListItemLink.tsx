import * as UI from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

interface IListItemLinkProps {
  to: string
  icon: React.ReactElement
  label: string
  onClick: (() => void) | undefined
}

export const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate()

  const resolvedPath = useResolvedPath(to)
  const match = useMatch({ path: resolvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to)
    onClick?.()
  }

  return (
    <UI.ListItemButton selected={!!match} onClick={handleClick}>
      <UI.ListItemIcon>
        <UI.Icon>{icon}</UI.Icon>
      </UI.ListItemIcon>
      <UI.ListItemText primary={label} />
    </UI.ListItemButton>
  )
}
