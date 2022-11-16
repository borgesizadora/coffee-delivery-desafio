import { createContext, ReactNode, useContext, useState } from 'react'

import { Coffees } from '~/mocks/coffees'
import { ICheckoutCoffeeCard } from '~/pages/Checkout/components/CheckoutCoffeeCard'

type PaymentMethodType = 'CREDIT' | 'DEBIT' | 'CASH'
interface CartContextType {
  itemsInCart: ICheckoutCoffeeCard[]
  totalForItems: number
  deliveryCost: number
  paymentMethod?: PaymentMethodType
  setPayment: (method: PaymentMethodType) => void
}

const CartContext = createContext({} as CartContextType)

interface ICartContextProvider {
  children: ReactNode
}

const INITIAL_CART = [
  {
    image: Coffees[0].image,
    amount: 4,
    name: Coffees[0].name,
    price: Coffees[0].price
  }
]

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [itemsInCart, setItems] = useState<ICheckoutCoffeeCard[]>(INITIAL_CART)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>()
  const totalForItems = 40
  const deliveryCost = 3.5

  function setPayment(method: PaymentMethodType) {
    setPaymentMethod(method)
  }

  return (
    <CartContext.Provider
      value={{ itemsInCart, totalForItems, deliveryCost, paymentMethod, setPayment }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
