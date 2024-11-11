import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import './ReviewForm.css'

const Review = () => {
    const storedData = Object.keys(localStorage)
        .filter((key) => key.startsWith('appointments_'))
        .map((key) => JSON.parse(localStorage.getItem(key)))
        .flat();

    // State to store reviews for each appointment
    const [reviews, setReviews] = useState({});
    // State to track if the user has given a review for each appointment
    const [submittedReviews, setSubmittedReviews] = useState({});

    // Function to handle review submission
    const handleReviewSubmit = (appointmentId, review) => {
        // Update the reviews state with the new review
        setReviews((prevReviews) => ({
            ...prevReviews,
            [appointmentId]: review,
        }));

        // Mark the appointment as reviewed
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
                    const appointmentId = appointment.id; // Assuming each appointment has a unique `id`

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
                                    disabled={submittedReviews[appointmentId]} // Disable popup trigger if review is given
                                >
                                    {(close) => (
                                        <div
                                            className="modal-form"
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-evenly',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                                height: '90vh',
                                                width: '50vw',
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
                                            <button
                                                type="submit"
                                                onClick={() => {
                                                    const reviewText = document.getElementById('reviewText').value;
                                                    handleReviewSubmit(appointmentId, reviewText);
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
