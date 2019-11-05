import React from 'react';
import sprites from '../../assets/sprites.png'
import './style.css';


const Pokecard = ({ pokeClass }) => {
    const { id, backgroundPosition } = pokeClass;
    const styles = { backgroundImage: `url(${sprites})`, backgroundPosition }
    return(
        <button style={styles} className="poke-card"></button>
    )
     
}

export default Pokecard;



