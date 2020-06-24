import React from 'react'
import { Link } from 'react-router-dom'

import AuthButton from './AuthButton'

const NavBar = () => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            
            <ul className='nav'>
                <li className='nav-item'>
                    <Link className='nav-link text-white'
                        to='/'>
                            Home
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar
