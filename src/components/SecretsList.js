import React from 'react'

const SecretsList = ({ secrets }) => {

    const allSecrets = secrets.map( secret => {
        return <p>{ secret.content }</p>
    })

    return (
        <div>
            { allSecrets }
        </div>
    )
}

export default SecretsList
