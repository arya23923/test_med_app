import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

import './ReviewForm.css'
import Fivestar from '../Fivestar.js'

const Review = () => {
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
            const reviewData = JSON.parse(localStorage.getItem(`review_${appointmentId}`));

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
        localStorage.setItem(`review_${appointmentId}`, JSON.stringify(reviewData));

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

    return (
        <div className="review">
            <div className="head">
                <strong>Review</strong>
            </div>
            <div className="middle">
                <strong>Serial Number</strong>
                <strong>Doctor Name</strong>
                <strong>Doctor Speciality</strong>
                <strong>Provide feedback</strong>
                <strong>Review given</strong>
            </div>
            <div className="end">
                {storedData.map((appointment, index) => {
                    const appointmentId = appointment.id;

                    return (
                        <div className="details" key={appointmentId}>
                            <p>{index + 1}.</p>
                            <p>{appointment.doctorName}</p>
                            <p>{appointment.doctorSpeciality}</p>
                            <p>
                                <Popup
                                    trigger={
                                        <button disabled={submittedReviews[appointmentId]}>
                                            {submittedReviews[appointmentId] ? 'Feedback Given' : 'Click Here'}
                                        </button>
                                    }
                                    modal
                                    nested
                                >
                                    {(close) => (
                                        <div
                                            className="modal-form"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                height: '80vh',
                                            }}
                                        >
                                            <div
                                                className="modal-heading"
                                                style={{
                                                    fontSize: '25px',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                Give your review
                                            </div>
                                            <label
                                                htmlFor="Name"
                                                style={{
                                                    alignSelf: 'flex-start',
                                                    paddingLeft: '10%',
                                                    marginBottom: '-5vh',
                                                }}
                                            >
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                style={{ width: '40vw', padding: '1%' }}
                                                required
                                            />
                                            <label
                                                htmlFor="Review"
                                                style={{
                                                    alignSelf: 'flex-start',
                                                    paddingLeft: '10%',
                                                    marginBottom: '-5vh',
                                                }}
                                            >
                                                Review:
                                            </label>
                                            <textarea
                                                id="reviewText"
                                                style={{ width: '40vw', padding: '5%' }}
                                                required
                                            />
                                            <Fivestar rating={rating} setRating={setRating} />
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    const reviewText = document.getElementById('reviewText').value;
                                                    handleReviewSubmit(appointmentId, reviewText, appointment);
                                                    close(); // Close the popup after submission
                                                }}
                                                style={{ width: '10vw' }}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    )}
                                </Popup>
                            </p>
                            <p>{reviews[appointmentId] ? reviews[appointmentId] : ''}</p>
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Review;
