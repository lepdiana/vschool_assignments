import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.css'

function Navbar(props) {
    return (
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to='/overview'><li>Overview</li></Link>
                    <Link to='/netincome'><li>Net Income</li></Link>
                    <Link to='/expense'><li>Expense</li></Link>
                    <Link to='/transaction'><li>Transaction</li></Link>
                    <Link onClick={props.logout} className='logout'><li>Logout</li></Link>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar