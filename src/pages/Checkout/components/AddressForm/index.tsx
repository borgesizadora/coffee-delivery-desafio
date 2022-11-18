import { useFormContext } from 'react-hook-form'

import { MapPinLine } from 'phosphor-react'
import * as zod from 'zod'

import { Input } from '../Input'
import * as S from './styles'

export const addressFormSchema = zod.object({
  cep: zod.string().min(9).max(9),
  street: zod.string().optional(),
  number: zod.string().optional(),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3),
  city: zod.string().min(3),
  uf: zod.string().min(2)
})

export type AddressFormType = zod.infer<typeof addressFormSchema>

export const AddressForm = () => {
  const { register, formState } = useFormContext()

  return (
    <S.AddressForm id="address-form">
      <header>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <Input
        inputType="text"
        id="cep"
        label="CEP"
        size="medium"
        register={register}
        error={!!formState.errors.cep?.message}
        isCep
      />
      <Input
        inputType="text"
        id="street"
        label="Rua"
        isOptional
        size="full"
        register={register}
        error={!!formState.errors.street?.message}
      />
      <S.InputGroupContainer>
        <Input
          inputType="text"
          id="number"
          label="Número"
          isOptional
          size="medium"
          register={register}
          error={!!formState.errors.number?.message}
        />
        <Input
          inputType="text"
          id="complement"
          label="Complemento"
          isOptional
          size="full"
          register={register}
          error={!!formState.errors.complement?.message}
        />
      </S.InputGroupContainer>
      <S.InputGroupContainer>
        <Input
          inputType="text"
          id="neighborhood"
          label="Bairro"
          size="medium"
          register={register}
          error={!!formState.errors.neighborhood?.message}
        />
        <Input
          inputType="text"
          id="city"
          label="Cidade"
          size="full"
          register={register}
          error={!!formState.errors.city?.message}
        />
        <Input
          inputType="text"
          id="uf"
          label="UF"
          size="small"
          register={register}
          error={!!formState.errors.uf?.message}
        />
      </S.InputGroupContainer>
    </S.AddressForm>
  )
}
