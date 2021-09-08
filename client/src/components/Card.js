import React from 'react'

const GameCard = ({children}) => {

    return (
        <div primary='black' className="card-body">
            {children}
        </div>
    )

}

export default GameCard