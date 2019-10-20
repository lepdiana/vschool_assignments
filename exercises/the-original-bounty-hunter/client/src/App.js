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
    .catch(err => err.res.data.errMsg)
  }

  componentDidMount(){
    this.getBounties()
  }

  render() {
    return (
      <div>
        { this.state.bounties.map(bounty => 
                                    <div>
                                      <h1 style={{display: 'inline-block'}}>Name: {bounty.firstName}</h1>
                                      <h1 style={{display: 'inline-block'}}>    {bounty.lastName}</h1>
                                      <p>Is Living? {bounty.isLiving}</p>
                                      <p>Amount:{bounty.bountyAmount}
                                      </p>
                                      <p>Type: {bounty.type}</p>
                                    </div>
                                  )}
      </div>
    )
  }
  
}

export default App;
