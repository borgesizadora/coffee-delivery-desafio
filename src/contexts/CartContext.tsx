import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { Coffees } from '~/mocks/coffees'
import { ICheckoutCoffeeCard } from '~/pages/Checkout/components/CheckoutCoffeeCard'

type PaymentMethodType = 'CREDIT' | 'DEBIT' | 'CASH'
interface CartContextType {
  itemsInCart: ICheckoutCoffeeCard[]
  totalForItems: number
  deliveryCost: number
  paymentMethod?: PaymentMethodType
  totalItemsInCart: number
  setPayment: (method: PaymentMethodType) => void
  addItemToCart: (id: number, amount: number) => void
  removeItemFromCart: (id: number) => void
  removeOneItemFromCart: (id: number) => void
}

const CartContext = createContext({} as CartContextType)

interface ICartContextProvider {
  children: ReactNode
}

const DELIVERY_COST = 3.5

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const storedCartAsJSON = localStorage.getItem('@coffee-delivery:items-in-cart-1.0.0')

  const [itemsInCart, setItemsInCart] = useState<ICheckoutCoffeeCard[]>(
    storedCartAsJSON ? JSON.parse(storedCartAsJSON) : []
  )
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>()

  const deliveryCost = DELIVERY_COST

  function setPayment(method: PaymentMethodType) {
    setPaymentMethod(method)
  }

  function removeItemFromCart(id: number) {
    const oldItems = itemsInCart
    const itemsWithoutRemovedOne = oldItems.filter((item) => item.id !== id)

    setItemsInCart(itemsWithoutRemovedOne)
  }

  function addItemToCart(id: number, amount: number) {
    const oldItems = itemsInCart

    const isItemInCart = itemsInCart.find((item) => item.id === id)

    const itemsWithAddedOne = isItemInCart
      ? oldItems.map((item) => {
          if (item.id === id) return { id, amount: item.amount + amount }
          return item
        })
      : [...oldItems, { id, amount }]

    setItemsInCart(itemsWithAddedOne)
  }

  function removeOneItemFromCart(id: number) {
    const oldItems = itemsInCart

    const isOnlyOneItemInCart = oldItems.find((item) => item.id === id)?.amount === 1
    if (isOnlyOneItemInCart) {
      removeItemFromCart(id)
      return
    }

    const itemsWithAddedOne = oldItems.map((item) => {
      if (item.id === id) return { id, amount: item.amount - 1 }
      return item
    })

    setItemsInCart(itemsWithAddedOne)
  }

  const totalItemsInCart = itemsInCart.reduce((total, item) => {
    return (total += item.amount)
  }, 0)

  const totalForItems = itemsInCart.reduce((total, item) => {
    const coffee = Coffees.find((coffee) => coffee.id === item.id)
    if (coffee) total += item.amount * coffee.price
    return total
  }, 0)

  useEffect(() => {
    const cartJSON = JSON.stringify(itemsInCart)
    localStorage.setItem('@coffee-delivery:items-in-cart-1.0.0', cartJSON)
  }, [itemsInCart])

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        totalForItems,
        deliveryCost,
        paymentMethod,
        totalItemsInCart,
        setPayment,
        addItemToCart,
        removeItemFromCart,
        removeOneItemFromCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
