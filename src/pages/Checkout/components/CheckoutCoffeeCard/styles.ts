import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  gap: 1.25rem;
  max-width: 25rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  & > img {
    width: 4rem;
    height: 4rem;
  }
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`
export const NameAndPrice = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme['base-subtitle']};
  flex-wrap: wrap;
  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddRemoveButtons = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.4rem 0.5rem;

      border-radius: 6px;
      background: ${theme['base-button']};
      button {
        color: ${theme['purple']};
        transition: color 0.1s;
        line-height: 0;
        :hover {
          color: ${theme['purple-dark']};
        }
      }
      span {
        color: ${theme['base-title']};
      }
    `}
`
export const DeleteCoffeeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-transform: uppercase;
  line-height: 1.6;
  font-size: 0.75rem;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  padding: 0.4rem 0.5rem;
  svg {
    color: ${(props) => props.theme.purple};
  }
  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
