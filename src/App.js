import { useEffect, useState } from 'react';
import PokemonThumb from './Components/PokemonThumb';
import ModalBusca from './Components/ModalBusca';
import left from './assets/seta-esquerda-branca.svg';
import rigth from './assets/seta-direita-branca.svg';
import imgPokemon from './assets/1200px-International_Pokémon_logo.svg.png';
import DigitName from './Components/DigitName';
import DigitouErrado from './Components/DigitouErrado';

const App = () => {

  const[allPokemons, setAllPokemons] = useState([]);
  const[scrollX, setScrollX] = useState(-1200);
  const[loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon');
  const[namePokemon, setNamePokemon] = useState('');
  const[pokeBusca, setPokeBusca] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  const[alertDigite, setAlertDigite] = useState(false);
  const[alertErro, setAlertErro] = useState(false);


 useEffect(() => {
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next);    

    function createPokemonObject(results)  {
      results.map( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      })
    }

    createPokemonObject(data.results)
  }
  getAllPokemons()
 }, [loadMore])

 const handlePokemonLeft = () => {
  let x = scrollX + Math.round(window.innerWidth / 2);
  if(x > 0) {
    x = 0;
  }
  setScrollX(x)
 }

 const handlePokemonRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let pkW = allPokemons.length * 161.6;

    if((window.innerWidth - pkW) > x ) {
      x = window.innerWidth - pkW;
    }

   setScrollX(x)
 }

 const handleClickPokemon = (arrayPokemons, nome) => {

    const pokemon = arrayPokemons.filter( poke => poke.name === nome)

    if(!namePokemon) {
      return setAlertDigite(true) ;
    }

    if (pokemon.length === 0) {
      return setAlertErro(true)
    }

    setPokeBusca(pokemon);
    setModalVisible(true);
    setNamePokemon('');
 }

  return (
    <div className="app-contaner">
      <h1 className="titulo"><img src={imgPokemon} alt="pokemon" /> Evolution</h1>
      <div className="busca">
      <input 
        className='input' 
        type="text"
        placeholder="Digite o nome do Pokemon..."
        onChange={(e) => setNamePokemon(e.target.value)}
        value={namePokemon}
      />
      <button 
        onClick= {() => handleClickPokemon(allPokemons, namePokemon.toLowerCase())}
      >
        Buscar
      </button>
      </div>
      <div 
        className="pokemon-container" 
      >
        <div className="pokemon--left" onClick={handlePokemonLeft}>
          <img src={left} alt="seta esquerda" />
        </div>
        <div className="pokemon--right" onClick={handlePokemonRight}>
          <img src={rigth} alt="seta direita" />
        </div>
        <div 
          className="all-container" 
          style={{
            marginLeft: scrollX
          }}
        >
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
          
      </div>
      {modalVisible && 
        <ModalBusca 
        setModalVisible = {setModalVisible}
        pokeBusca = {pokeBusca}
        setNamePokemon = {setNamePokemon}
        setPokeBusca = { setPokeBusca}
        />
      }
      {alertDigite && 
      <DigitName
        setAlertDigite={setAlertDigite}
      />}
      {alertErro && 
      <DigitouErrado
        setAlertErro={setAlertErro}
      />
      }
    </div>
  );
}

export default App;