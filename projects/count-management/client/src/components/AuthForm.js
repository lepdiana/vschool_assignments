import React from 'react'

function AuthForm(props) {
    const { handleChange, handleSubmit, inputs: { username, password }} = props
    return (
        <form onSubmit={ handleSubmit }>
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