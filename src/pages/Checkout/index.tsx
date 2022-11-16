import { useCartContext } from '~/contexts/CartContext'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { AddressForm } from './components/AddressForm'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import * as S from './styles'

export const Checkout = () => {
  const { itemsInCart, deliveryCost, totalForItems, paymentMethod, setPayment } = useCartContext()

  const cartTotal = totalForItems + deliveryCost

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
            <S.PaymentMethod
              type="button"
              isSelected={paymentMethod === 'CREDIT'}
              onClick={() => setPayment('CREDIT')}>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </S.PaymentMethod>
            <S.PaymentMethod
              type="button"
              isSelected={paymentMethod === 'DEBIT'}
              onClick={() => setPayment('DEBIT')}>
              <Bank size={16} />
              <span>Cartão de débito</span>
            </S.PaymentMethod>
            <S.PaymentMethod
              type="button"
              isSelected={paymentMethod === 'CASH'}
              onClick={() => setPayment('CASH')}>
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
            {itemsInCart.map((item) => (
              <CheckoutCoffeeCard
                key={item.name}
                image={item.image}
                name={item.name}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </S.CoffeesList>
          <S.ValuesContainer>
            <S.CheckoutItemsAreaRow>
              Total de itens <span>R$ {totalForItems}</span>
            </S.CheckoutItemsAreaRow>
            <S.CheckoutItemsAreaRow>
              Entrega <span>R$ {deliveryCost}</span>
            </S.CheckoutItemsAreaRow>
            <S.CheckoutItemsAreaRow isBold>
              Total <span>R$ {cartTotal}</span>
            </S.CheckoutItemsAreaRow>
          </S.ValuesContainer>
          <S.ConfirmButton type="button">Confirmar Pedido</S.ConfirmButton>
        </S.CheckoutItemsArea>
      </S.AreasContainer>
    </S.CheckoutContainer>
  )
}
