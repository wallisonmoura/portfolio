import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components'

import { AppDrawerProvider, AppThemeProvider } from './context'
import { AppRouter } from './routes'

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  )
}
