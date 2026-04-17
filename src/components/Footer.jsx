import React from 'react';
import { NavLink } from 'react-router-dom';
const links=[{to:'/',label:'Home'},{to:'/wellness',label:'Wellness'},{to:'/training',label:'Training'},{to:'/outdoor',label:'Outdoor'},{to:'/about',label:'About'},{to:'/contact',label:'Contact'}];
export default function Footer(){ return <footer className='footer'><div className='container footer-inner'><nav className='footer-nav'>{links.map(l=><NavLink key={l.to} to={l.to} className='footer-link'>{l.label}</NavLink>)}</nav><p className='footer-copy'>© 2026 DC LifeSafe Global | All rights reserved.</p></div></footer>; }
