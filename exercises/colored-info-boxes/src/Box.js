import React from 'react'

const Box = (props) => {
    return (
        <div>
           <h1 style = {{backgroundColor: 'green'}}>{props.title}</h1> 
           <h3 style = {{backgroundColor: 'blue'}}>is a {props.subtitle}</h3>
           <p style = {{backgroundColor: 'red'}}>{props.information}</p>
        </div>
    )
}

export default Box