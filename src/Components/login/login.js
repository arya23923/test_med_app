import React from 'react';
import { Link } from 'react-router-dom';

import "./login.css"

import backbutton from '../images/back.png'
import healthcare1 from '../images/healthcare1.png'


const login = () => {
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
                    <form>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" placeholder="Enter an email id" required /><br/>
                        <label htmlFor="Password">Password</label><br/>
                        <input type="password" placeholder="Enter a password" required /><br/>
                        <span className="button">
                            <button type="submit" id="submit">Submit</button>
                            <button type="reset" id="reset">Reset</button>
                        </span>
                        <div className="forgot">
                            <Link to=''>Forgot password?</Link>
                        </div>
                    </form>    
                </div>
            </div>
        </>
    );
};

export default login;