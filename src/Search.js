import React from 'react';
import Pokemon from './Pokemon';
const apiPath = 'https://pokeapi.co/api/v2';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      result: {}
    }
    // handle change
    this.handleChange = this.handleChange.bind(this);
    // add
    this.addPokemon = this.addPokemon.bind(this);
  }

 //https://pokeapi.co/api/v2/pokemon/bulbasaur
 // page loads an array of objects

 // get request
 //  set path to api and pokemon name/search
 //  fetch path
 //    then stringify result
 //    then set result to pokemon object
 //      (pokemon obj has name and img)
 //    if error catch error and log
  getPokemon = (search) => {
    var path = `${apiPath}/pokemon/${search}`
    fetch(path)
      .then((result) => result.json())
      .then((data) => {
          console.log("pokémon in get request: data: ", data);
        // const pokemon = {name: data.name, img: data.sprites.front_default}
        const pokemon = {name: data.name, img: data.sprites.front_shiny}
        console.log("pokémon in get request", pokemon);
        this.setState({
          result: pokemon
        })
      })
      .catch((err) => {
        console.log('Pokémon not found 🥺');
      })
  }
  
  // add pokémon
  //  call addToPokedex on result
  //  set state to defaults
  //   result to empty obj
  //   search to empty string 
  addPokemon = () => {
    this.props.addToPokedex(this.state.result);
    this.setState({
        result: {},
        search: ''
    })
  }

  // handle change on change - event
  //  set state
  //    search to event value
  //    result to empty obj
  //  call get pokémon on event value
  handleChange = (event) => {
    this.setState({
        search: event.target.value,
        result: {}
    });
    this.getPokemon(event.target.value);
  }

  // classes: search, screen
  // components: Pokemon
  // pass name and img to Pokémon
  // pass search to input value
  // pass handleChange to on change event
  // pass addPokemon to on click event
  render() {
    const {name, img} = this.state.result;
    return (
      <div className='search'>
        <div className='screen'>
        <Pokemon name={name} img={img}/>
        </div>
        <div className="area">
          <h2>Search Pokémon</h2>
          <input 
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button
            onClick={this.addPokemon}
          >Add Pokémon</button>
        </div>
      </div>
    )
  }
}

export default Search;