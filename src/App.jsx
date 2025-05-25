import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InformationMain from './components/InformationSection/InformationMain';
import AboutMe from './components/AboutMe';
import InfoAboutMe from './components/InfoAboutMe';
import EHSMain from './components/EHS/EHSMain';
import Feedback from './components/Feedback';
import Mailbox from './components/Mailbox';
import Contacts from './components/Contacts';

import AssemblyPointPage from './pages/AssemblyPointPage'; // หน้าลิงก์ใหม่
import FireExitPage from './pages/FireExitPage';
import ExtinguisherPage from './pages/ExtinguisherPage';
import EmergencyContactPage from './pages/EmergencyContactPage';
import ResponsePlansMain from './pages/ResponsePlanPage/ResponsePlansMain';
import ECMain from './pages/EqiupmentCheckPage/ECMain';
import FirePage from './pages/ResponsePlanPage/FirePage';
import CPRPage from './pages/ResponsePlanPage/CPRPage';
import ChemleakPage from './pages/ResponsePlanPage/ChemleakPage';
import EarthquakePage from './pages/ResponsePlanPage/EarthquakePage';
import FloodPage from './pages/ResponsePlanPage/FloodPage';
import AEDPage from './pages/ResponsePlanPage/AEDPage';
import footerImage from './assets/img/app.png';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto pt-20 px-6">
              <HeroSection />
              <section id="about">
                <AboutMe />
              </section>
              
              <section id="ehs">
                <EHSMain />
              </section>
              <section id="information">
                <InformationMain />
              </section>
              <div className="justify-center mt-10">
                <img
                  src={footerImage}
                  alt="ภาพด้านล่างสุด"
                  className="max-w-full md:w-[1000px] h-auto mx-auto"
                  />
            </div>
            </div>
          }
        />
        <Route path="/info-about-me" element={<InfoAboutMe />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/mailbox" element={<Mailbox />} />
        <Route path="/assembly-point" element={<AssemblyPointPage />} />
        <Route path="/layout-fire-exit" element={<FireExitPage />} />
        <Route path="/extinguisher" element={<ExtinguisherPage />} />
        <Route path="/emergency-contacts" element={<EmergencyContactPage />} />
        <Route path="/emergency-response-plans" element={<ResponsePlansMain />} />
        <Route path="/ec" element={<ECMain />} />
        <Route path="/FireRes" element={<FirePage />} />
        <Route path="/LeakRes" element={<ChemleakPage />} />
        <Route path="/EarthquakeRes" element={<EarthquakePage />} />
        <Route path="/FloodRes" element={<FloodPage />} />
        <Route path="/AED" element={<AEDPage />} />
        <Route path="/CPR" element={<CPRPage />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
