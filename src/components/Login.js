import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <form>
                <div className='form-group'>
                    <input type='email' className='form-control' placeholder='Email' />
                </div>
                <div className='form-group'>
                    <input type='password' className='form-control' placeholder='Password' />
                </div>
            </form>
        )
    }
}

export default Login
