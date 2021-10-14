
import useCounter from './useCounter';




function Counter1() {
    const [count, dispatch] = useCounter()

    return (
        <div>
            
            <div>Count - {count.counter1}</div>
            <button onClick={() => dispatch({type: 'increment1', value: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement1', value: 5})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset1'})}>Reset</button>

           {/* <div>Counter - 2</div>
            <div>Count - {count.counter2}</div>
            <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
           */}
        </div>
    )
}


export default Counter1