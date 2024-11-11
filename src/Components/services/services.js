import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import consult from '../images/consult.jpg'
import appointment from '../images/appointment.png'
import self_checkup from '../images/self_checkup.jpg'
import guideline from '../images/guideline.png'

import "./services.css";

const Service = () => {
    return (
        <div className="service">
            <div className="heading">Best services</div>
            <div className="subheading">Love yourself to live a healthy lifestyle</div>
            <div className="offer">
                <Link to='/instant-consultation'>
                    <img src={consult}></img>
                    <p>Instant consultation</p>
                </Link>
                <Link to='/appointment-consultation'>
                    <img src={appointment}></img>
                    <p>Book an appointment</p>
                </Link>
                <Link to='/self-check'>
                    <img src={self_checkup}></img>
                    <p>Self checkup</p>
                </Link>
                <Link to='/health'>
                    <img src={guideline}></img>
                    <p>Health tips and guidelines</p>
                </Link>
            </div>
        </div>
    )
}

export default Service;