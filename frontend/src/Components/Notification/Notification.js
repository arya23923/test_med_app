import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

import './Notification.css'

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const storedAppointmentData = Object.keys(localStorage)
      .filter((key) => key.startsWith('appointments_'))
      .map((key) => JSON.parse(localStorage.getItem(key)))
      .flat();
  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedAppointmentData = Object.keys(localStorage)
      .filter((key) => key.startsWith('appointments_'))
      .map((key) => JSON.parse(localStorage.getItem(key)))
      .flat();

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
    
    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {children}

      {isLoggedIn && appointmentData.length > 0 && (
        <div className='notification'>
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
