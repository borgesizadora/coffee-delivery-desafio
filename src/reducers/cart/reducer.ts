import { PaymentMethodType } from '~/contexts/CartContext'
import { ICheckoutCoffeeCard } from '~/pages/Checkout/components/CheckoutCoffeeCard'

import { CartActions, CartActionsType } from './actions'

interface CartState {
  itemsInCart: ICheckoutCoffeeCard[]
  paymentMethod: PaymentMethodType
  showPaymentNotSelectedError: boolean
}

export function cartReducer(state: CartState, action: CartActionsType) {
  if (action.type === CartActions.SET_PAYMENT_METHOD) {
    return {
      ...state,
      paymentMethod: action.payload.method,
      showPaymentNotSelectedError: false
    }
  }
  if (action.type === CartActions.REMOVE_ITEM_FROM_CART) {
    const oldItems = state.itemsInCart
    const itemsWithoutRemovedOne = oldItems.filter((item) => item.id !== action.payload.itemId)
    return { ...state, itemsInCart: itemsWithoutRemovedOne }
  }
  if (action.type === CartActions.ADD_ITEM_TO_CART) {
    const { itemId, amount } = action.payload
    const oldItems = state.itemsInCart
    const isItemInCart = oldItems.find((item) => item.id === itemId)

    const itemsWithAddedOne = isItemInCart
      ? oldItems.map((item) => {
          if (item.id === action.payload.itemId) return { id: itemId, amount: item.amount + amount }
          return item
        })
      : [...oldItems, { id: itemId, amount }]
    return { ...state, itemsInCart: itemsWithAddedOne }
  }
  if (action.type === CartActions.REMOVE_ONE_ITEM_FROM_CART) {
    const { itemId } = action.payload

    const oldItems = state.itemsInCart

    const isOnlyOneItemInCart = oldItems.find((item) => item.id === itemId)?.amount === 1
    if (isOnlyOneItemInCart) {
      const filteredItems = oldItems.filter((item) => item.id !== itemId)
      return { ...state, itemsInCart: filteredItems }
    }

    const itemsWithRemovedOne = oldItems.map((item) => {
      if (item.id === itemId) return { id: itemId, amount: item.amount - 1 }
      return item
    })
    return { ...state, itemsInCart: itemsWithRemovedOne }
  }
  if (action.type === CartActions.CLEAR_CART) {
    return { ...state, itemsInCart: [] }
  }
  return state
}
