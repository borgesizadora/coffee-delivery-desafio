import { Input } from './components/Input'
import * as S from './styles'

export const Checkout = () => {
  return (
    <div>
      <S.AreasContainer>
        <h3>Complete seu pedido</h3>
        <S.AddressArea>
          <S.AddressForm>
            <header>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </header>
            <Input inputType="text" label="CEP" size="medium" />
            <Input inputType="text" label="Rua" isOptional size="full" />
            <S.InputGroupContainer>
              <Input inputType="text" label="Número" isOptional size="medium" />
              <Input inputType="text" label="Complemento" isOptional size="full" />
            </S.InputGroupContainer>
            <S.InputGroupContainer>
              <Input inputType="text" label="Bairro" size="medium" />
              <Input inputType="text" label="Cidade" size="full" />
              <Input inputType="text" label="UF" size="small" />
            </S.InputGroupContainer>
          </S.AddressForm>
        </S.AddressArea>
        <S.AddressArea>Pagamento</S.AddressArea>
      </S.AreasContainer>
      <S.AreasContainer>
        <h3>Cafés selecionados</h3>
        <S.AddressArea>expresso</S.AddressArea>
      </S.AreasContainer>
    </div>
  )
}
