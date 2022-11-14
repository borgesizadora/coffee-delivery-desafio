import styled, { css } from 'styled-components'

import { defaultTheme } from '../../../../styles/themes/default'

export const HomeHeader = styled.header`
  display: flex;
  position: relative;
  padding: 3rem 0;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 5.875rem 0;
    h1 {
      margin-right: 0rem;
    }
    h2 {
      margin-right: 0rem;
    }
  }
`
export const HomeHeaderBackground = styled.div<{ backgroundImage: string }>`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
    background-size: cover;
    filter: blur(80px);
    display: flex;
    height: 100%;
    width: 100vw;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const HomeHeaderInfo = styled.div`
  ${({ theme }) =>
    css`
      line-height: 1.3;
      max-width: 36.75rem;

      h1 {
        font-weight: 800;
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
      }
      h2 {
        font-weight: 400;
        font-size: 1.25rem;
        color: ${theme['base-subtitle']};
        margin-top: 1rem;
        margin-bottom: 4.125rem;
      }
    `}
`

export const HomeHeaderCoffeeImage = styled.div`
  & > img {
    height: 20rem;
    @media (min-width: 1440px) {
      height: 22.5rem;
    }
  }
`
export const HomeHeaderFeaturesContainer = styled.div`
  display: flex;

  & > div {
    display: grid;
    grid-template-columns: min-content;

    grid-row-gap: 1.25rem;
    grid-column-gap: 2.5rem;
    margin: 0 auto;
  }
  & > div {
    @media (min-width: 768px) {
      margin: 0;
      grid-template-columns: min-content min-content;
    }
  }
`

export const HomeHeaderFeature = styled.div<{ color: keyof typeof defaultTheme }>`
  ${({ theme, color }) =>
    css`
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      span {
        background: ${theme[color]};
        padding: 0.5rem;
        display: flex;
        border-radius: 50%;
      }
      svg {
        color: ${theme.white};
      }
      p {
        white-space: nowrap;
      }
    `}
`
