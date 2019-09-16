import React from 'react';
import './Main.css';
import Info from './ZionInfo/ZionInfo.js';
import Visit from './Visiting/Visiting.js'
import Merchandise from './Merchandise/Merchandise';

function Main() {
    return (
        <div className="main">
            <Info />
            <Visit />
            <Merchandise />
        </div>
    )
}

export default Main