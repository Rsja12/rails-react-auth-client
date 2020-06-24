import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col'>
                    <Link to='/login'>
                        <div className='card text-center'>
                            <div className='card-body'>
                                <div className='card-title'>Login</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col'>
                    <Link to='/signup'>
                        <div className='card text-center'>
                            <div className='card-body'>
                                <div className='card-title'>Sign Up</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
