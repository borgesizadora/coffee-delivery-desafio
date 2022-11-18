import { FieldValues, UseFormRegister } from 'react-hook-form'

import { maskCep } from '~/utils/masks'

import { AddressFormType } from '../AddressForm'
import * as S from './styles'

interface InputProps {
  id: keyof AddressFormType
  inputType: string
  label: string
  isOptional?: boolean
  size: 'small' | 'medium' | 'full'
  error: boolean
  isCep?: boolean
  register: UseFormRegister<FieldValues>
}

export const Input = ({
  register,
  label,
  isOptional = false,
  size,
  id,
  error,
  isCep = false
}: InputProps) => {
  function handleChange(e: any) {
    if (isCep) {
      const { value } = e.target
      e.target.value = maskCep(value)
    }
  }
  return (
    <>
      <S.Input size={size} error={error}>
        <input
          id={id}
          placeholder={label}
          {...register(id, {
            shouldUnregister: true
          })}
          onChange={handleChange}
        />
        <label htmlFor={id}>
          {label}
          {isOptional && <span>Opcional</span>}
        </label>
      </S.Input>
    </>
  )
}
