import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { AddressForm } from './components/AddressForm'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import * as S from './styles'

export const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <S.AreasContainer>
        <h3>Complete seu pedido</h3>
        <S.CheckoutArea>
          <AddressForm />
        </S.CheckoutArea>
        <S.CheckoutArea>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega. Escolha uma forma que deseja pagar</p>
            </div>
          </header>
          <S.PaymentMethodContainer>
            <S.PaymentMethod type="button">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </S.PaymentMethod>
            <S.PaymentMethod type="button">
              <Bank size={16} />
              <span>Cartão de débito</span>
            </S.PaymentMethod>
            <S.PaymentMethod type="button">
              <Money size={16} />
              <span>Dinheiro</span>
            </S.PaymentMethod>
          </S.PaymentMethodContainer>
        </S.CheckoutArea>
      </S.AreasContainer>
      <S.AreasContainer>
        <h3>Cafés selecionados</h3>
        <S.CheckoutItemsArea>
          <S.CoffeesList>
            <CheckoutCoffeeCard name="Expresso Tradicional" amount={1} price={9.99} />
            <CheckoutCoffeeCard name="Expresso Tradicional" amount={1} price={9.99} />
            <CheckoutCoffeeCard name="Expresso Tradicional" amount={1} price={9.99} />
          </S.CoffeesList>
          <S.ValuesContainer>
            <S.CheckoutItemsAreaRow>
              Total de itens <span>R$ 29.70</span>
            </S.CheckoutItemsAreaRow>
            <S.CheckoutItemsAreaRow>
              Entrega <span>R$ 3.50</span>
            </S.CheckoutItemsAreaRow>
            <S.CheckoutItemsAreaRow isBold>
              Total <span>R$ 33.20</span>
            </S.CheckoutItemsAreaRow>
          </S.ValuesContainer>
          <S.ConfirmButton type="button">Confirmar Pedido</S.ConfirmButton>
        </S.CheckoutItemsArea>
      </S.AreasContainer>
    </S.CheckoutContainer>
  )
}
