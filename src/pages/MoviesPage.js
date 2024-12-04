import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import './HomePage.css';
// import promo from '../assets/montecristo.png'; // eslint-disable-line
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
// import { Link } from 'react-router-dom'; // eslint-disable-line
import withLoader from '../components/Loader';
import { getMovies } from "../service/movieService";

const CategoryWithLoader = withLoader(Category);

const MoviesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const movies = await getMovies();
            setMoviesList(movies);
            setFilteredMovies(movies); // Синхронизируем `filteredMovies` после загрузки
            setIsLoading(false);
        };
        fetchPosts();
    }, []); // Выполняем только один раз при монтировании

    const handleSearch = (query) => {
        const searchQuery = query.toLowerCase();
        const filtered = moviesList.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery)
        );
        setFilteredMovies(filtered);
    };

    return (
        <div className="home">
            <Navbar />
            <div className="home-wrapper">
                <SearchBar onSearch={handleSearch} />
                <CategoryWithLoader
                    isLoading={isLoading}
                    category=""
                    movies={filteredMovies}
                    type="movie"
                />
            </div>
        </div>
    );
};

export default MoviesPage;