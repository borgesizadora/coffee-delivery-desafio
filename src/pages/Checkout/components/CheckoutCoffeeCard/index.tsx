import coffeeImage from '~/assets/expresso-tradicional.png'
import { Minus, Plus, Trash } from 'phosphor-react'

import * as S from './styles'

interface ICheckoutCoffeeCard {
  name: string
  amount: number
  price: number
}

export const CheckoutCoffeeCard = ({ name, amount, price }: ICheckoutCoffeeCard) => {
  return (
    <S.CardContainer>
      <img src={coffeeImage} />
      <div>
        <S.NameAndPrice>
          {name}
          <span>R$ {price}</span>
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
