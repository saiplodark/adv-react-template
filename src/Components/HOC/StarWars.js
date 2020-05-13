import React from 'react'
import myHOC from './MyHOC'

function StarWars(props){
    const mappedChars = props.data.results.map((character, i)=>{
        return (
            <div key={i} className="star-wars-char">
                <h2>name: {character.name}</h2>
                <h3>height:{character.height}</h3>
                <h4>mass: {character.mass}</h4>
            </div>
        )
    })

return <div>{mappedChars}</div>
}

export default myHOC(StarWars, 'https://swapi.dev/api/people')