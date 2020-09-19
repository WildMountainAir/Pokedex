import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: []
    }
    // event handlers to bind
  }

  render() {
    return (
    <div className="pokedex">
      <h1 className="nav">Alison's Pokedex</h1>

    </div>
  )
}
}

export default App;