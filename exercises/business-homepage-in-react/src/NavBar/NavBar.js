import React from "react";
import './NavBar.css';


function NavBar() {
    return (
        <div className="navBarContainer">
            <button className="about">ABOUT</button>
            <button className="shareYourExperience"> SHARE YOUR EXPERIENCE</button>
            <button className="visitingThePark">VISITING THE PARK</button>
        </div>

    )
}

export default NavBar