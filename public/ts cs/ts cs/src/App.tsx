import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CyberSecurityPage from './pages/CyberSecurityPage';
import PenetrationTestPage from './pages/PenetrationTestPage';
import CloudSecurityPage from './pages/CloudSecurityPage';
import OffensiveSecurityPage from './pages/OffensiveSecurityPage';
import RedTeamingPage from './pages/RedTeamingPage';
import IOTSecurityPage from './pages/IOTSecurityPage';
import VCISOPage from './pages/VCISOPage';
import SecurityTrainingPage from './pages/SecurityTrainingPage';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<CyberSecurityPage />} />
          <Route path="/cyber-security" element={<CyberSecurityPage />} />
          <Route path="/penetration-testing" element={<PenetrationTestPage />} />
          <Route path="/cloud-security" element={<CloudSecurityPage />} />
          <Route path="/offensive-security" element={<OffensiveSecurityPage />} />
          <Route path="/red-teaming" element={<RedTeamingPage />} />
          <Route path="/iot-security" element={<IOTSecurityPage />} />
          <Route path="/vciso-services" element={<VCISOPage />} />
          <Route path="/security-training" element={<SecurityTrainingPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App; 