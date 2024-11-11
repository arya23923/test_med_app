import React, { useState, useEffect } from 'react';
import medical_report from '../../medicalreport.pdf'

import './ReportsLayout.css'

const Report = () => {
    const storedData = Object.keys(localStorage)
        .filter((key) => key.startsWith('appointments_'))
        .map((key) => JSON.parse(localStorage.getItem(key)))
        .flat();

    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState({});
    const [submittedReviews, setSubmittedReviews] = useState({});

    // Load reviews from localStorage when component mounts
    useEffect(() => {
        const savedReviews = {};
        const savedSubmittedReviews = {};

        storedData.forEach((appointment) => {
            const appointmentId = appointment.id;
            const reviewData = JSON.parse(localStorage.getItem(`report_${appointmentId}`));

            if (reviewData) {
                savedReviews[appointmentId] = reviewData.reviewText;
                savedSubmittedReviews[appointmentId] = true; // Mark as reviewed
            }
        });

        setReviews(savedReviews);
        setSubmittedReviews(savedSubmittedReviews);
    }, [storedData]);

    const handleReviewSubmit = (appointmentId, reviewText, appointment) => {
        const reviewData = {
            doctorName: appointment.doctorName,
            doctorSpeciality: appointment.doctorSpeciality,
            reviewText: reviewText,
            rating: rating,
        };

        // Save to localStorage
        localStorage.setItem(`report_${appointmentId}`, JSON.stringify(reviewData));

        // Update state to reflect submitted review
        setReviews((prevReviews) => ({
            ...prevReviews,
            [appointmentId]: reviewText,
        }));
        setSubmittedReviews((prevSubmittedReviews) => ({
            ...prevSubmittedReviews,
            [appointmentId]: true,
        }));
    };
    const onButtonClickDownload = () => {
        const pdfUrl = '../../medicalreport.pdf';
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "medicalreport.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="review">
            <div className="head">
                <strong>Review</strong>
            </div>
            <div className="middle">
                <strong>Serial Number</strong>
                <strong>Doctor Name</strong>
                <strong>Doctor Speciality</strong>
                <strong>View report</strong>
                <strong>Download report</strong>
            </div>
            <div className="end">
                {storedData.map((appointment, index) => {
                    const appointmentId = appointment.id;

                    return (
                        <div className="details" key={appointmentId}>
                            <p>{index + 1}.</p>
                            <p>{appointment.doctorName}</p>
                            <p>{appointment.doctorSpeciality}</p>
                            <p><button><a href={medical_report} target="_blank" rel="noreferrer" style={{color:'white'}}>View Report</a></button></p>
                            <p><button onClick={onButtonClickDownload}>Download Report</button></p>
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Report;
