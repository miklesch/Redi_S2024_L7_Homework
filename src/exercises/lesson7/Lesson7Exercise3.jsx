/**
 *  INSTRUCTIONS:
 *  It's back to the buttons again. We have our button using a state, but it's all in one component.
 *  We want to make use of reusable components, so extract a "Counter" component, and a "CounterButton" component.
 * */
import { useState } from "react"
import Counter from "./components/Counter"
import CounterButton from "./components/CounterButton"
/* 
const Counter = ({ count }) => {
  return (
    <h1>Counter: {count}</h1>
  )
}
const Button = ({onButtonClick}) => {
    return <button onClick= {onButtonClick}>Increase Count by two</button>
  }

 */

const Lesson7Exercise3 = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 2)
  }

  return (
    <>
      <h3>Lesson 7 Exercise 3</h3>
      <Counter count={count}/>
      <CounterButton incrementCount={incrementCount}/>
    </>
  )
}

export default Lesson7Exercise3
