import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    display: block;
  }
`

export const AreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.5rem;
`

export const CheckoutArea = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  & > header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    h4 {
      font-weight: 400;
      margin-bottom: 0.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`
export const CheckoutItemsArea = styled(CheckoutArea)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`
export const CoffeesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 25rem;
`
interface ICheckoutItemsAreaRow {
  isBold?: boolean
}
export const CheckoutItemsAreaRow = styled.div<ICheckoutItemsAreaRow>`
  ${({ isBold = false, theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    color: ${isBold ? theme['base-subtitle'] : theme['base-text']};
    font-weight: ${isBold ? 700 : 400};
    font-size: ${isBold ? '1.25rem' : '1rem'};
  `}
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  @media (max-width: 435px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`

export const PaymentMethod = styled.button`
  width: 11.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};
  transition: all 0.1s;
  @media (max-width: 435px) {
    width: 100%;
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.button`
  text-transform: uppercase;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 0.5rem;
  line-height: 1.6;
  border-radius: 6px;
  width: 100%;
  margin-top: 1.5rem;
  transition: background-color 0.1s;
  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
