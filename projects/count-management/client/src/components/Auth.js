import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'

import '../styles/auth.css'

function Auth(){
    const initState = { username: "", password: "" }
    const { signup, login, authErrMsg, clearAuthErr } = useContext(UserContext)

    const [inputs, setInputs] = useState(initState)
    const [toggle, setToggle] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value 
        }))
    }
    const handleSignupSubmit = e => {
        e.preventDefault()
        signup(inputs)
        setInputs(initState)
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        login(inputs)
        setInputs(initState)
    }

    const toggleForms = () => {
        setToggle(prevToggle => !prevToggle)
        clearAuthErr()
    }
   
    return (
        <div className='signupLoginContainer'>
            {!toggle ?
                <>
                    <h1 className='authTitle'>Signup</h1>
                    <AuthForm 
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleSignupSubmit}
                        btnText="Signup"
                    />
                    <p className='authErrMsg'>{authErrMsg}</p>
                    <p className='member'>Already a member?</p>
                    <button onClick={toggleForms} className='clickHere'>
                        Click here
                    </button>
                </>
            :
                <>
                    <h1 className='authTitle'>Login</h1>
                    <AuthForm 
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleLoginSubmit}
                        btnText="Login"
                    />
                    <p className='authErrMsg'>{authErrMsg}</p>
                    <p className='member'>Not a member?</p>
                    <button onClick={toggleForms} className='clickHere'>
                        Click here
                    </button>
                </>
            }
        </div>
    )
}

export default Auth