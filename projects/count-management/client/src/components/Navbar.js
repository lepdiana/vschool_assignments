import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <Link to='/overview'>Overview</Link>
            <Link to='/netincome'>Net Income</Link>
            <Link to='/expense'>Expense</Link>
            <Link to='/transaction'>Transaction</Link>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default Navbar