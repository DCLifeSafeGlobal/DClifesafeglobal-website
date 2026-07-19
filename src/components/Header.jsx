import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle.jsx';
import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { language } = useLanguage();

  const t =
    translations[language]?.nav ||
    translations.en.nav;

  const navItems = [
    { to: '/', label: t.home, end: true },
    { to: '/wellness', label: t.wellness },
    { to: '/training', label: t.training },
    { to: '/outdoor', label: t.outdoor },
    { to: '/visuals', label: t.visuals },
    { to: '/learning-center', label: t.learningCenter },
    { to: '/network', label: t.network },
    { to: '/about', label: t.about },
    { to: '/contact', label: t.contact },
  ];

  return (
    <header className='header'>
      <div className='container header-inner'>
        <NavLink
          to='/'
          className='brand'
          onClick={() => setOpen(false)}
        >
          <img
            src='/logo_principal.png'
            alt='DC LifeSafe Global'
            className='brand-logo'
          />
        </NavLink>

        <button
          type='button'
          className='mobile-toggle'
          onClick={() => setOpen((currentValue) => !currentValue)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='primary-navigation'
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id='primary-navigation'
          className={`nav ${open ? 'nav-open' : ''}`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
