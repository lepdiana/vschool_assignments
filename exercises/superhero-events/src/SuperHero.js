import React from 'react'

const SuperHero = props => {
    return(
        <div onClick={ () => props.alert(props.catchPhrase)}>
            <h1>{props.name}</h1>
            <br />
            {props.show}
            <br />
            {props.catchPhrase}
            <br />
            <img src={props.imageName} alt={props.name}/>
        </div>
    )
}

export default SuperHero