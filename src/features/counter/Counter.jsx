import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, selectCount, reset} from './counterSlice'
import {useState} from 'react'

export default function Counter() {
  const [incrementAmount, setIncrementAmount ] = useState(1)
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    
function handleIncrementAmount(e) {
  setIncrementAmount(Number(e.target.value))
}

  return (
    <div>
      {count}
      <br />
      <input type="number" min="1" step="1" value={incrementAmount} onChange={handleIncrementAmount}></input>
      <br/>
        <button style={{margin:'10px'}}onClick={()=>dispatch(increment(incrementAmount))}>Increment</button>
        <button onClick={()=>dispatch(decrement(incrementAmount))}>Decrement</button>

        <br />
        <button onClick={()=>dispatch(reset())}>Reset</button>

    </div>
  )
}
