import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop.jsx';
import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import Wellness from './pages/Wellness.jsx';
import Training from './pages/Training.jsx';
import Outdoor from './pages/Outdoor.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resources from './pages/Resources.jsx';
import Workshops from './pages/Workshops.jsx';

import Surfviving from './pages/learning-center/Surfviving.jsx';
import BLS from './pages/learning-center/BLS.jsx';
import ACLS from './pages/learning-center/ACLS.jsx';
import Wilderness from './pages/learning-center/Wilderness.jsx';

import ExpeditionVisuals from './pages/ExpeditionVisuals.jsx';
import AmsterdamVisual from './pages/AmsterdamVisual.jsx';
import WildlifeVisuals from './pages/WildlifeVisuals.jsx';
import BarcelonaVisual from './pages/BarcelonaVisual.jsx';
import WashingtonStateVisual from './pages/WashingtonStateVisual.jsx';
import RedRocksVisual from './pages/RedRocksVisual.jsx';
import BaselVisual from './pages/BaselVisual.jsx';

import Network from './pages/Network.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/es' element={<Home />} />

          <Route path='/wellness' element={<Wellness />} />
          <Route path='/training' element={<Training />} />
          <Route path='/outdoor' element={<Outdoor />} />

          <Route path='/learning-center' element={<Resources />} />

          <Route
            path='/learning-center/surfviving'
            element={<Surfviving />}
          />

          <Route
            path='/learning-center/bls'
            element={<BLS />}
          />

          <Route
            path='/learning-center/acls'
            element={<ACLS />}
          />

          <Route
  path='/learning-center/wilderness'
  element={<Wilderness />}
/>

          
          <Route
            path='/resources'
            element={<Navigate to='/learning-center' replace />}
          />

          <Route path='/workshops' element={<Workshops />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/visuals' element={<ExpeditionVisuals />} />
          <Route path='/expeditions' element={<ExpeditionVisuals />} />
          <Route path='/visuals/amsterdam' element={<AmsterdamVisual />} />
          <Route path='/visuals/barcelona' element={<BarcelonaVisual />} />
          <Route path='/visuals/wildlife' element={<WildlifeVisuals />} />

          <Route
            path='/visuals/washington-state'
            element={<WashingtonStateVisual />}
          />

          <Route
            path='/visuals/red-rocks-colorado'
            element={<RedRocksVisual />}
          />

          <Route path='/visuals/basel' element={<BaselVisual />} />

          <Route path='/network' element={<Network />} />
        </Route>
      </Routes>
    </>
  );
}
