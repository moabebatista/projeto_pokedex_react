import { useContext } from 'react';
import coracao from '../../assets/coracao.png';
import defesa from '../../assets/defesa.png';
import espada from '../../assets/espadas.png';
import raio from '../../assets/parafuso.png';
import UserContext from '../../contexts/UserContext';
import './style.css';


const ModalBusca = () => {
    const {setModalVisible, pokeBusca, setNamePokemon,  setPokeBusca} = useContext(UserContext);

    const handleCloseModal = () => {
        setModalVisible(false);
        setNamePokemon('');
        setPokeBusca([]);
    }

    return (
        <div 
        className="background--modal"
        onClick={() => handleCloseModal()}
        >
            <div className='modal-busca'>
                <div classeName="image-pokemon">
                    <h4>{pokeBusca[0].name.toUpperCase()}</h4>
                    <img 
                        src={pokeBusca[0].sprites.other.dream_world.front_default} 
                        alt={pokeBusca[0].name} 
                    />
                    <p>Weight: {pokeBusca[0].weight} lbs</p>
                    <p>Height: {pokeBusca[0].height}"</p>
                </div>
                <div className="detail-wrapper-modal">
                    <div className="titulo--modal">
                    <h1>Status</h1>
                    <h2 classeName="btn-close" onClick={() => handleCloseModal()}>closed</h2>
                    </div>
                    <div className="detail-caracteristcas">
                        <small><img src={coracao} alt="coração" />HP: {pokeBusca[0].stats[0].base_stat}</small>
                        <small><img src={espada} alt="espada" />Attack: {pokeBusca[0].stats[1].base_stat}</small>
                        <small><img src={defesa} alt="escudo" />Defence: {pokeBusca[0].stats[2].base_stat}</small>
                        <small><img src={raio} alt="raio" />Speed: {pokeBusca[0].stats[5].base_stat}</small>
                        {/* <small>Habilidade princiapl: {pokeBusca[0].abilities[0].ability.name}</small>
                        <small>Bese Experience: {pokeBusca[0].base_experience}</small> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBusca;