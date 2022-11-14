import styled from 'styled-components'

export const Title = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 2rem;
  margin-bottom: 2.125rem;
`
export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  justify-content: space-between;
  column-gap: 2rem;
  row-gap: 2.5rem;
`
