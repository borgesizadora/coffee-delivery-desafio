import { useState } from 'react'

import { useCartContext } from '~/contexts/CartContext'
import { formatMoney } from '~/utils/formatMoney'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CoffeeType } from '../..'
import * as S from './styles'

interface ICoffeeCard {
  coffee: CoffeeType
}

export const CoffeeCard = ({ coffee }: ICoffeeCard) => {
  const [amountToAddToCart, setAmountToAddToCart] = useState(1)

  const { addItemToCart } = useCartContext()

  function addOneItemToAmount() {
    setAmountToAddToCart((amount) => amount + 1)
  }
  function removeOneItemToAmount() {
    if (amountToAddToCart > 1) setAmountToAddToCart((amount) => amount - 1)
  }

  function handleAddToCart() {
    addItemToCart(coffee.id, amountToAddToCart)
    setAmountToAddToCart(1)
  }

  return (
    <S.CoffeeCardWrapper>
      <S.CoffeeCardContainer>
        <img src={coffee.image} />
        <S.LabelsContainer>
          {coffee.tags.map((tag) => (
            <S.Label key={tag}>{tag}</S.Label>
          ))}
        </S.LabelsContainer>
        <S.CoffeeInfo>
          <S.Title>{coffee.name}</S.Title>
          <S.Description>{coffee.description}</S.Description>
        </S.CoffeeInfo>
        <S.CardFooter>
          <S.CardPrice>
            R$
            <span>{formatMoney(coffee.price)}</span>
          </S.CardPrice>
          <S.CartAndButtonsContainer>
            <S.AddRemoveButtons>
              <button type="button" title="Remover uma unidade" onClick={removeOneItemToAmount}>
                <Minus weight="bold" />
              </button>
              <span>{amountToAddToCart}</span>
              <button type="button" title="Adicionar uma unidade" onClick={addOneItemToAmount}>
                <Plus weight="bold" />
              </button>
            </S.AddRemoveButtons>
            <S.CartButton type="button" onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill" />
            </S.CartButton>
          </S.CartAndButtonsContainer>
        </S.CardFooter>
      </S.CoffeeCardContainer>
    </S.CoffeeCardWrapper>
  )
}
