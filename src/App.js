import logo from './logo.svg';
import './App.css';
// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/sign_up/sign_up'; 
import Login from './Components/login/login'; 
import Landing_page from './Components/Landing_Page/Landing_page';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Service from './Components/services/services';
import Notification from './Components/Notification/Notification';
import Review from './Components/ReviewForm/ReviewForm'
import AppointmentConsultation from './Components/AppointmentBooking/AppointmentBooking';

function App() {
  return (
      <div className="App">
          {/* Set up BrowserRouter for routing */}
          <BrowserRouter>
            <Notification>
              {/* Set up the Routes for different pages */}
              <Routes>
                {/* Define individual Route components for different pages */}
                <Route path="/" element={<Landing_page/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path='/service' element={<Service />} />
                <Route path='/review' element={<Review />} />
                <Route path='/appointment-consultation' element={<AppointmentConsultation />} />
              </Routes>
            </Notification>
          </BrowserRouter>
      </div>
  );
}

export default App;
