import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { CoffeeType } from '../..'
import * as S from './styles'

interface ICoffeeCard {
  coffee: CoffeeType
}

export const CoffeeCard = ({ coffee }: ICoffeeCard) => {
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
            <span>{coffee.price}</span>
          </S.CardPrice>
          <S.CartAndButtonsContainer>
            <S.AddRemoveButtons>
              <button type="button" title="Remover uma unidade">
                <Minus weight="bold" />
              </button>
              <span>1</span>
              <button type="button" title="Adicionar uma unidade">
                <Plus weight="bold" />
              </button>
            </S.AddRemoveButtons>
            <S.CartButton>
              <ShoppingCart size={22} weight="fill" />
            </S.CartButton>
          </S.CartAndButtonsContainer>
        </S.CardFooter>
      </S.CoffeeCardContainer>
    </S.CoffeeCardWrapper>
  )
}
