import { Routes, Route } from 'react-router-dom'

import { Layout } from './layouts/Layout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  </Routes>
)
