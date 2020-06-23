import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <form>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Name' />
                </div>
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

export default SignUp
