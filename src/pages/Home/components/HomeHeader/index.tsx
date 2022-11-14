import { ShoppingCart, Coffee, Package, Timer } from 'phosphor-react'

import coffeeImage from '../../../../assets/coffee-image.png'
import headerBackground from '../../../../assets/home-header-background.svg'
import * as S from './styles'
export const HomeHeader = () => {
  return (
    <S.HomeHeader>
      <S.HomeHeaderInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        <S.HomeHeaderFeaturesContainer>
          <div>
            <S.HomeHeaderFeature color="yellow-dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </S.HomeHeaderFeature>
            <S.HomeHeaderFeature color="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </S.HomeHeaderFeature>
            <S.HomeHeaderFeature color="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </S.HomeHeaderFeature>
            <S.HomeHeaderFeature color="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho ate você</p>
            </S.HomeHeaderFeature>
          </div>
        </S.HomeHeaderFeaturesContainer>
      </S.HomeHeaderInfo>
      <S.HomeHeaderCoffeeImage>
        <img src={coffeeImage} alt="Um copo de café com rótulo escrito 'Coffee Delivery'" />
      </S.HomeHeaderCoffeeImage>
      <S.HomeHeaderBackground backgroundImage={headerBackground} />
    </S.HomeHeader>
  )
}
