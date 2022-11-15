import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  position: relative;
  margin: auto;
`

export const Content = styled.div`
  margin: 6.8rem 0;
  @media (max-width: 768px) {
    margin: 5rem 0;
  }
`
