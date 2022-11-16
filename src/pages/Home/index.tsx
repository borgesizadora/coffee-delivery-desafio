import { Coffees } from '~/mocks/coffees'

import { CoffeeCard } from './components/CoffeeCard'
import { HomeHeader } from './components/HomeHeader'
import * as S from './styles'

export type CoffeeType = typeof Coffees[number]

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <S.Title>Nossos cafés</S.Title>
      <S.CoffeeList>
        {Coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeeList>
    </div>
  )
}
