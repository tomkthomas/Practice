import React , {useReducer} from 'react'

const initialState = {
    counter1: 0,
    counter2: 0
}

function useCounter() {
    const reducer = (state, action) => {
        switch(action.type){
            case 'increment1':
                return {...state,counter1: state.counter1 + action.value}
            case 'decrement1' :
                return {...state,counter1: state.counter1 - action.value}
            case 'reset1' :
                return {...state,counter1: 0}
            case 'increment2':
                return {...state,counter2: state.counter2 + action.value}
            case 'decrement2' :
                return {...state,counter2: state.counter2 - action.value}
            case 'reset2' :
                return {...state,counter2: 0}
            default :
                return state
        }
    }


    const [count, dispatch] = useReducer(reducer, initialState)

    return [count, dispatch]
}

export default useCounter
