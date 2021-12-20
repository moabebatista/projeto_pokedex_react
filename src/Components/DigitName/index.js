import './style.css';

const DigitName = ({setAlertDigite}) => {
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