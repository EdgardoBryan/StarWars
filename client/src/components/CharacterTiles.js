import React from "react";

const CharacterTiles = (props) =>{
    return (
        <>
        <div className="name child-class">{props.name}
        Height:{props.people.height} Gender:{props.people.gender}BirthYear:{props.people.birth_year}</div>
        
        </>
    )
}

export default CharacterTiles