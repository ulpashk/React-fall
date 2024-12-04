import React from 'react';
import './MovieSlide.css'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import promo from '../assets/montecristo.png'
import moana from '../assets/moanaa.png'
import panda from '../assets/pandaplan.png'

const movies = [
  { id: 1, title: 'Graf Monte-Cristo', image: promo },
  { id: 2, title: 'Moana 2', image: moana },
  { id: 3, title: 'Panda Plan', image: panda },
];

const MovieSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Animation speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Time between slides (3 seconds)
    arrows: true, // Show next/previous arrows
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => (
            <div>
                <div className="promo" key={movie.id}>
                    {/* <img src={movie.image} alt={movie.title} style={{ width: '100%', height: 'auto' }} /> */}
                    <img src={movie.image} alt={movie.title} style={{ width: '70%', height: 'auto' }} />
                    <h2 className="promo-title">{movie.title}</h2>     
                </div>
                
            </div>
          /* <div className="promo">
                <img src={promo} alt="promo"/>
                <div className="promo-wrapper">
                    <h2 className="promo-title">Graf Monte-Cristo</h2>
                    <Link to="https://ticketon.kz/event/graf-monte-kristo-2024">Go Ticketon</Link>
                </div>
            </div> */
        ))}
      </Slider>
      <div className="promo-wrapper">
                    <Link to="https://ticketon.kz/event/graf-monte-kristo-2024">Go Ticketon</Link>
        </div>
    </div>
  );
};

export default MovieSlide;
