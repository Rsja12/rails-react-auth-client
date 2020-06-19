import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    autoComplete='off'
                />
                <input 
                    type='text'
                    name='password'
                    placeholder='password'
                    autoComplete='off'
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
