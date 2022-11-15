import * as S from './styles'

interface InputProps {
  id: string
  inputType: string
  label: string
  isOptional?: boolean
  size: 'small' | 'medium' | 'full'
}

export const Input = ({ inputType, label, isOptional = false, size, id }: InputProps) => {
  return (
    <S.Input size={size}>
      <input id={id} type={inputType} placeholder={label} />
      <label htmlFor={id}>
        {label}
        {isOptional && <span>Opcional</span>}
      </label>
    </S.Input>
  )
}
