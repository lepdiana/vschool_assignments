import React, {Component} from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      names: []
    }
  }

  handleChange = (e) => {
    // event.target.name & event.target.value
    this.setState({
        [e.target.name]: e.target.value
    })
}

  handleSubmit = (e) => {
    e.preventDefault();
    const newName = this.state.firstName

    this.setState(prevState => ({
      names: [...prevState.names, newName],
      firstName: ''
    }))
  }

  render() {
    const mappedNames = this.state.names.map((name, i) => <h1 key={i}>{name}</h1>)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}
                        placeholder="First Name"/>
          <button>Submit</button>
        </form>
        <div>
          {mappedNames}
        </div>
      </div>
    );
  }
}

export default App;
