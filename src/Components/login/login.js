// import React from 'react';
// import { Link } from 'react-router-dom';

// import "./login.css"

// import backbutton from '../images/back.png'
// import healthcare1 from '../images/healthcare1.png'


// const Login = () => {
//     return (
//         <>
//             <div className="back-login">
//                 <Link to='/'>
//                     <img src={backbutton} alt='back' />
//                 </Link>
//             </div>
//             <div className="form-login">
//                 <div className="left-login">
//                     <img src={healthcare1} alt='healthcare1' />
//                 </div>
//                 <div className="right-login">
//                     <div className="heading">Login</div>
//                     <div className="subheading">
//                         <span className="member">Not a member?</span>
//                         <Link to='/sign-up'>Sign up</Link>
//                     </div>
//                     <form>
//                         <label htmlFor="email">Email</label><br/>
//                         <input type="email" placeholder="Enter an email id" required /><br/>
//                         <label htmlFor="Password">Password</label><br/>
//                         <input type="password" placeholder="Enter a password" required /><br/>
//                         <span className="button">
//                             <button type="submit" id="submit">Submit</button>
//                             <button type="reset" id="reset">Reset</button>
//                         </span>
//                         <div className="forgot">
//                             <Link to=''>Forgot password?</Link>
//                         </div>
//                     </form>    
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import backbutton from '../images/back.png'
import healthcare1 from '../images/healthcare1.png'
import './login.css';  // Apply CSS according to your design theme

const Login = () => {
  // State variables for email, password, and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Navigation function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated and redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    setError(null);  // Clear any previous error

    try {
      // Send a POST request to the login API endpoint
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();
      if (res.ok && json.authtoken) {
        // If authentication is successful, store the token and redirect
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('email', email);
        navigate('/');
        window.location.reload();
      } else {
        // Handle errors returned from the server
        setError(json.errors ? json.errors.map(e => e.msg).join(", ") : json.error);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="back-login">
        <Link to='/'>
          <img src={backbutton} alt='back' />
        </Link>
      </div>
      <div className="form-login">
        <div className="left-login">
          <img src={healthcare1} alt='healthcare1' />
        </div>
        <div className="right-login">
          <div className="heading">Login</div>
          <div className="subheading">
            <span className="member">Not a member?</span>
            <Link to='/sign-up'>Sign up</Link>
          </div>

          {/* Login form */}
          <form onSubmit={login}>
            {/* Email Input */}
            <label htmlFor="email">Email</label><br/>
            <input
              type="email"
              placeholder="Enter an email id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/>

            {/* Password Input */}
            <label htmlFor="Password">Password</label><br/>
            <input
              type="password"
              placeholder="Enter a password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/>

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Submit and Reset Buttons */}
            <span className="button">
              <button type="submit" id="submit">Submit</button>
              <button type="reset" id="reset" onClick={() => { setEmail(''); setPassword(''); setError(null); }}>Reset</button>
            </span>

            <div className="forgot">
              <Link to='/forgot-password'>Forgot password?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
