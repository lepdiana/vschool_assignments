import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <h3 className="addressTitle">Mailing Address:</h3>
            <p classname="addressText">
                Zion National Park
                1 Zion Park Blvd.
                State Route 9
                Springdale, UT 84767
            </p>
            <h3 className="phoneNumberTitle">Phone number:</h3>
            <p classname="footerText">
                435-555-5555
            </p>
        </div>
    )
}

export default Footer