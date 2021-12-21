import React from 'react';
import './style.css';

const PokemonCard = ({id, image, name, type, allPokemons, setPokeBusca, setModalVisible, setNamePokemon}) => {
    const ClickCardPokemon = (arrayPokemons, nome) => {
        const pokemon = arrayPokemons.filter( poke => poke.name === nome)

        setPokeBusca(pokemon);
        setModalVisible(true);
        setNamePokemon('');
    }

    const style = type + " card-container";
    return (
        <div 
            className={style}
            onClick= {() => ClickCardPokemon(allPokemons, name.toLowerCase())}
        >
            <div className="number">#<small>{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonCard;