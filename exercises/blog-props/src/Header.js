import React from 'react'
import Navbar from './Navbar.js'

const Header = () => {
    return (
        <div className="header">
            <div className="overlay"></div>
            <div className="headerText">
                <h1 className="title">Clean Blog</h1>
                <h2 className="subtitle">A Blog Theme by Start Bootstrap</h2>
            </div>
            <Navbar />
        </div>
    )
}

export default Header