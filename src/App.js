import React from 'react';
import Search from './Search';
import PokemonList from './PokemonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: []
    }
    // add
    this.addToPokedex = this.addToPokedex.bind(this);
  }
  // add 
  //  if there is a name
  //   update pokedex to include new pokemon
  addToPokedex = (pokemon) => {
    if (pokemon.name) {
      this.setState({
        pokedex: [...this.state.pokedex, pokemon]
      })
    }
  }
  // classes: pokedex, nav
  // components: Search, List
  // pass addToPokedex to Search
  // pass pokedex to PokemonList
  render() {
    return (
    <div className="pokedex">
      <h1 className="nav">Alison's Pokedex</h1>
      <Search 
        addToPokedex={this.addToPokedex}
      />
      <PokemonList
        pokedex={this.state.pokedex}
      />
    </div>
  )
}
}

export default App;