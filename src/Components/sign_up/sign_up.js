import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config.js';

import './sign_up.css';
import backbutton from '../images/back.png';
import signImage from '../images/sign.jpg';

const Sign = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State for error messages
    const [error, setError] = useState(null); // General error message for display

    const navigate = useNavigate();

    // Handler for input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'role') setRole(value);
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
        if (name === 'password') setPassword(value);
    };

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent form default submission
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    role,
                    email,
                    name,
                    password,
                    phone,
                }),
            });

            const json = await response.json(); // Parse JSON response
            if (json.authtoken) {
                // Store user data in session storage
                sessionStorage.setItem("auth-token", json.authtoken);
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("phone", phone);
                sessionStorage.setItem("email", email);

                // Redirect to home page
                navigate("/");
                window.location.reload();
            } else {
                if (json.errors) {
                    setShowerr(json.errors[0].msg); // Display the first error message
                    console.log('nothing happening byatch multiple')
                } else {
                    console.log(json.error);
                    console.log('nothing much single')
                }
                
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
            setError("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <>
            <div className="back">
                <Link to='/'>
                    <img src={backbutton} alt='back' />
                </Link>
            </div>
            <div className="form-sign">
                <div className="left-sign">
                    <img src={signImage} alt='sign' />
                </div>
                <div className="right-sign">
                    <div className="heading">Sign up</div>
                    <div className="subheading">
                        <span className="member">Already a member?</span>
                        <Link to='/login'>Login</Link>
                    </div>
                    <form onSubmit={register}>
                        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                        <label htmlFor="role">Role</label><br />
                        <select name="role" id="role" onChange={handleChange} required>
                            <option value="">Select option</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                        </select><br />
                        
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" placeholder="Enter a name" onChange={handleChange} required /><br />
                        
                        <label htmlFor="phone">Phone</label><br />
                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        <input type="text" name="phone" placeholder="Enter a phone number" onChange={handleChange} required /><br />
                        
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" placeholder="Enter an email id" onChange={handleChange} required /><br />
                        
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" placeholder="Enter a password" onChange={handleChange} required /><br />
                        
                        <span className="button">
                            <button type="submit" id="submit">Submit</button>
                            <button type="reset" id="reset" onClick={() => { setRole(''); setName(''); setPhone(''); setEmail(''); setPassword(''); setError(null); setShowerr(''); }}>Reset</button>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Sign;
