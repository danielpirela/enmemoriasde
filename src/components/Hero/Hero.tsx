import './Hero.css'

const Hero = (props:any) => {
    return (
        <div className="fondo_hero">
            <h1>{props.nombre}</h1>
        </div>
    )
}

export default Hero
