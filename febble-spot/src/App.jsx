import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from './Pages/LandingPage';
import  Topupbutton from './Components/Topupbutton/Topupbutton'

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
        <Topupbutton />
      </div>
    </Router>
  );
};

export default App;
