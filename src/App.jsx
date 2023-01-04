import { useState } from 'react'
import CardsWrapper from './componentes/homeCards/CardsWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <CardsWrapper />
    </main>
  )
}

export default App
