import React from 'react';
import Pokemon from './Pokemon';

// all pokémon - props
// class: pokemon-list
// components: Pokemon
// map over pokedex passed down from props
// pass key and pokémon to Pokemon
function PokemonList(props) {
  return (
    <div className='pokemon-list'>
      <h2>My Pokémon</h2>
      {props.pokedex.map((pokemon, index) => <Pokemon key={index} {...pokemon}/>)}
    </div>
  );
}

export default PokemonList;