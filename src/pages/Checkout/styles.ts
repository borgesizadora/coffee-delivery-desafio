import styled from 'styled-components'

export const AreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.5rem;
`

export const AddressArea = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  input {
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;
    padding: 0.75rem;
  }
`

export const InputGroupContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
