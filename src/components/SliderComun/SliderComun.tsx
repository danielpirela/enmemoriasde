import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import "./SliderComun.css";

const SliderComun = () => {
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };


  return (
    <div className="container_slider_comun">
      <Slider {...settings} className="slider_comun">
        <div className="fondo_img_slider_comun_1 fondo_img_slider_comun">
          <div className="fondo_img_slider_opacidad_comun"></div>
        </div>
        <div className="fondo_img_slider_comun_2 fondo_img_slider_comun">
          <div className="fondo_img_slider_opacidad_comun"></div>
        </div>
        <div className="fondo_img_slider_comun_3 fondo_img_slider_comun">
          <div className="fondo_img_slider_opacidad_comun"></div>
        </div>
        <div className="fondo_img_slider_comun_1 fondo_img_slider_comun">
          <div className="fondo_img_slider_opacidad_comun"></div>
        </div>
        <div className="fondo_img_slider_comun_2 fondo_img_slider_comun">
          <div className="fondo_img_slider_opacidad_comun"></div>
        </div>
        <div className="fondo_img_slider_comun_3 fondo_img_slider_comun">
          <div className="fondo_img_slider_opacidad_comun"></div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComun;
