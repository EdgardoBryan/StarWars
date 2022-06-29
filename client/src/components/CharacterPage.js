import React, { useEffect, useState } from "react";
import CharacterTiles from "./CharacterTiles";

const CharacterPage = (props) =>{
    const[peopleData,setPeople]=useState([])

    const getPeople = async () => {
        try {
          const response = await fetch("/api/v1/people");
          if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`;
            const error = new Error(errorMessage);
            throw error;
          }
          const responseBody = await response.json();
          console.log(responseBody.results)
          setPeople(responseBody.results);
        } catch (error) {
          console.log(`Error in fetch: ${error.message}`);
        }
      };
    
useEffect(()=>{
getPeople()
},[])

  console.log("people", peopleData)
    return(
        <div>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/maxresdefault-13.jpg?auto=format&q=60&fit=max&w=930" alt="star-wars-logo"/>
        
        </div>   
    )
}

export default CharacterPage