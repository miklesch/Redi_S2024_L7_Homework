import React from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 2)
    }
}

export default Counter