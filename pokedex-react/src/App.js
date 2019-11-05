import React, { Component } from 'react';
import Pokedex from './components/Pokedex/index'

import './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Pokedex/>
      </div>
    )
  }
}

