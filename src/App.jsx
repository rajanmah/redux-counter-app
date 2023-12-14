import { useState } from 'react'
import Counter from './features/counter/Counter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h3>Redux Counter App</h3>
  <Counter />
  <h6> © Rajan Maharjan, 2023</h6>
    </>
  )
}

export default App
