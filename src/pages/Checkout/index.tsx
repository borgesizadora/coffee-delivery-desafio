import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { AddressForm } from './components/AddressForm'
import * as S from './styles'

export const Checkout = () => {
  return (
    <div>
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
        <S.CheckoutItemsArea>expresso</S.CheckoutItemsArea>
      </S.AreasContainer>
    </div>
  )
}
