import "./MenuInicio.css";
import InputSearch from "../InputSearch/InputSearch";
const MenuInicio = () =>{
  return (
    <div className="menu-inicio">
      <ul className="nav_list">
        <a className="nav_link" href="/">Inicio</a>
        <a className="nav_link" href="/memorias">Memorias</a>
        <a className="nav_link" href="/libros-interes">Libros de interes</a>
        <a className="nav_link" href="/sobre-nosotros">Sobre Nosotros</a>
        <a className="nav_link" href="/contactanos">Contactanos</a>
      </ul>
      <InputSearch/>
    </div>
  );
}

export default MenuInicio;