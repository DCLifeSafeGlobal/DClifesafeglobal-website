import React from 'react';
import { NavLink } from 'react-router-dom';

import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Footer() {

  const { language } = useLanguage();

  const t =
    translations[language]?.nav ||
    translations.en.nav;

  const links = [
    { to: '/', label: t.home },
    { to: '/wellness', label: t.wellness },
    { to: '/training', label: t.training },
    { to: '/outdoor', label: t.outdoor },
    { to: '/visuals', label: t.visuals },
    { to: '/about', label: t.about },
    { to: '/contact', label: t.contact },
  ];

  return (
    <footer className='footer'>

      <div className='container footer-inner'>

        <nav className='footer-nav'>

          {links.map((l) => (

            <NavLink
              key={l.to}
              to={l.to}
              className='footer-link'
            >
              {l.label}
            </NavLink>

          ))}

        </nav>

        <p className='footer-copy'>

          © 2026 DC LifeSafe Global |

          {language === 'es'
            ? ' Todos los derechos reservados.'
            : ' All rights reserved.'}

        </p>

      </div>

    </footer>
  );
}