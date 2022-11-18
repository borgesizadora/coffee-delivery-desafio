import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '~/assets/logo-coffee-delivery.svg'
import { useAddressContext } from '~/contexts/AddressContext'
import { useCartContext } from '~/contexts/CartContext'
import { MapPin, ShoppingCart } from 'phosphor-react'

import * as S from './styles'

export const Header = () => {
  const { totalItemsInCart } = useCartContext()
  const { address } = useAddressContext()
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderNav>
          <NavLink to="/" title="Home">
            <img src={logoCoffeeDelivery} alt="" />
          </NavLink>
          <div>
            <S.AddressButton title="Adicione seu endereço">
              <MapPin size={22} weight="fill" />
              {address.city && address.uf && (
                <span>
                  {address.city}, {address.uf}
                </span>
              )}
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
