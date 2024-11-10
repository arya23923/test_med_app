import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// import './AppointmentFormIC.css'

const AppointmentFormAB = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };

    const handleDateChange = (date) => {
      setAppointmentDate(date); // Update the date in state
    };

    const timeSlots = [
      '09:00 AM - 09:30 AM',
      '10:00 AM - 10:30 AM',
      '11:00 AM - 11:30 AM',
      '01:00 PM - 01:30 PM',
      '02:00 PM - 02:30 PM',
      '03:00 PM - 03:30 PM',
    ];
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (!selectedSlot) {
        alert('Please select a time slot');
        return;
      }
      onSubmit({ doctorName, doctorSpeciality, name, phoneNumber, appointmentDate, selectedSlot });
      setName('');
      setPhoneNumber('');
      setAppointmentDate(null);
      setSelectedSlot(null);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <DatePicker
            selected={appointmentDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()} // Ensure only future dates can be selected
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="timeSlot">Select Time Slot:</label>
          <select
            id="timeSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          >
            <option value="" disabled>Select a time slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormAB