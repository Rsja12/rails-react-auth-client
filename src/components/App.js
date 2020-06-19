import React, { Component } from 'react'

import Login from './Login'

export class App extends Component {

    state = {
        currentUser: null
    }

    render() {
        return (
            <div>
                <Login />
            </div>
        )
    }
}

export default App
