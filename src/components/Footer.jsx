
import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLanguage } from './LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Footer() {
  const { language } = useLanguage();

  const t =
    translations[language]?.nav ||
    translations.en.nav;

  const isSpanish = language === 'es';

  const links = [
    { to: '/', label: t.home, end: true },
    { to: '/wellness', label: t.wellness },
    { to: '/surfviving', label: 'SURFVIVING™' },
    { to: '/training', label: t.training },
    { to: '/outdoor', label: t.outdoor },
    { to: '/visuals', label: t.visuals },
    { to: '/learning-center', label: t.learningCenter },
    { to: '/books', label: isSpanish ? 'Libros' : 'Books' },
    {
      to: '/network',
      label: isSpanish
        ? 'Red Global de Expediciones'
        : 'Global Expedition Network'
    },
    { to: '/about', label: t.about },
    { to: '/contact', label: t.contact },
  ];

  return (
    <footer className='footer'>
      <div className='container footer-inner'>

        <nav
          className='footer-nav'
          aria-label={
            isSpanish
              ? 'Navegación del pie de página'
              : 'Footer navigation'
          }
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className='footer-link'
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <p className='footer-copy'>
          © {new Date().getFullYear()} DC LifeSafe Global |
          {isSpanish
            ? ' Todos los derechos reservados.'
            : ' All rights reserved.'}
        </p>

      </div>
    </footer>
  );
}
