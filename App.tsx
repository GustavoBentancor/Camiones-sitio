
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SmsPage from './pages/SmsPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DriverApplication from './pages/DriverApplication';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sms" element={<SmsPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/apply" element={<DriverApplication />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
