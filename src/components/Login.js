import React, { Component } from 'react'

export class Login extends Component {

    state = {
        userInfo: {
            email: '',
            password: ''
        },
    }

    renderBtn = () => {
        const token = localStorage.getItem('jwt')
        if (token) return 'Logout'
        return 'Login'
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
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: this.state.userInfo })
        })
        .then(res => res.json())
        .then(res => {
            window.localStorage.setItem('jwt', res.jwt)
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
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
                    <input type='submit' className='form-control' value='Login' />
                </div>
            </form>
        )
    }
}

export default Login
