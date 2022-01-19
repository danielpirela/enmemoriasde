import "./MenuInicio.css";
import React, { useState } from "react";
import InputSearch from "../InputSearch/InputSearch";


const MenuInicio = () => {
  
  const [Scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {   
    if (window.scrollY >= 609) {
      setScroll(true);
    }else{
      setScroll(false);
    }
  });

  return (
    <div className={Scroll ? "none" : "menu-inicio"}>
      <ul className="nav_list">
        <a className="nav_link" href="/">
          Inicio
        </a>
        <a className="nav_link" href="/memorias">
          Memorias
        </a>
        <a className="nav_link" href="/libros-interes">
          Libros de interes
        </a>
        <a className="nav_link" href="/sobre-nosotros">
          Sobre Nosotros
        </a>
        <a className="nav_link" href="/contactanos">
          Contactanos
        </a>
      </ul>
      <InputSearch />
    </div>
  );
};

export default MenuInicio;
