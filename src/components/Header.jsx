import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const navItems=[{to:'/',label:'Home',end:true},{to:'/wellness',label:'Wellness'},{to:'/training',label:'Training'},{to:'/outdoor',label:'Outdoor'},{to:'/about',label:'About'},{to:'/contact',label:'Contact'}];
export default function Header(){ const [open,setOpen]=React.useState(false); return <header className='header'><div className='container header-inner'><NavLink to='/' className='brand'><img src='/logo_principal.png' alt='DC LifeSafe Global' className='brand-logo'/></NavLink><button className='mobile-toggle' onClick={()=>setOpen(v=>!v)} aria-label='Toggle menu'>{open?<X size={24}/>:<Menu size={24}/>}</button><nav className={`nav ${open?'nav-open':''}`}>{navItems.map(item=><NavLink key={item.to} to={item.to} end={item.end} className={({isActive})=>`nav-link ${isActive?'active':''}`} onClick={()=>setOpen(false)}>{item.label}</NavLink>)}</nav></div></header>; }
