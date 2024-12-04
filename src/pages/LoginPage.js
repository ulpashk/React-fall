import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import LoginImage1 from '../assets/movie-1.png';
import LoginImage2 from '../assets/movie-3d-glasses1.png';
import { fetchUsers } from '../service/movieService';
import { UserContext } from '../userContext';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { setUserId } = useContext(UserContext); // Доступ к функции для установки ID пользователя

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };
        
        loadUsers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            setUserId(user.id); // Сохранение ID пользователя в контексте
            onLogin();
            navigate('/home');
        } else {
            alert('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="background-images">
                <img src={LoginImage1} alt="login-img1" className='login-img1' />
                <img src={LoginImage2} alt="login-img2" className='login-img2' />
            </div>
            <div className="content">
                <h1>Unlimited movies, <br />TV shows, and more</h1>
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            className="input-field"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            className="input-field"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;