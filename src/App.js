import React, {useState} from 'react';
import './App.css';
// import {} from 'antd';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './userContext';
import { WatchLaterProvider } from './watchLaterContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetail from './pages/MovieDetail'
import UserPage from './pages/UserPage'
import WatchLaterPage from './pages/WatchLaterPage'
import WatchLaterMovie from './pages/WatchLaterMovie'


// 84c422344de14c64664385e01881c87b api

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    // Function to simulate login (You can change it to real logic later)
    const handleLogin = () => {
      setIsAuthenticated(true);
    };
  
    return (
      <UserProvider>
      <Router>
        <WatchLaterProvider>
        <Routes>
          {/* Default route to Login page */}
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
  
          {/* Protected route for Home page */}
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <HomePage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/user"
            element={
              isAuthenticated ? (
                <UserPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

            <Route
            path="/movies"
            element={
              isAuthenticated ? (
                <MoviesPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
            <Route
            path="/watchlist"
            element={
              isAuthenticated ? (
                <WatchLaterPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/watchlist/:id" element={<WatchLaterMovie/>} />

          {/* Динамический routing */}

          <Route path="/movie/:id" element={<MovieDetail />} />
  
          {/* Redirect from root to login if not authenticated */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </WatchLaterProvider>
      </Router>
      </UserProvider>
      
    );

};

export default App;