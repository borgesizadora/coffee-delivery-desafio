import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { AddressFormType } from '~/pages/Checkout/components/AddressForm'

interface AddressContextType {
  address: AddressFormType
  setNewAddress: (address: AddressFormType) => void
}

const AddressContext = createContext({} as AddressContextType)

interface AddressContextProviderProps {
  children: ReactNode
}

export function AddressContextProvider({ children }: AddressContextProviderProps) {
  const storedAddressAsJSON = localStorage.getItem('@coffee-delivery:address-1.0.0')
  const [address, setAddress] = useState<AddressFormType>(
    storedAddressAsJSON
      ? JSON.parse(storedAddressAsJSON)
      : ({
          cep: '',
          street: '',
          number: '',
          complement: '',
          neighborhood: '',
          city: '',
          uf: ''
        } as AddressFormType)
  )
  const setNewAddress = (address: AddressFormType) => setAddress(address)

  useEffect(() => {
    const addressJSON = JSON.stringify(address)
    localStorage.setItem('@coffee-delivery:address-1.0.0', addressJSON)
  }, [address])

  return (
    <AddressContext.Provider
      value={{
        address,
        setNewAddress
      }}>
      {children}
    </AddressContext.Provider>
  )
}

export function useAddressContext() {
  return useContext(AddressContext)
}
