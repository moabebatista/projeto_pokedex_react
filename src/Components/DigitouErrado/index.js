import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './style.css';

const DigitouErrado = () => {
    const {setAlertErro} = useContext(UserContext);

    const handleClick = () => {
        setAlertErro(false);
    }
    return (
        <div 
            className="alert-02"
            onClick={() => handleClick()}
        >
            <span>Ops! Este Pokémon não existe.</span>
        </div>
    )
}

export default DigitouErrado;