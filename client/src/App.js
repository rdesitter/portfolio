import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeContext from './utils/ThemeContext';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import PampaHardSeltzer from './pages/project/PampaHardSeltzer';
import NotFound from './pages/NotFound';
import './sass/style.scss';
import Bravogames from './pages/project/Bravogames';
import MHSC from './pages/project/MHSC';
import Ballman from './pages/project/Ballman';
import LOM from './pages/project/LOM';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const contextValue = {
      theme,
      updateTheme: setTheme
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/pampa-hard-seltzer" element={<PampaHardSeltzer />} />
          <Route path="/project/bravogames" element={<Bravogames />} />
          <Route path="/project/ballman" element={<Ballman />} />
          <Route path="/project/MHSC" element={<MHSC />} />
          <Route path="/project/LOM" element={<LOM />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
};

export default App