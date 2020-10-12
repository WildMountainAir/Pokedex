# React Pokedex

Pokedex application using React. The purpose of this project was to practice react component structure, state & props as well as communicating with an API on user input.

## Setup

The component tree will look like this:

```
App
├── Header
├── Search
│   ├── Pokemon
├── PokemonList
│   ├── Pokemon
```

Utilized free PokeApi. Look through the following docs: https://pokeapi.co/docs/v2.html

Test the api `GET /api/v2/pokemon/{id or name}/` endpoint with httpie or Postman before moving on to coding.

## Bare Minimum Requirements

Start building your components in the `src/` folder. Work though the functionality in this order:

- [X] The `App` component will contain the data for your pokedex and methods to modify the pokemon in your pokedex.
  - a pokemon object should look like this: `{ name: 'Abra', img: 'http://...' }`
- [X] The `Header` component should render a title header and any additional static information in the navbar.
- The `Pokemon` component should get passed name and img props and render the data to an img and p tag respectively. This component should be simple and reusable.
- [X] The `PokemonList` component should get passed an array of pokemon objects in props and render a `Pokemon` component for each object.
- [X] The `Search` component will render an input and button allowing the user to search for pokemon by name and add them to the pokedex. You will need to make a request to the PokeAPI when the input changes and capture/save the result when the user clicks the Add button.
  - This should cause the `PokemonList` component to re-render, showing the newly added pokemon

### Stretch Goals

- [ ] Add a remove button to each pokemon in the `PokemonList`
- [ ] Add a custom name for each pokemon in the `Search` component and render the name in the `Pokemon` component.
- [ ] Add full-text search to the `Search` component input (search a pokemon by partial name match).

## Style

To style your pokedex use the following classes:

- [X] `pokedex`: add to top level div in the main `App` component
- [X] `nav`: add to the `Header` component
- [X] `pokemon-list`: add to top level div in the `PokemonList` component
- [X] `pokemon`: add to top level div in the `Pokemon` component
- [X] `search`: add to the top level div in the `Search` component
- [X] `screen`: add to a second level div inside the `Search` component

The above styles are entirely optional. Prioritize functionality first.
