import React from 'react';
import './style.css';
import coracao from '../../assets/coracao.png';
import defesa from '../../assets/defesa.png';
import espada from '../../assets/espadas.png';
import raio from '../../assets/parafuso.png';


const ModalBusca = ({setModalVisible, pokeBusca, setNamePokemon,  setPokeBusca}) => {
    const handleCloseModal = () => {
        setModalVisible(false);
        setNamePokemon('');
        setPokeBusca([]);
    }

    return (
        <div className="background--modal">
            <div className='modal-busca'>
                <h1 classeName="btn-close" onClick={() => handleCloseModal()}>closed</h1>
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
                    <h2>Status</h2>
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