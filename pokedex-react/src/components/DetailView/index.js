import React from 'react';
import './style.css';

const DetailView = ({ pokemon }) => {
    const { id, type, sprite, name } = pokemon;

    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt="sprite"/>
            <div className="data-wrapper">
                <h1 className="data-name">ID:{id} {name}</h1>
                <p className="data-type">Type: {type}</p>
            </div>
        </section>
    );
}

export default DetailView;
