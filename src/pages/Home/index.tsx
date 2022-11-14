import { CoffeeCard } from './components/CoffeeCard'
import { HomeHeader } from './components/HomeHeader'

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <h3>Nossos Cafés</h3>
      <CoffeeCard />
    </div>
  )
}
