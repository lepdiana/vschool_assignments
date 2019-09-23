import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state={
      people: []
    }
  }

  componentDidMount(){
    axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
    .then((response)=>{
      this.setState({people: response.data})
    })
  }

  render() {
    const mappedHitList = this.state.people.map(person => {
      return <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '1px solid #000000', margin: 10, backgroundColor: '#333333'}}>
                <h2 style={{marginRight: '40px', color: 'red', paddingLeft: 20}}>{person.name}</h2> 
                <img src={person.image} style={{width: '200px', borderLeft: '1px solid #333333', borderRight: '1px solid #333333'}}/>
              </div>
    })
    return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', height: 200, backgroundImage: "URL('https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555277862/shape/mentalfloss/untitled_119.png')", backgroundSize: 'cover', color: 'white', fontSize: 80, textAlign: 'center', textDecorationLine: 'underline', paddingTop: 80,}}>Hit List</div>
      {mappedHitList}
    </div>
    )
  }
}
  

export default App;
