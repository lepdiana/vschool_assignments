import React from 'react'

const CampingThing = props => {
    console.log(props)
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.imgUrl} alt={props.title}/>
            <button onClick={() => props.handleDelete(props._id)}>Delete</button>
        </div>
    )
}

export default CampingThing