import './BtnVolver.css'
import { useState } from 'react';
import BtnFlecha from '../../assets/icons/up-arrow-icon.svg'

const BtnVolver = () => {
    
    const [HandleBtn, setHandleBtn] = useState(false);
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    window.addEventListener("scroll", () => {   
        if (window.scrollY > 620) {
            setHandleBtn(false);
        }else{
            setHandleBtn(true);
        }
    });

    return (
        <button onClick={scrollTop} className={HandleBtn ? "none-btn"  : "btn-volver" }>
            <img src={BtnFlecha} alt="" className="btn_flecha"/>
        </button>
    )
}

export default BtnVolver
