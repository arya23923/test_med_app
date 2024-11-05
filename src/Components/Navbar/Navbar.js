import React from 'react';
import "./Navbar.css";
// import "./temp.css"
import { Link } from 'react-router-dom';

import stethoscopeImage from '../images/stethescope.png';


const navbar = () => {
    return (
            <header>
                <div className="logo">
                    <div className="name">StayHealthy</div>
                    <img src={stethoscopeImage} alt="stethoscope" />
                </div>
                <div className="right">
                    {/* <a href="#">Home</a>
                    <a href="#">Appointments</a>
                    <a href="#" className = 'health'>Health Blog</a>
                    <a href="#">Reviews</a>
                    <a href="#" className = 'sign'>Sign up</a>
                    <a href="#" className = 'log'>Login</a> */}
                    <Link to='/'>Home</Link> 
                    <Link to=''>Appointments</Link>
                    <Link to='' className = 'health'>Health Blog</Link>
                    <Link to=''>Reviews</Link>
                    <Link to='/sign-up' className = 'sign'>Sign up</Link>
                    <Link to='/login' className = 'log'>Login</Link>
                </div>
            </header>
    );
};

export default navbar;