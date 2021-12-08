import React from 'react'

const EyesOnMe = () => {
    const focus = () => {
        console.log('Good!')
    }
    const onBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    return (
        <button  onFocus={focus} onBlur={onBlur}>
            {'Eyes on me'}
        </button>
    )
}

export default EyesOnMe