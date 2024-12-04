import { React, useState, useEffect, useContext } from "react";
import { getMovies } from "../service/movieService";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { WatchLaterContext } from '../watchLaterContext';
import { Button } from 'antd';
import './MovieDetail.css'

const WatchLaterMovie = () => {
  const { id } = useParams(); // Get movie id from URL
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  // const { addToWatchLater } = useContext(WatchLaterContext);
  const {removeFromWatchLater } = useContext(WatchLaterContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const moviesList = await getMovies();
        setMoviesList(moviesList);
        
        
        setIsLoading(false); // Data is loaded
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const movie = moviesList.find((movie) => movie.id === id);

  if (isLoading) {
    return <p>Loading...</p>; // Display while loading
  }

  if (!movie) {
    return <p>Movie not found</p>; // Handle missing movie
  }

  return (
    <div className="home">
      <Navbar />
      <div className="home-wrapper">
        <div className="movie-detail">
            <div className="movie-detail_wrap">
                <img src={movie.poster} alt={`${movie.title} poster`} />
            </div>
          <h1>{movie.title}</h1>
          <p>Rating: {movie.rating}</p>
          <p>Release Year: {movie.releaseYear}</p>
          <p>Description: {movie.description}</p>
          
        </div>
        <Button id="bttn-del" type="primary" danger onClick={() => removeFromWatchLater(movie.id)}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default WatchLaterMovie;