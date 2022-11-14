import { Outlet } from 'react-router-dom'

import { Header } from '~/components/Header'

import * as S from './styles'

export const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.LayoutContainer>
  )
}
