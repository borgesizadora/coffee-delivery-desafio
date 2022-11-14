import { CoffeeCard } from './components/CoffeeCard'
import { HomeHeader } from './components/HomeHeader'
import * as S from './styles'

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <S.Title>Nossos cafés</S.Title>
      <S.CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </S.CoffeeList>
    </div>
  )
}
