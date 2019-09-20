import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='startBootstrapContainer'>
                <a href='/startBootstrap' className='startBootstrap'>Start Bootstrap</a>
            </div>
            <div className='navLinkContainer'>
                <a href='/home' className='home'>HOME</a>
                <a href='/about' className='about'>ABOUT</a>
                <a href='/samplePost' className='samplePost'>SAMPLE POST</a>
                <a href='/contact' className='contact'>CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar