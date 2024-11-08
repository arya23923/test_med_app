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

function App() {
  return (
      <div className="App">
          {/* Set up BrowserRouter for routing */}
          <BrowserRouter>
            {/* Display the Navbar component */}
            <Navbar/>
            {/* Set up the Routes for different pages */}
            <Routes>
              {/* Define individual Route components for different pages */}
              <Route path="/" element={<Landing_page/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/instant-consultation" element={<InstantConsultation />} />
              <Route path='/service' element={<Service />} />
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
