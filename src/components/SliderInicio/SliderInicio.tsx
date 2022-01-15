import React from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SliderInicio.css";
import logo from '../../assets/img/logohd.png'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true

  };

export default function SliderInicio() {
    return (
      <div>
        <img src={logo} alt="logo de enmemoriasde" className="logo"/>
        <Slider {...settings} className="slider">
          <div className="fondo_img_slider_1 fondo_img_slider">
            <div className="fondo_img_slider_opacidad">
              <div className="container_titulo">
                <h1>Fabricando recuerdos</h1>
                <p>Los recuerdos son un legado de amor que nos dejan nuestros familiares. A través de ellos, podemos revivir momentos especiales que nos unen a ellos y nos llenan de felicidad.
                </p>
              </div>
            </div>
          </div>
          <div className="fondo_img_slider_2 fondo_img_slider">
            <div className="fondo_img_slider_opacidad">
              <div className="container_titulo">
                <h1>Fabricando recuerdos</h1>
                <p>Los recuerdos son un legado de amor que nos dejan nuestros familiares. A través de ellos, podemos revivir momentos especiales que nos unen a ellos y nos llenan de felicidad.
                </p>
              </div>
            </div>
          </div>
          <div className="fondo_img_slider_3 fondo_img_slider">
            <div className="fondo_img_slider_opacidad">
              <div className="container_titulo">
                <h1>Fabricando recuerdos</h1>
                <p>Los recuerdos son un legado de amor que nos dejan nuestros familiares. A través de ellos, podemos revivir momentos especiales que nos unen a ellos y nos llenan de felicidad.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
}
