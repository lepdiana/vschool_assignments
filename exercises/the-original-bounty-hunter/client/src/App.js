import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state={
      bounties: []
    }
  }

  getBounties = () => {
    axios.get('/bounties')
    .then(res => {
      this.setState({
          bounties: res.data
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getBounties()
  }

  render() {
    return (
      <div>
        { this.state.bounties.map(bounty => <h1>{bounty.firstName}</h1>)}
      </div>
    )
  }
  
}

export default App;
