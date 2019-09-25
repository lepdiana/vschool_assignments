import React from 'react';
import { withTheme } from '../context/ThemeProvider.js'

const Footer= (props) => {
    return (
        <div className={`footer-${props.theme}`}>
            Footer
        </div>
    )
}

export default withTheme(Footer)