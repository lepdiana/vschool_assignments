import React, { Component } from 'react'
import Badge from './Badge'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            tellUsAboutYourself: '',
            peopleArray: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newPerson = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            tellUsAboutYourself: this.state.tellUsAboutYourself
        }

        this.setState(prevState => ({
            peopleArray: [...prevState.peopleArray, newPerson],
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            tellUsAboutYourself: ""
        }))
    }


    render(props){
        return(
            <div>
                <div className="inputs">
                    <form onSubmit={this.handleSubmit}>
                        <div className='formInputs'>
                            <input className='firstCoupleInputs'
                                type="text"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                placeholder="First Name"
                                required/>
                            <input className='firstCoupleInputs'
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Last Name"
                                required/>
                            <input className='firstCoupleInputs'
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                                required/>
                            <input className='firstCoupleInputs'
                                type="text"
                                name="placeOfBirth"
                                value={this.state.placeOfBirth}
                                onChange={this.handleChange}
                                placeholder="Place of Birth"
                                required/>
                            <input className='firstCoupleInputs'
                                type="number"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                placeholder="Phone"
                                required/>
                            <input className='firstCoupleInputs'
                                type="text"
                                name="favoriteFood"
                                value={this.state.favoriteFood}
                                onChange={this.handleChange}
                                placeholder="Favorite Food"
                                required/>
                        </div>
                        <div className='bigInput'>
                            <input className='aboutInput'
                                    type="text"
                                    name="tellUsAboutYourself"
                                    value={this.state.tellUsAboutYourself}
                                    onChange={this.handleChange}
                                    placeholder="Tell us about youself"
                                    required/>
                        </div>
                        <div className="submit">
                            <button className="submitBtn">Submit</button>
                        </div>
                        { this.state.firstName.length < 3  && <p style={{color: 'red', textAlign: 'center'}}>First name is required</p> }
                        { this.state.lastName.length < 3 && <p style={{color: 'red', textAlign: 'center'}}>Last name is required</p> }
                        { this.state.email.length < 3 && <p style={{color: 'red', textAlign: 'center'}}>Email is required</p> }
                        { this.state.placeOfBirth.length < 3 && <p style={{color: 'red', textAlign: 'center'}}>Place of birth is required</p> }
                        { this.state.phone.length < 3 && <p style={{color: 'red', textAlign: 'center'}}>Phone number is required</p> }
                        { this.state.favoriteFood.length < 3 && <p style={{color: 'red', textAlign: 'center'}}>Favorite food is required</p> }
                        { this.state.tellUsAboutYourself.length < 3 && <p style={{color: 'red', textAlign: 'center'}}>Tell us about yourself is required</p> }
                    </form>
                </div>
                <div>
                    { this.state.peopleArray.map((person, i) =>  <Badge {...person} key={i} peopleArray={this.state.peopleArray}/>) }
                </div>
            </div>
        )
    }
}


export default Input