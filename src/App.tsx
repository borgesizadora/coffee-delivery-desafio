import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { AddressContextProvider } from './contexts/AddressContext'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AddressContextProvider>
          <CartContextProvider>
            <Router />
            <GlobalStyle />
            <Toaster />
          </CartContextProvider>
        </AddressContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
