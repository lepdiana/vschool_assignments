import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='headerContainer'>
            <h1 className='headerTitle'>Take a Plunge with the Plumber</h1>
            <h2 className='headerSubtitle'>Ask for back-up</h2>
            <div className='links'>
                <Link to='/' className='home'>HOME</Link>
                <Link to='/about' className='about'>ABOUT</Link>
                <Link to='/services' className='services'>SERVICES</Link>
            </div>
            
        </div>
    )
}

export default Navbar