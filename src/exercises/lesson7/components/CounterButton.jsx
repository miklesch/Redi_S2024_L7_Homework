import React from 'react'


function CounterButton({incrementCount}) {
  return (
    <button onClick={incrementCount}>Increase Count by two</button>
  )
}

export default CounterButton