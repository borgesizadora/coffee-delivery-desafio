import styled from 'styled-components'

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
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
  svg {
    color: ${(props) => props.theme.purple};
  }
  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }
`
