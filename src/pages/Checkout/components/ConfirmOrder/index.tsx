import confirmOrder from '~/assets/confirm-order.svg'
import { useAddressContext } from '~/contexts/AddressContext'
import { useCartContext } from '~/contexts/CartContext'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import * as S from './styles'

export const ConfirmOrder = () => {
  const { address } = useAddressContext()
  const { paymentMethod } = useCartContext()
  return (
    <div>
      <S.ConfirmOrderHeader>
        <h2>Uhu! Pedido Confirmado</h2>
        <p>Agora é só aguardar que logo o cafe chegará até você</p>
      </S.ConfirmOrderHeader>
      <S.InfoAndImageWrapper>
        <S.InfoContainer>
          <S.InfoCard>
            <S.InfoCardIcon color="purple">
              <MapPin weight="fill" />
            </S.InfoCardIcon>
            <div>
              <span>
                Entrega em
                <strong>
                  {address.street && ` ${address.street}${address.number && `, ${address.number}`}`}
                </strong>
              </span>
              <span>{`${address.neighborhood} - ${address.city}, ${address.uf}`}</span>
            </div>
          </S.InfoCard>
          <S.InfoCard>
            <S.InfoCardIcon color="yellow">
              <Timer weight="fill" />
            </S.InfoCardIcon>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>
          </S.InfoCard>
          <S.InfoCard>
            <S.InfoCardIcon color="yellow-dark">
              <CurrencyDollar weight="fill" />
            </S.InfoCardIcon>
            <div>
              <span>Pagamento na entrega</span>
              <strong>
                {paymentMethod === 'CASH'
                  ? 'Dinheiro'
                  : paymentMethod === 'CREDIT'
                  ? 'Cartão de Crédito'
                  : 'Cartão de Débito'}
              </strong>
            </div>
          </S.InfoCard>
        </S.InfoContainer>
        <img src={confirmOrder} />
      </S.InfoAndImageWrapper>
    </div>
  )
}
