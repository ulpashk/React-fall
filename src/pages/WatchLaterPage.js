import React, { useContext } from 'react';
import { WatchLaterContext } from '../watchLaterContext';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
// import './components.css';
import star from '../assets/star.svg'
import { Button } from 'antd'

function WatchLaterPage() {
  const { watchLaterList } = useContext(WatchLaterContext);

  return (
    
    <div className="home">
      <Navbar />
      <div className="home-wrapper">
        <div className="movie-detail">
            <h1>Watch Later Movies</h1>
            <div className="category">
            {watchLaterList.length > 0 ? (
                watchLaterList.map((movie) => (
                  <div>
                    <Link to={`/watchlist/${movie.id}`} key={movie.id} className="movie-item">
                        <div className="movie-item-img">
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <h3>{movie.title}</h3>
                        
                        <div className="movie-descr">
                            <p className="movie-rating"><img src={star} alt="rating"/> {movie.rating}</p>
                            {/* <p className="movie-year">{movie.releaseYear}</p> */}
                        </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No movies found in this category.</p>
            )}
            </div>
        </div>
      </div>
    </div>
        );
      }
      
      export default WatchLaterPage;