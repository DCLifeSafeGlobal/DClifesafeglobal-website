
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
import SurfvivingPage from './pages/SurfvivingPage.jsx';

// Books & Publications
import Books from './pages/Books.jsx';

// Learning Center
import Surfviving from './pages/learning-center/Surfviving.jsx';
import BLS from './pages/learning-center/BLS.jsx';
import ACLS from './pages/learning-center/ACLS.jsx';
import Wilderness from './pages/learning-center/wilderness.jsx';

// Expedition Visuals
import ExpeditionVisuals from './pages/ExpeditionVisuals.jsx';
import AmsterdamVisual from './pages/AmsterdamVisual.jsx';
import WildlifeVisuals from './pages/WildlifeVisuals.jsx';
import BarcelonaVisual from './pages/BarcelonaVisual.jsx';
import WashingtonStateVisual from './pages/WashingtonStateVisual.jsx';
import RedRocksVisual from './pages/RedRocksVisual.jsx';
import BaselVisual from './pages/BaselVisual.jsx';

// Global Expedition Network
import Network from './pages/Network.jsx';

const pageRoutes = [
  { path: '/', element: <Home /> },
  { path: '/wellness', element: <Wellness /> },
  { path: '/surfviving', element: <SurfvivingPage /> },
  { path: '/training', element: <Training /> },
  { path: '/outdoor', element: <Outdoor /> },
  { path: '/books', element: <Books /> },

  { path: '/learning-center', element: <Resources /> },
  {
    path: '/learning-center/surfviving',
    element: <Surfviving />
  },
  { path: '/learning-center/bls', element: <BLS /> },
  { path: '/learning-center/acls', element: <ACLS /> },
  {
    path: '/learning-center/wilderness',
    element: <Wilderness />
  },

  { path: '/workshops', element: <Workshops /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },

  { path: '/visuals', element: <ExpeditionVisuals /> },
  {
    path: '/visuals/amsterdam',
    element: <AmsterdamVisual />
  },
  {
    path: '/visuals/barcelona',
    element: <BarcelonaVisual />
  },
  {
    path: '/visuals/wildlife',
    element: <WildlifeVisuals />
  },
  {
    path: '/visuals/washington-state',
    element: <WashingtonStateVisual />
  },
  {
    path: '/visuals/red-rocks-colorado',
    element: <RedRocksVisual />
  },
  {
    path: '/visuals/basel',
    element: <BaselVisual />
  },

  { path: '/network', element: <Network /> }
];

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          {pageRoutes.map(({ path, element }) => (
            <React.Fragment key={path}>
              <Route path={path} element={element} />
              <Route
                path={path === '/' ? '/es' : `/es${path}`}
                element={element}
              />
            </React.Fragment>
          ))}

          <Route
            path='/resources'
            element={<Navigate to='/learning-center' replace />}
          />

          <Route
            path='/es/resources'
            element={<Navigate to='/es/learning-center' replace />}
          />

          <Route
            path='/expeditions'
            element={<Navigate to='/visuals' replace />}
          />

          <Route
            path='/es/expeditions'
            element={<Navigate to='/es/visuals' replace />}
          />
        </Route>
      </Routes>
    </>
  );
}
