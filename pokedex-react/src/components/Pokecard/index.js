import React from 'react';
import sprites from '../../assets/sprites.png'
import './style.css';


const Pokecard = ({ pokeClass, handleClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const styles = { backgroundImage: `url(${sprites})`, backgroundPosition }
    return(
        <button style={styles} onClick={() => handleClick(id)} className="poke-card"></button>
    )
     
}

export default Pokecard;



