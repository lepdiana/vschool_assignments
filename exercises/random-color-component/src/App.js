import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state={
      colors: []
    }
  }

  componentDidMount() {
    axios.get('http://www.colr.org/json/colors/random/7')
    .then((response)=>{
      this.setState({colors: response.data.colors})
    })
  }

  render() {
    const mappedColors = this.state.colors.map((color, i) => {
      return <h1 key={i} style={{height: 200, width: 200, backgroundColor: `#${color.hex}`}}>{color.hex}</h1>
    })
    return(
      <div>
        { mappedColors }
      </div>
    )
  }
}

export default App;
