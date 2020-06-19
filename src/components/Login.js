import React from 'react'

const Login = ({ handleChange, handleSubmit, email, password }) => {
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    autoComplete='off'
                    onChange={ handleChange }
                    value={ email }
                />
                <input 
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete='off'
                    onChange={ handleChange }
                    value={ password }
                />
                <input 
                    type='submit'
                    value='Login'
                />
            </form>
        </div>
    )
}

export default Login
