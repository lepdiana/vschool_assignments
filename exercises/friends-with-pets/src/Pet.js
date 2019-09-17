import React from 'react';
import './style.css'

const Pet = props => {
    return (
        <div className='pet-container'>
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
        </div>

    )
}

export default Pet