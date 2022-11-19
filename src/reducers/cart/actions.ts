import { PaymentMethodType } from '~/contexts/CartContext'

export enum CartActions {
  SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ONE_ITEM_FROM_CART = 'REMOVE_ONE_ITEM_FROM_CART',
  CLEAR_CART = 'CLEAR_CART'
}
export type CartActionsType =
  | {
      type: CartActions.SET_PAYMENT_METHOD
      payload: {
        method: PaymentMethodType
      }
    }
  | {
      type: CartActions.REMOVE_ITEM_FROM_CART
      payload: {
        itemId: number
      }
    }
  | {
      type: CartActions.ADD_ITEM_TO_CART
      payload: {
        itemId: number
        amount: number
      }
    }
  | {
      type: CartActions.REMOVE_ONE_ITEM_FROM_CART
      payload: {
        itemId: number
      }
    }
  | {
      type: CartActions.CLEAR_CART
    }
