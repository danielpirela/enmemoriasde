import './ContenidoDeHome.css';
import SliderComun from '../SliderComun/SliderComun';

const ContenidoDeHome = () => {
    return (
        <div>
            <div className="container_homenaje">
                <div className="container_homenaje_descripcion">
                    <h1>Un homenaje distinto</h1>
                    <p>Los recuerdos son un legado de amor que nos dejan nuestros familiares. A través de ellos, podemos revivir momentos especiales que nos unen a ellos y nos llenan de felicidad. Gracias a la tecnología, podemos conservar estos recuerdos para siempre, gracias a los códigos QR. Con ellos, podemos acceder a todas las fotos que tenemos de nuestros seres queridos, de una forma muy sencilla. ¡Aprovecha esta herramienta para conservar los recuerdos de tu familia!</p>
                </div>
                <SliderComun/>
            </div> 
        </div>
    )
}

export default ContenidoDeHome
