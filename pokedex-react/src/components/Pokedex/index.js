import React from 'react';
import Pokecard from '../Pokecard/index';
import { pokeClasses } from '../../PokeClasses'
import './style.css';

const Pokedex = () => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <Pokecard
            key={pokeClass.id}
            pokeClass={pokeClass} 
            />
        )
    })

    return (
        <section className="poke-dex">
            {cells}
        </section>
    )
}

export default Pokedex;

