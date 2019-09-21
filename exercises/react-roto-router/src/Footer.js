import React from 'react'

const Footer = () => {
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
                    <form>
                        <h3 className="footerTitle">Free Quote</h3>
                        <p className='footerText'>Provide your information down below.</p>
                        <input type='text' placeholder='Name' className='nameInput'/>
                        <br />
                        <input type='number' placeholder='Phone' className='phoneInput'/>
                        <br />
                        <input type='text' placeholder='Brief description of the service you need.' className='descriptionInput'/>
                        <br />
                        <button style={{marginLeft: '25%'}}>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer