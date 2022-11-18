import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { useAddressContext } from '~/contexts/AddressContext'
import { useCartContext } from '~/contexts/CartContext'
import { formatMoney } from '~/utils/formatMoney'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { zodResolver } from '@hookform/resolvers/zod'

import { AddressForm, addressFormSchema, AddressFormType } from './components/AddressForm'
import { CheckoutCoffeeCard } from './components/CheckoutCoffeeCard'
import { ConfirmOrder } from './components/ConfirmOrder'
import * as S from './styles'

enum Steps {
  One = 0,
  Two = 1
}

export const Checkout = () => {
  const [stepActive, setStepActive] = useState<Steps>(Steps.One)

  const {
    itemsInCart,
    deliveryCost,
    totalForItems,
    paymentMethod,
    showPaymentNotSelectedError,
    setPayment,
    setShowPaymentNotSelectedError,
    clearCart
  } = useCartContext()

  const { setNewAddress } = useAddressContext()

  const addressForm = useForm<AddressFormType>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: ''
    }
  })

  const { handleSubmit, clearErrors } = addressForm
  const isCartEmpty = !itemsInCart.length

  function handleCheckout() {
    handleSubmit((data) => {
      setNewAddress(data)

      if (!paymentMethod) setShowPaymentNotSelectedError(true)

      if (!paymentMethod || isCartEmpty) {
        clearErrors()
        return
      }
      clearCart()
      setStepActive(Steps.Two)
    })()
  }

  const cartTotal = totalForItems + deliveryCost

  useEffect(() => {
    setShowPaymentNotSelectedError(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return stepActive === 0 ? (
    <FormProvider {...addressForm}>
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
            {showPaymentNotSelectedError && (
              <S.PaymentMethodWarning>Escolha uma forma de pagamento</S.PaymentMethodWarning>
            )}
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
            {isCartEmpty ? (
              <S.EmptyCart>
                <p>Seu carrinho está vazio</p>
                <Link to="/">Voltar para a página inicial</Link>
              </S.EmptyCart>
            ) : (
              <S.CoffeesList>
                {itemsInCart.map((item) => (
                  <CheckoutCoffeeCard key={item.id} amount={item.amount} id={item.id} />
                ))}
              </S.CoffeesList>
            )}
            <S.ValuesContainer>
              <S.CheckoutItemsAreaRow>
                Total de itens <span>R$ {formatMoney(totalForItems)}</span>
              </S.CheckoutItemsAreaRow>
              <S.CheckoutItemsAreaRow>
                Entrega <span>R$ {formatMoney(deliveryCost)}</span>
              </S.CheckoutItemsAreaRow>
              <S.CheckoutItemsAreaRow isBold>
                Total <span>R$ {formatMoney(cartTotal)}</span>
              </S.CheckoutItemsAreaRow>
            </S.ValuesContainer>
            <S.ConfirmButton type="button" onClick={handleCheckout} disabled={isCartEmpty}>
              Confirmar Pedido
            </S.ConfirmButton>
          </S.CheckoutItemsArea>
        </S.AreasContainer>
      </S.CheckoutContainer>
    </FormProvider>
  ) : (
    <ConfirmOrder />
  )
}
