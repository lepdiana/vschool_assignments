import React, { Component } from 'react'

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            description: ''
        }
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value 
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('We will get in contact with you, ' + this.state.name + '!');
        }


    render() {
        return (
            <div className='footerContainer'>
                <div className='gridFooterContainer'>
                    <div className='contactUsContainer'>
                        <h3 className="footerTitle">CONTACT US</h3>
                        <p className='footerText'>Location: 3131 plumbing Ave.</p>
                        <p className='footerText'>Clogged City, UT 91111</p>
                        <p className='footerText'>Phone: 1-800-GET-HELP</p>
                    </div>
                    <div>
                        <h3 className="footerTitle">AREAS WE SERVICE</h3>
                        <ul className='footerText'>
                            <li>Salt Lake City</li>
                            <li>Bountiful</li>
                            <li>Sugarhouse</li>
                            <li>Taylorsville</li>
                            <li>Lehi</li>
                        </ul>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h3 className="footerTitle">Free Quote</h3>
                            <p className='footerText'>Provide your information down below.</p>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="nameInput" 
                                value={this.state.name} 
                                name="name" 
                                onChange={this.handleChange}/>
                            <br />
                            <input 
                                type="number" 
                                placeholder="Phone" 
                                className="phoneInput" 
                                value={this.state.phone} 
                                name="phone" 
                                onChange={this.handleChange}/>
                            <br />
                            <input 
                                type="text" 
                                placeholder="Brief description of the service you need." 
                                className="descriptionInput" 
                                value={this.state.description} 
                                name="description" 
                                onChange={this.handleChange}/>
                            <br />
                            <button style={{marginLeft: '25%'}}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Footer