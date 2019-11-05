import React, { Component } from 'react';
import Pokedex from './components/Pokedex/index';
import DetailView from './components/DetailView/index';
import Pokemon from './Pokemon';

import './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemon: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Pokedex handleClick={this.handleClick}/>
        <DetailView pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

