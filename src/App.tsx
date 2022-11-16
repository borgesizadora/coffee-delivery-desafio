import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { AddressContextProvider } from './contexts/AddressContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AddressContextProvider>
          <Router />
          <GlobalStyle />
        </AddressContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
