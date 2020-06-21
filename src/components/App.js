import React, { Component } from 'react'

import Login from './Login'
import SecretsList from './SecretsList'

export class App extends Component {

    state = {
        currentUser: null,
        loginForm: {
            email: '',
            password: ''
        },
        secrets: []
    }

    handleChange = e => {
        // grab name and value from e.target
        // name is the name attr of input field
        // value is user input
        const { name, value } = e.target

        // handle input change for both fields 
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                [name]: value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        // submit the info from form to the backend
        const userInfo = this.state.loginForm

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: userInfo })
        })
        .then(res => res.json())
        .then(res => {
            // failure
            if (res.error) alert('Invalid Credentials')

            // success
            this.setState({
                currentUser: res
            })
        })
        // catch js errors
        .catch(err => console.log(err))
        
    }

    getSecrets = () => {
        fetch('http://localhost:3000/secrets')
        .then(res => res.json())
        .then(res => {
            // failure
            if (res.error) alert('Not authorized')
            // success
            this.setState({
                secrets: res
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Login
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    email={ this.state.loginForm.email }
                    password={ this.state.loginForm.password }
                />
                <button onClick={ this.getSecrets }>Show Secrets</button>
                <SecretsList secrets={ this.state.secrets } />
            </div>
        )
    }
}

export default App
