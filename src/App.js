import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import SecretList from './components/SecretList'

const App = () => {
    return (
        <div className='min-vw-100 min-vh-100'>
            <BrowserRouter>
                <NavBar />
                <Route exact path='/' component={ HomePage } />
                <Route exact path='/login' component={ Login } />
                <Route exact path='/signup' component={ SignUp } />
                <Route exact path='/secrets' component={ SecretList } />
            </BrowserRouter>
        </div>
    )
}

export default App
