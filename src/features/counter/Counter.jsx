import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, selectCount} from './counterSlice'

export default function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    


  return (
    <div>
      {count}
      <br/>
        <button style={{margin:'10px'}}onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>

    </div>
  )
}
