import React, { Component } from 'react'

export class Login extends Component {

    state = {
        userInfo: {
            email: '',
            password: ''
        }
    }

    handleFormChange = e => {
        const { name, value } = e.target

        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.userInfo)
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className='form-group'>
                    <input 
                        onChange={ this.handleFormChange }
                        type='email' 
                        name='email'
                        className='form-control' 
                        placeholder='Email' 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        onChange={ this.handleFormChange }
                        type='password' 
                        name='password'
                        className='form-control' 
                        placeholder='Password' 
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' className='form-control' value='Submit' />
                </div>
            </form>
        )
    }
}

export default Login
