import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '~/assets/logo-coffee-delivery.svg'
import { useCartContext } from '~/contexts/CartContext'
import { MapPin, ShoppingCart } from 'phosphor-react'

import * as S from './styles'

export const Header = () => {
  const { totalItemsInCart } = useCartContext()
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
                {!!totalItemsInCart && (
                  <span>{totalItemsInCart < 100 ? totalItemsInCart : '+99'}</span>
                )}
              </S.CartButton>
            </NavLink>
          </div>
        </S.HeaderNav>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
