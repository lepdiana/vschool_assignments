import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import CrudProvider from './context/CrudProvider.js'

ReactDOM.render(
<BrowserRouter>
    <UserProvider>
        <CrudProvider>
            <App />
        </CrudProvider>
    </UserProvider>
</BrowserRouter>,
document.getElementById('root'));
