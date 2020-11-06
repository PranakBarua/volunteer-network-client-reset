import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../src/logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const HeaderTop = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    console.log(loggedInUser)
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img className="logoImg" src={logo} alt=""/>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav"> 
                        <Link className="gap" to="/home">Home</Link>
                        <Link className="gap" to="/donation">Donation</Link>
                        <Link className="gap" to="/events">Events</Link>
                        <Link className="gap" to="/dashboard">Dashboard</Link>
                        <Link className="gap" ><button className="btn btn-primary">Register</button></Link>
                        {loggedInUser.name?<h5>{loggedInUser.name}</h5>:
                        <Link className="gap" to="/dashboard"><button className="btn btn-secondary">Admin</button></Link>}
                    </div>
                </nav>
        </div>
    );
};

export default HeaderTop;