import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Wellness from './pages/Wellness.jsx';
import Training from './pages/Training.jsx';
import Outdoor from './pages/Outdoor.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resources from './pages/Resources';

export default function App(){return (<><ScrollToTop /><Routes><Route element={<Layout />}>
<Route path='/' element={<Home />} />
<Route path='/wellness' element={<Wellness />} />
<Route path='/training' element={<Training />} />
<Route path='/outdoor' element={<Outdoor />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
</Route></Routes></>);}
<Route path="/resources" element={<Resources />} />
