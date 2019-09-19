import React, { Component } from 'react'

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        let getRandom = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (6 - 1 + 1)) + 1
            }
        // alert(`helllo`)
        this.setState({
            // num1: prevState.num1 + 1
            num1: getRandom(),
            num2: getRandom(),
            num3: getRandom(),
            num4: getRandom(),
            num5: getRandom()
        })
    }

    render(){
        return (
            <div>
                {this.state.num1}
                <br />
                {this.state.num2}
                <br />
                {this.state.num3}
                <br />
                {this.state.num4}
                <br />
                {this.state.num5}
                <br />
                <form onClick={this.handleClick}>
                    <button>Click Me</button>
                </form>
                
            </div>
        )
    }
}

export default DiceBox