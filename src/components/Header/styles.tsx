import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  background: ${(props) => props.theme.background};
`

export const HeaderContent = styled.div`
  padding: 2rem 1rem;
  margin: auto;
  max-width: 74rem;
  img {
    height: 2.5rem;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const AddressButton = styled.span`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: ${theme['purple-light']};
      padding: 0.5rem;
      border-radius: 6px;

      font-size: 0.875rem;
      color: ${theme['purple-dark']};

      svg {
        color: ${theme.purple};
      }
    `}
`
export const CartButton = styled.span`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      background: ${theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      color: ${theme['yellow-dark']};
    `}
`
