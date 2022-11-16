import { Minus, Plus, Trash } from 'phosphor-react'

import * as S from './styles'

export interface ICheckoutCoffeeCard {
  image: string
  amount: number
  name: string
  price: number
}

export const CheckoutCoffeeCard = ({ image, amount, name, price }: ICheckoutCoffeeCard) => {
  return (
    <S.CardContainer>
      <img src={image} />
      <div>
        <S.NameAndPrice>
          {name}
          <span>R$ {price * amount}</span>
        </S.NameAndPrice>
        <S.ButtonsContainer>
          <S.AddRemoveButtons>
            <button type="button" title="Remover uma unidade">
              <Minus weight="bold" />
            </button>
            <span>{amount}</span>
            <button type="button" title="Adicionar uma unidade">
              <Plus weight="bold" />
            </button>
          </S.AddRemoveButtons>
          <S.DeleteCoffeeButton>
            <Trash size={16} />
            Remover
          </S.DeleteCoffeeButton>
        </S.ButtonsContainer>
      </div>
    </S.CardContainer>
  )
}
