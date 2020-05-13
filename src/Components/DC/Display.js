import React from 'react'

export default function Starwars(props){
    const characterList = props.characters.map((character, i)=>{
        return (
            <div key={i} className="star-wars-char">
                <h2>name: {character.name}</h2>
                <h3>height:{character.height}</h3>
                <h4>mass: {character.mass}</h4>
            </div>
        )
    })

    return <div>{characterList}</div>
}
