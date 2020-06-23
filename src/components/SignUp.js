import React, { Component } from 'react'

export class SignUp extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleFormChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('submit')
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className='form-group'>
                    <input 
                        onChange={ this.handleFormChange }
                        type='text' 
                        className='form-control' 
                        placeholder='Name' 
                        name='name'
                    />
                </div>
                <div className='form-group'>
                    <input 
                        onChange={ this.handleFormChange }
                        type='email' 
                        className='form-control' 
                        placeholder='Email' 
                        name='email'
                    />
                </div>
                <div className='form-group'>
                    <input 
                        onChange={ this.handleFormChange }
                        type='password' 
                        className='form-control' 
                        placeholder='Password' 
                        name='password'
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' className='form-control' value='Submit' />
                </div>
            </form>
        )
    }
}

export default SignUp
