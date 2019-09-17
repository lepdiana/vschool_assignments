import React from 'react';
import Pet from './Pet.js';
import './style.css'

const Friend = props => {

    const mappedPets = props.pets.map(pet => 
                                    <Pet 
                                        name = {pet.name}
                                        breed={pet.breed}
                                        key={Math.random()}
                                    />)

    // let chosenColor
    
    // if(props.age % 2 === 0) {
    //     chosenColor = 'cornflowerblue'
    // } else {
    //     chosenColor = 'firebrick'
    // }

    return (
        <div className='friend-container' style={{backgroundColor: props.age % 2 === 0 ? 'cornflowerblue' : 'firebrick'}}>            
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            { mappedPets }
        </div>
    )
}

export default Friend