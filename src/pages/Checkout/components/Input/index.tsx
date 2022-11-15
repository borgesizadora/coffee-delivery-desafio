import * as S from './styles'

interface InputProps {
  inputType: string
  label: string
  isOptional?: boolean
  size: 'small' | 'medium' | 'full'
}

export const Input = ({ inputType, label, isOptional = false, size }: InputProps) => {
  return (
    <S.Input size={size}>
      <input id={label} type={inputType} placeholder={label} />
      <label htmlFor={label}>{label}</label>
      {isOptional && <span>Opcional</span>}
    </S.Input>
  )
}
