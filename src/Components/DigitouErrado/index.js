import './style.css';

const DigitouErrado = ({setAlertErro}) => {
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