import { React } from "react";
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import logo from '../assets/logo.svg'
import home from '../assets/bx_home-alt-2.svg'
import movies from '../assets/mdi_movie-open-outline.svg'
import user from '../assets/Vector.svg'
import clock from '../assets/clock.svg'
import logout from '../assets/circum_logout.svg'
import './components.css';
const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleLogout = () => {

        // Перенаправление пользователя на страницу входа
        navigate('/login');
    };
   return(
    <div className="navbar">
        <div className="navbar-wrapper">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="menu">
                <Link to="/home" className={isActive('/home')}><img src={home} alt="icon"/> Home</Link>
                <Link to="/movies" className={isActive('/movies')}><img src={movies} alt="icon"/> Movies</Link>
                <Link to="/watchlist" className={isActive('/watchlist')}><img src={clock} alt="icon"/> Watch Later </Link>
                <Link to="/user" className={isActive('/user')}><img src={user} alt="icon"/> User</Link>
            </div>
        </div>

        <button onClick={handleLogout} className="logout">
                <img src={logout} alt="icon"/> Logout
            </button>
    </div>
   )
}

export default Navbar;