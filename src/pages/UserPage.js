// eslint-disable-next-line
import React, { useContext } from 'react';
import { UserContext } from '../userContext';
import Navbar from "../components/Navbar";
import './UserPage.css'
import avatar from '../assets/avatar.png'

const UserPage = () => {
    const { userId } = useContext(UserContext);
    console.log(userId);
    
   return(
    <div className="home">
        <Navbar/>

        <div className="home-wrapper">
            <div className="user-wrapper">
                <div className="user-avatar">
                    <img src={avatar} alt="ava"/>
                    <p>Photo</p>
                </div>
                <form>
                    <div>
                        <p>Name:</p>
                        <input placeholder="Zhibek" />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input placeholder="z_kazbek@kbtu.kz" />
                    </div>
                    <div>
                        <p>Phone:</p>
                        <input placeholder="1232456432134t65" />
                    </div>

                    <button type="submit" className="login-button">Save</button>
                </form>

            </div>
        </div>
    </div>
   )
}

export default UserPage;