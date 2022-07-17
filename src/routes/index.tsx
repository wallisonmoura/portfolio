import { Route, Routes, Navigate } from 'react-router-dom'

import { useEffect } from 'react'
import * as Icon from '@mui/icons-material'

import { Sobre, Experiencias, Educacao, Habilidades } from '../pages'

import { useDrawerContext } from '../context'

export const AppRouter = () => {
  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: <Icon.Person />,
        path: '/sobre',
        label: 'sobre',
      },

      {
        icon: <Icon.Work />,
        path: '/experiencias',
        label: 'Experiências',
      },
      {
        icon: <Icon.School />,
        path: '/educacao',
        label: 'Educação',
      },
      {
        icon: <Icon.List />,
        path: '/habilidades',
        label: 'Habilidades',
      },
    ])
  }, [])
  return (
    <Routes>
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/experiencias" element={<Experiencias />} />
      <Route path="/educacao" element={<Educacao />} />
      <Route path="/habilidades" element={<Habilidades />} />

      <Route path="*" element={<Navigate to="/sobre" />} />
    </Routes>
  )
}
