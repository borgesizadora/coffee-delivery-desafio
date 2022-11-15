import styled from 'styled-components'

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  header {
    display: flex;
    gap: 0.5rem;
    h4 {
      font-weight: 400;
      margin-bottom: 0.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
    }
    & > svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
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
