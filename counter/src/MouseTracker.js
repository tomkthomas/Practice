import React, { useEffect, useState } from 'react'

function MouseTracker() {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMouse = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove',logMouse)
        return ()=> window.removeEventListener('mousemove',logMouse)
    },[])

    return (
        <div>
            X - {x} : Y - {y}
        </div>
    )
}

export default MouseTracker
