import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import "./temp.css"
import { Link } from 'react-router-dom';

import stethoscopeImage from '../images/stethescope.png';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    // Handle clicking the dropdown menu toggle
    const handleClick = () => setClick(!click);

    // Handle user logout and clear session/local storage
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");

        // Remove reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }

        setIsLoggedIn(false);
        setUsername('');
        setEmail('');
        window.location.reload();
    };

    // Handle showing or hiding the dropdown menu
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Check if user is logged in by looking at sessionStorage
    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setEmail(storedEmail); // or you can use the stored value for the username
            setUsername(storedEmail.split('@')[0]);
        }
    }, []);

    return (
            <header>
                <div className="logo">
                    <div className="name">StayHealthy</div>
                    <img src={stethoscopeImage} alt="stethoscope" />
                </div>
                <div className="right">
                    <Link to='/'>Home</Link> 
                    <Link to=''>Appointments</Link>
                    <Link to='' className = 'health'>Health Blog</Link>
                    <Link to=''>Reviews</Link>
                    {/* <Link to='/sign-up' className = 'sign'>Sign up</Link>
                    <Link to='/login' className = 'log'>Login</Link> */}
                     {/* If logged in, show user email and a logout button */}
                    {isLoggedIn ? (
                        <div className="user-info">
                            {/* <button onClick={handleDropdown}> */}
                            <div className="username">Welcome, {username}</div>
                             {/* Display user email or username */}
                            {/* </button> */}
                            {/* {showDropdown && (
                                <div className="dropdown-menu">
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )} */}
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className="auth-links">
                            <Link to='/sign-up' className='sign'>Sign up</Link>
                            <Link to='/login' className='log'>Login</Link>
                        </div>
                    )}
                </div>
            </header>
    );
};

export default Navbar;