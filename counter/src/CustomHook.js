import React from 'react'

function useCustomHook ()
{		
		const [count,setCount] = React.useState(0);
	    const incrementCount = () => {
			setCount((prevCount) => prevCount + 1)
		}
		
		const decrementCount = () => {
			setCount((prevCount) => prevCount - 1)
		}
		const resetCount = () => {
			setCount((prevCount) => 0)
		}
		return [count, incrementCount, decrementCount, resetCount]
		
}

function CustomHook() {
    let [count, incrementCount, decrementCount, resetCount] = useCustomHook()
    return (
        <div>
                <div>{count}Hi</div>
				<button onClick = {incrementCount}>Increment</button>
				<button onClick = {decrementCount}>Decrement</button>
				<button onClick = {resetCount}>Reset</button>
        </div>
    )
}



export default CustomHook
