import React from 'react';

// single pokémon
// class: pokemon
// image source and pokémon name will come from props
function Pokemon(props) { 
  return (
    <div className="pokemon">
      <img src={props.img}/>
      <p>{props.name}</p>
    </div>
  );
}

export default Pokemon;