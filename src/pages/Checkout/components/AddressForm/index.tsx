import { MapPinLine } from 'phosphor-react'

import { Input } from '../Input'
import * as S from './styles'

export const AddressForm = () => {
  return (
    <S.AddressForm>
      <header>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <Input inputType="text" id="cep" label="CEP" size="medium" />
      <Input inputType="text" id="rua" label="Rua" isOptional size="full" />
      <S.InputGroupContainer>
        <Input inputType="text" id="numero" label="Número" isOptional size="medium" />
        <Input inputType="text" id="complemento" label="Complemento" isOptional size="full" />
      </S.InputGroupContainer>
      <S.InputGroupContainer>
        <Input inputType="text" id="bairro" label="Bairro" size="medium" />
        <Input inputType="text" id="cidade" label="Cidade" size="full" />
        <Input inputType="text" id="uf" label="UF" size="small" />
      </S.InputGroupContainer>
    </S.AddressForm>
  )
}
