import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Coffees } from '~/mocks/coffees'
import { ICheckoutCoffeeCard } from '~/pages/Checkout/components/CheckoutCoffeeCard'

const DELIVERY_COST = 3.5

type PaymentMethodType = 'CREDIT' | 'DEBIT' | 'CASH'
interface CartContextType {
  itemsInCart: ICheckoutCoffeeCard[]
  totalForItems: number
  deliveryCost: number
  paymentMethod?: PaymentMethodType
  totalItemsInCart: number
  showPaymentNotSelectedError: boolean
  setShowPaymentNotSelectedError: (show: boolean) => void
  setPayment: (method: PaymentMethodType) => void
  addItemToCart: (id: number, amount: number) => void
  removeItemFromCart: (id: number) => void
  removeOneItemFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext({} as CartContextType)

interface ICartContextProvider {
  children: ReactNode
}

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const storedCartAsJSON = localStorage.getItem('@coffee-delivery:items-in-cart-1.0.0')
  const [showPaymentNotSelectedError, setShowPaymentError] = useState(false)

  const [itemsInCart, setItemsInCart] = useState<ICheckoutCoffeeCard[]>(
    storedCartAsJSON ? JSON.parse(storedCartAsJSON) : []
  )
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>()

  function setPayment(method: PaymentMethodType) {
    setPaymentMethod(method)
    setShowPaymentError(false)
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
    toast.success('Item adicionado ao carrinho')
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

    toast.success('Item removido do carrinho')
  }

  function clearCart() {
    setItemsInCart([])
  }

  function setShowPaymentNotSelectedError(show: boolean) {
    setShowPaymentError(show)
  }

  const totalItemsInCart = itemsInCart.reduce((total, item) => {
    return (total += item.amount)
  }, 0)

  const totalForItems = itemsInCart.reduce((total, item) => {
    const coffee = Coffees.find((coffee) => coffee.id === item.id)
    if (coffee) total += item.amount * coffee.price
    return total
  }, 0)

  const deliveryCost = totalForItems ? DELIVERY_COST : 0

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
        showPaymentNotSelectedError,
        setShowPaymentNotSelectedError,
        setPayment,
        addItemToCart,
        removeItemFromCart,
        removeOneItemFromCart,
        clearCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
