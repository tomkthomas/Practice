import React from 'react'
import useCounter from './useCounter'

function Counter2() {

    const [count, dispatch] = useCounter()

    return (
        <div>
           <div>Count - {count.counter1}</div>
            <button onClick={() => dispatch({type: 'increment1', value: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement1', value: 5})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset1'})}>Reset</button> 
        </div>
    )
}

export default Counter2
