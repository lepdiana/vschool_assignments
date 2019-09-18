import React, { Component }from 'react'
import Square from './Square.js'

class Squarelist extends Component {
    constructor() {
        super();
        this.state = {
            colors: ["white", "white", "white", "white"]
        };
    }

    blackWhite = () => {
        this.setState( prevState => ({
            colors: prevState.colors[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"]
        }))
    }
    
    purple = () => {
        this.setState( prevState => ({
            colors: prevState.colors[0] === "white" || prevState.colors[0] === "black" ? ["purple", "purple", "white", "white"] : ["white", "white", "white", "white"]
        }))
    }

    box3Blue = () => {
        this.setState( prevState => ({
            colors: prevState.colors[2] === "white" || prevState.colors[2] === "black" ? ["white", "white", "blue", "white"] : ["white", "white", "white", "white"]
        }))
    }

    box4Blue = () => {
        this.setState( prevState => ({
            colors: prevState.colors[3] === "white" || prevState.colors[3] === "black" ? ["white", "white", "white", "blue"] : ["white", "white", "white", "white"]
        }))
    }

    render() {
        const mappedColors = this.state.colors.map(color => <Square 
                                                                color={color} 
                                                                key={Math.random()}
                                                            />)
        return (
            <div className='squareList'>
                {mappedColors}
                <button onClick={this.blackWhite}>Black/White</button>
                <button onClick={this.purple}>Purple</button>
                <button onClick={this.box3Blue}>Box 3 Blue</button>
                <button onClick={this.box4Blue}>Box 4 Blue</button>
            </div>
        )
    }
}

export default Squarelist 