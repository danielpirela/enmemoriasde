import './BtnVolver.css'
import BtnFlecha from '../../assets/icons/up-arrow-icon.svg'

const BtnVolver = () => {

    const back = () => {
        
    }

    return (
            <button className="btn">
                <img src={BtnFlecha} alt="" className="btn_flecha"/>
            </button>
    )
}

export default BtnVolver
