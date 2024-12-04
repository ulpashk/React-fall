import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import './HomePage.css'
import { getMovies } from "../service/movieService";
// import promo from '../assets/montecristo.png'
// eslint-disable-next-line
import SearchBar from "../components/SearchBar";
// import { moviesList } from "../movieList";
import Category from "../components/Category";
import { Link } from 'react-router-dom';
/*import RunningLine from '../components/run-line.js';*/
import MovieSlide from './MovieSlide';

const HomePage = () => {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        const moviesList = await getMovies();
        setMoviesList(moviesList);
      };
      fetchPosts();
    }, [])

   return(
    <div className="home">
        <Navbar/>

        <div className="home-wrapper">
            <h1>At the Cinema</h1>
            <div>
                <MovieSlide />
            </div>

            {/* <div className="promo">
                <img src={promo} alt="promo"/>
                <div className="promo-wrapper">
                    <h2 className="promo-title">Graf Monte-Cristo</h2>
                    <Link to="https://ticketon.kz/event/graf-monte-kristo-2024">Go Ticketon</Link>
                </div>
            </div> */}

            {/* <SearchBar onSearch={handleSearch} /> */}

            <h3>New This Week</h3>
            <Category category="NewThisWeek" movies={moviesList} type="movie"/>
            <br/>
            <h3>Trending Now</h3>
            <Category category="TrendingNow" movies={moviesList} type="movie"/>
        </div>
    </div>
   )
}

export default HomePage;