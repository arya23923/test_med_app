// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// // import "./temp.css"
// import { Link } from 'react-router-dom';

// import stethoscopeImage from '../images/stethescope.png';


// const Navbar = () => {

//     const [click, setClick] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [showDropdown, setShowDropdown] = useState(false);

//     // Handle clicking the dropdown menu toggle
//     const handleClick = () => setClick(!click);

//     // Handle user logout and clear session/local storage
//     const handleLogout = () => {
//         sessionStorage.removeItem("auth-token");
//         sessionStorage.removeItem("name");
//         sessionStorage.removeItem("email");
//         sessionStorage.removeItem("phone");
//         localStorage.removeItem("doctorData");

//         // Remove reviewFormData from local storage
//         for (let i = 0; i < localStorage.length; i++) {
//             const key = localStorage.key(i);
//             if (key.startsWith("reviewFormData_")) {
//                 localStorage.removeItem(key);
//             }
//         }

//         setIsLoggedIn(false);
//         setUsername('');
//         setEmail('');
//         window.location.reload();
//     };

//     // Handle showing or hiding the dropdown menu
//     const handleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     // Check if user is logged in by looking at sessionStorage
//     useEffect(() => {
//         const storedEmail = sessionStorage.getItem("email");
//         if (storedEmail) {
//             setIsLoggedIn(true);
//             setEmail(storedEmail); // or you can use the stored value for the username
//             setUsername(storedEmail.split('@')[0]);
//         }
//     }, []);

//     return (
//             <header>
//                 <div className="logo">
//                     <div className="name">StayHealthy</div>
//                     <img src={stethoscopeImage} alt="stethoscope" />
//                 </div>
//                 <div className="right">
//                     <Link to='/service'>Home</Link> 
//                     <Link to=''>Appointments</Link>
//                     <Link to='' className = 'health'>Health Blog</Link>
//                     <Link to='/review'>Reviews</Link>
//                     {/* <Link to='/sign-up' className = 'sign'>Sign up</Link>
//                     <Link to='/login' className = 'log'>Login</Link> */}
//                      {/* If logged in, show user email and a logout button */}
//                     {isLoggedIn ? (
//                         <div className="user-info-navbar">
//                             <button className='drop' onClick={handleDropdown} style={{padding:'1vw', fontWeight:'regular', backgroundColor:'white', color:'black', display:'flex', flexDirection:'columns'}}>
//                                 <div className="username">Welcome, {username}</div>
//                                 {/* Display user email or username */}
//                                 {showDropdown && (
//                                 <div className="dropdown-menu">
//                                     <Link to='/profile' style={{padding:'1%', fontWeight:'regular', backgroundColor:'white', color:'rgb(100,100,100)', marginTop:'5vh', width:'fit-content'}}>Your profile</Link>
//                                 </div>
//                                 )}
//                             </button>
                            
//                             <button className='logout' onClick={handleLogout}>Logout</button>
//                         </div>
//                     ) : (
//                         <div className="auth-links">
//                             <Link to='/sign-up' className='sign'>Sign up</Link>
//                             <Link to='/login' className='log'>Login</Link>
//                         </div>
//                     )}
//                 </div>
//             </header>
//     );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import stethoscopeImage from '../images/stethescope.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");

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

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setEmail(storedEmail);
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
                <Link to='/service'>Home</Link> 
                <Link to=''>Appointments</Link>
                <Link to='' className='health'>Health Blog</Link>
                <Link to='/review'>Reviews</Link>

                {isLoggedIn ? (
                    <div className="user-info-navbar">
                        <button
                            className="drop"
                            onClick={handleDropdown}
                            style={{ padding: '1vw', fontWeight: 'regular', backgroundColor: 'white', color: 'black' }}
                        >
                            <div className="username">Welcome, {username}</div>
                        </button>

                        {showDropdown && (
                            <div className="dropdown-menu">
                                <Link to='/profile' style={{ padding: '1%', color: 'rgb(100,100,100)' }}>
                                    Your profile
                                </Link>
                                <Link to='/report' style={{ padding: '1%', color: 'rgb(100,100,100)' }}>
                                    Your reports
                                </Link>
                            </div>
                        )}

                        <button className="logout" onClick={handleLogout}>Logout</button>
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
