import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


import "./sign_up.css"

import backbutton from '../images/back.png'
import signImage from '../images/sign.jpg'

const sign = () => {
    
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
                    <form>
                        <label htmlFor="Role">Role</label><br/>
                        <select name="role" id="role" required>
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                        </select><br/>
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" placeholder="Enter a name" required /><br/>
                        <label htmlFor="Phone">Phone</label><br/>
                        <input type="number" placeholder="Enter a phone number" required /><br/>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" placeholder="Enter an email id" required /><br/>
                        <label htmlFor="Password">Password</label><br/>
                        <input type="password" placeholder="Enter a password" required /><br/>
                        <span className="button">
                            <button type="submit" id="submit">Submit</button>
                            <button type="reset" id="reset">Reset</button>
                        </span>
                    </form>    
                </div>
            </div>
        </>
    );
};

export default sign;