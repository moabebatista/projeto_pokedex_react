import './style.css';
import UserContext from '../../contexts/UserContext'
import { useContext } from 'react';

const PokemonCard = ({id, image, name, type}) => {
    const { allPokemons, setPokeBusca, setModalVisible, setNamePokemon } = useContext(UserContext);

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