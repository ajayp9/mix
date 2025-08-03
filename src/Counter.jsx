import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1);
  const reset = () => setCount(0);
  
  return (
    <div>
      <h1>Counter App</h1>
      <div className='count-display'>{count}</div>
      <div className='buttons'>
       <button onClick={decrement}>Dec</button> 
       <button onClick={reset}>Reset</button>
       <button onClick={increment}>Inc</button>
      </div>
    </div>
  )
}

export default Counter