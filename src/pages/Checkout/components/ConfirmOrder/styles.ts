import { defaultTheme } from '~/styles/themes/default'
import styled, { css } from 'styled-components'

export const ConfirmOrderHeader = styled.header`
  margin-bottom: 2.5rem;
  h2 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoAndImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  img {
    justify-self: end;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    img {
      justify-self: center;
    }
  }
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(${theme.background}, ${theme.background}) padding-box,
      linear-gradient(to right, ${theme.yellow}, ${theme.purple}) border-box;
    border-radius: 0.375rem 2.25rem;
    padding: 2.5rem;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    color: ${theme['base-text']};
  `}
`

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  & > div {
    display: flex;
    flex-direction: column;
  }
`

export const InfoCardIcon = styled.span<{ color: keyof typeof defaultTheme }>`
  ${({ theme, color }) => css`
    background: ${theme[color]};
    padding: 0.5rem;
    display: flex;
    border-radius: 50%;
    svg {
      color: ${theme.white};
    }
  `}
`
