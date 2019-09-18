import React from 'react'

const Square = props => {
    const bgColor = props.color;
    return (
        <div className='square' style={{backgroundColor: bgColor}}></div>
    )
}

export default Square