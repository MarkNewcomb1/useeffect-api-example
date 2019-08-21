import React from 'react'

const PlanetDetail = ({details}) => {
    console.log(details)
    return Object.keys(details).map(key => {
            return (
            <div key={key}>
                <p>{key}:<span> {details[key]}</span></p>
            </div>
            )
    })

}

export default PlanetDetail