import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      pepe { count }
    </div>
  )
}

export default App
