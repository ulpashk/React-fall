import { React, useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import './components.css';
import star from '../assets/star.svg'
// eslint-disable-next-line
import test from '../assets/montecristo.png'
const Category = ({category,movies, type}) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        // Mock fetching content
        if (type === 'movie') {
          setContent(movies);
        }
      }, [movies, type]);

      const filteredContent = useMemo(() => {
        if(category){
            return content.filter(item => item.category === category)
        } else{
            return content
        }
      }, [category, content]);

   return(
    <div className="category">
            {filteredContent.length > 0 ? (
                filteredContent.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-item">
                        <div className="movie-item-img">
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                        <h3>{movie.title}</h3>
                        
                        <div className="movie-descr">
                            <p className="movie-rating"><img src={star} alt="rating"/> {movie.rating}</p>
                            <p className="movie-year">{movie.releaseYear}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No movies found in this category.</p>
            )}
    </div>
   )
}

export default Category;