import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './style.css';

const DigitName = () => {
    const {setAlertDigite} = useContext(UserContext);
    
    const handleClick = () => {
        setAlertDigite(false);
    }
    return (
        <div 
            className="alert-01"
            onClick={() => handleClick()}
        >
            <span>Por Favor, digite um nome!</span>
        </div>
    )
}

export default DigitName;