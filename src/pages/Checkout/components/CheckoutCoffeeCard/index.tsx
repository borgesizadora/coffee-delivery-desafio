import { useCartContext } from '~/contexts/CartContext'
import { Coffees } from '~/mocks/coffees'
import { formatMoney } from '~/utils/formatMoney'
import { Minus, Plus, Trash } from 'phosphor-react'

import * as S from './styles'

export interface ICheckoutCoffeeCard {
  id: number
  amount: number
}

export const CheckoutCoffeeCard = ({ amount, id }: ICheckoutCoffeeCard) => {
  const { removeItemFromCart, addItemToCart, removeOneItemFromCart } = useCartContext()

  function handleRemoveItemFromCart() {
    removeItemFromCart(id)
  }

  function handleAddOneItemToCart() {
    addItemToCart(id, 1)
  }

  function handleRemoveOneItemFromCart() {
    removeOneItemFromCart(id)
  }

  const coffee = Coffees.find((coffee) => coffee.id === id)
  return (
    <S.CardContainer>
      {coffee && (
        <>
          <img src={coffee.image} />
          <div>
            <S.NameAndPrice>
              {coffee.name}
              <span>R$ {formatMoney(coffee.price * amount)}</span>
            </S.NameAndPrice>
            <S.ButtonsContainer>
              <S.AddRemoveButtons>
                <button
                  type="button"
                  title="Remover uma unidade"
                  onClick={handleRemoveOneItemFromCart}>
                  <Minus weight="bold" />
                </button>
                <span>{amount}</span>
                <button
                  type="button"
                  title="Adicionar uma unidade"
                  onClick={handleAddOneItemToCart}>
                  <Plus weight="bold" />
                </button>
              </S.AddRemoveButtons>
              <S.DeleteCoffeeButton onClick={handleRemoveItemFromCart}>
                <Trash size={16} />
                Remover
              </S.DeleteCoffeeButton>
            </S.ButtonsContainer>
          </div>
        </>
      )}
    </S.CardContainer>
  )
}
