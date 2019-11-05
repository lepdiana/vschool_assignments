import React from 'react'

import '../styles/authForm.css'

function AuthForm(props) {
    const { handleChange, handleSubmit, inputs: { username, password }} = props
    return (
        <form onSubmit={ handleSubmit } className ='authForm'>
            <input
                type='text'
                name='username'
                value={ username }
                onChange={ handleChange }
                placeholder="Username"/>
            <input
                type='text'
                name='password'
                value={ password }
                onChange={ handleChange }
                placeholder="Password"/>
            <button>{props.btnText}</button>
        </form>
    )
}

export default AuthForm