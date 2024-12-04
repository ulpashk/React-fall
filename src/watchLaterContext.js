import React, { createContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Create the context
export const WatchLaterContext = createContext();

// Create a provider component
export const WatchLaterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [watchLaterList, setWatchLaterList] = useState([]);

  // Function to add a movie to the watch later list
  const addToWatchLater = (movie) => {
    // Prevent duplicates
    if (!watchLaterList.some((item) => item.id === movie.id)) {
      setWatchLaterList([...watchLaterList, movie]);
    }
    window.alert("Movie is added to Watch Later List");
  };
    // Remove movie from the list
    const removeFromWatchLater = (id) => {
        const userConfirmed = window.confirm("Are you sure you want to remove?");
        if (userConfirmed) {
            setWatchLaterList(watchLaterList.filter((movie) => movie.id !== id));
            navigate('/watchlist');
        } else {
            console.log("User clicked Cancel");
        }
    };

  return (
    <WatchLaterContext.Provider value={{ watchLaterList, addToWatchLater, removeFromWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};
