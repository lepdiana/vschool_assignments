import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

export default class ThemeProvider extends Component {
    constructor() {
        super();
        this.state = {
            theme: 'light'
        }
    }

    changeTheme = () => {
        this.setState(prevState => {
            return { theme: prevState.theme === 'light' ? 'dark' : 'light' }
        })
    }

    render() {
        return (
            <Provider value={{
                theme: this.state.theme,
                changeTheme: this.changeTheme
            }}>
            { this.props.children }  
            </Provider>
        )
    }
}

export const withTheme = C => props => (
    <Consumer>
        { value => <C {...value} {...props}/> }
    </Consumer>
)
