import React from 'react'

const Keypad = () => {
    const changEvent = () => {
        console.log('Entering password...')
    }
    return <input type='password' onChange={changEvent}></input>
}

export default Keypad
