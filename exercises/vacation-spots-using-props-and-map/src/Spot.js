import React from 'react';

const Spot = props => {
    let chosenColor

    if(props.timeToGo === 'Winter') {
        chosenColor = 'skyblue'
    } else if (props.timeToGo === 'Spring') {
        chosenColor = 'yellow'
    } else if (props.timeToGo === 'Summer') {
        chosenColor = 'red'
    } else {
        chosenColor = 'brown'
    }
    let price
    if (props.price < 500) {
        price = '$'
    } else if (props.price > 1000) {
        price = '$$$'
    } else {
        price = '$$'
    }
    
    return (
        <div className="spot" style={{ backgroundColor: chosenColor}}>
            <h1>Place: {props.place}</h1>
            <h2>Price: {props.price} {price}</h2>
            <h2>Time to go: {props.timeToGo}</h2>
        </div>
    )
}

export default Spot