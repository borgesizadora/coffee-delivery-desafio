import styled, { css } from 'styled-components'

export const CoffeeCardWrapper = styled.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoffeeCardContainer = styled.div`
  ${({ theme }) => css`
    height: 19.4rem;
    width: 16rem;
    border-radius: 6px 36px;
    background: ${theme['base-card']};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
    padding-top: 0;
    img {
      margin-top: -1.5rem;
    }
  `}
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export const LabelsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Label = styled.span`
  ${({ theme }) => css`
    background: ${theme['yellow-light']};
    color: ${theme['yellow-dark']};
    font-weight: 700;
    font-size: 0.625rem;
    padding: 4px 8px;
    border-radius: 999px;
    text-transform: uppercase;
  `}
`
export const Title = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`
export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const CardFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardPrice = styled.div`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    margin-left: 0.2rem;
  }
`

export const CartAndButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddRemoveButtons = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0 0.875rem;
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

export const CartButton = styled.button`
  ${({ theme }) =>
    css`
      border: none;
      display: flex;
      align-items: center;
      background: ${theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
      color: ${theme.white};
      transition: background-color 0.1s;
      :hover {
        background: ${theme['purple']};
      }
    `}
`
