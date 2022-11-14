import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import coffeeImage from '../../../../assets/expresso-tradicional.png'
import * as S from './styles'

export const CoffeeCard = () => {
  return (
    <S.CoffeeCardWrapper>
      <S.CoffeeCardContainer>
        <img src={coffeeImage} />
        <S.LabelsContainer>
          <S.Label>TRADICIONAL</S.Label>
          <S.Label>TRADICIONAL</S.Label>
        </S.LabelsContainer>
        <S.CoffeeInfo>
          <S.Title>Expresso Tradicional</S.Title>
          <S.Description>O tradicional café feito com água quente e grãos moídos</S.Description>
        </S.CoffeeInfo>
        <S.CardFooter>
          <S.CardPrice>
            R$
            <span>9,90</span>
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
