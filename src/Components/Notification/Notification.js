import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

import './Notification.css'

const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState([]);

  const loadAppointmentsFromLocalStorage = () => {
    // Retrieve appointment data from localStorage
    const storedAppointmentData = Object.keys(localStorage)
      .filter((key) => key.startsWith('appointments_'))
      .map((key) => JSON.parse(localStorage.getItem(key)))
      .flat(); // Flatten to handle nested data

    setAppointmentData(storedAppointmentData);
  };

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username from sessionStorage
    const storedUsername = sessionStorage.getItem('email');
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Load initial appointments
    loadAppointmentsFromLocalStorage();

    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadAppointmentsFromLocalStorage();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Navbar />
      {children}

      {isLoggedIn && appointmentData.length > 0 && (
        <div>
          {appointmentData.map((appointment, index) => (
            <div className="appointment-card" key={index}>
              <div className="appointment-card__content">
                <h3 className="appointment-card__title">Appointment Details</h3>
                <p className="appointment-card__message">
                  <strong>Doctor:</strong> {appointment.doctorName}
                </p>
                <p className="appointment-card__message">
                  <strong>Speciality:</strong> {appointment.doctorSpeciality}
                </p>
                <p className="appointment-card__message">
                  <strong>Name:</strong> {appointment.name}
                </p>
                <p className="appointment-card__message">
                  <strong>Phone:</strong> {appointment.phoneNumber}
                </p>
                <p className="appointment-card__message">
                  <strong>Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}
                </p>
                <p className="appointment-card__message">
                  <strong>Time Slot:</strong> {appointment.selectedSlot}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
