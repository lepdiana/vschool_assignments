import React from 'react';
import { withTheme } from '../context/ThemeProvider.js'

const Navbar = (props) => {
    return (
        <div className='navbarContainer'>
            <div className={`navbar-${props.theme}`}>
                <a href='/home'>Home</a>
                <a href='about'>About</a>
                <a href='/service'>Services</a>
            </div>
        </div>
    )
}

export default withTheme(Navbar)