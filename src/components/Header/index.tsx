import { NavLink } from 'react-router-dom'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import * as S from './styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderNav>
          <NavLink to="/" title="Home">
            <img src={logoCoffeeDelivery} alt="" />
          </NavLink>
          <div>
            <S.AddressButton>
              <MapPin size={22} weight="fill" />
              <span>Porto Alegre, RS</span>
            </S.AddressButton>
            <NavLink to="checkout" title="Ir para Checkout">
              <S.CartButton>
                <ShoppingCart size={22} weight="fill" />
              </S.CartButton>
            </NavLink>
          </div>
        </S.HeaderNav>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
