import React, { Component } from 'react';
import axios from 'axios'
import CampingList from './components/CampingList.js'
import CampingForm from './components/CampingForm.js'

class App extends Component {
  constructor() {
    super()
    this.state={
      campingThings: [],
      title: '',
      description: '',
      imgUrl: ''
    }
  }

  handleDelete = (id) => {
    axios.delete('https://api.vschool.io/campingthings/todo' + id).then((response)=>{
      this.setState(prevState => {
        const filteredArray = prevState.campingThings.filter(thing => {
          return id !== thing._id
        })
        return {campingThings: filteredArray}
      })
    }) 
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getCampingThings()
  }

  getCampingThings = () => {
    axios.get('https://api.vschool.io/campingthings/todo')
    .then(res => this.setState({
      campingThings: res.data
    }))
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newCampingThing ={
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    }

    axios.post('https://api.vschool.io/campingthings/todo', newCampingThing)
    .then(res => {
      this.setState(prevState => ({
      campingThings: [...prevState.campingThings, res.data],
      title: '',
      description: '',
      imgUrl: ''
    }))
  })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <CampingForm 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              title={this.state.title}
              description={this.state.description}
              imgUrl={this.state.imgUrl}/>
        <CampingList handleDelete={this.handleDelete} campingThings={this.state.campingThings}/>
      </div>
    );
  }
  
}

export default App;
