import { createContext, ReactNode, useContext, useState } from 'react'

export interface AddressType {
  cep: string
  street: string
  number?: string
  complement?: string
  neighborhood: string
  city: string
}
interface AddressContextType {
  address: AddressType
  setNewAddress: (address: AddressType) => void
}

const AddressContext = createContext({} as AddressContextType)

interface AddressContextProviderProps {
  children: ReactNode
}

export function AddressContextProvider({ children }: AddressContextProviderProps) {
  const [address, setAddress] = useState<AddressType>({ cep: 'cep', city: 'city' } as AddressType)

  const setNewAddress = (address: AddressType) => setAddress(address)

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
