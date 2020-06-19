import React, { Component } from 'react'

import Login from './Login'

export class App extends Component {

    state = {
        currentUser: null,
        loginForm: {
            email: '',
            password: ''
        }
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

        console.log('test')
    }

    render() {
        return (
            <div>
                <Login
                    handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                />
            </div>
        )
    }
}

export default App
