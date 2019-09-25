import React from 'react';
import { withTheme } from '../context/ThemeProvider.js'

const Main = (props) => {
    return (
    <div className={`main-${props.theme}`}>
            <h1>Click the button to change themes!</h1>
            <button onClick={props.changeTheme}>Click Me</button>
        </div>
    )
}

export default withTheme(Main)