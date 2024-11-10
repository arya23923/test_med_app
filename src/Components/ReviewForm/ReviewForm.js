import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './ReviewForm.css'
import { application } from "express";

const Review = () => {
    const storedData = Object.keys(localStorage).filter((key) => key.startsWith('appointments_')).map((key) => JSON.parse(localStorage.getItem(key))).flat();
    console.log(storedData);
    return (
        <div className="review">
            <div className="head"><strong>Review</strong></div>
            <div className="middle">
                <strong>Serial Number</strong>
                <strong>Doctor Name</strong>
                <strong>Doctor Speciality</strong>
                <strong>Provide feedback</strong>
                <strong>Review given</strong>
            </div>
            {/* {storedData.map((appointment, index) => (
                <div className="end">
                    <p>{index+1}</p>
                    <p>{appointment.doctorName}</p>
                    <p>{appointment.doctorSpeciality}</p> 
                    <button>Click here</button>
                    <p></p>
                </div>
            ))} */}
        </div>
    )
}

export default Review;