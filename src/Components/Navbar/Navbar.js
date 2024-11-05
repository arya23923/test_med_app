import React from 'react';
import './Navbar.css';
import stethoscopeImage from '../images/stethescope.png';


const navbar = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <div className="name">StayHealthy</div>
                    <img src={stethoscopeImage} alt="stethoscope" />
                </div>
                <div className="right">
                    <a href="#">Home</a>
                    <a href="#">Appointments</a>
                    <div className="health"><a href="#">Health Blog</a></div>
                    <a href="#">Reviews</a>
                    <div className="sign"><a href="#">Sign up</a></div>
                    <div className="log"><a href="#">Login</a></div>
                </div>
            </header>
        </>
    );
};

export default navbar;