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
  @media (max-width: 768px) {
    padding: 1rem;
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
      position: relative;
      & > span {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        background: ${theme['yellow-dark']};
        color: ${theme.white};
        font-size: 0.75rem;
        font-weight: 700;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`
