import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, HeartPulse, Compass, ClipboardList } from 'lucide-react';
import NewsletterForm from '../components/NewsletterForm.jsx';
import NewsletterFormES from '../components/NewsletterFormES.jsx';
import { useLanguage } from '../components/LanguageContext.jsx';
import { translations } from '../translations/translations.js';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const buttonStyle = {
    marginTop: 'auto',
    alignSelf: 'center',
  };

  const genTitle =
    language === 'en'
      ? 'Global Expedition Network'
      : 'Red Global de Expediciones';

  const genText =
    language === 'en'
      ? 'International partnerships, expedition support, wilderness leadership, cultural exploration, and collaborative adventure initiatives across diverse environments.'
      : 'Alianzas internacionales, apoyo expedicionario, liderazgo outdoor, exploración cultural e iniciativas colaborativas de aventura en diversos entornos.';

  const genBtn = language === 'en' ? 'Explore GEN' : 'Explorar GEN';

  const pillars = [
    { icon: Shield, title: t.expertTraining },
    { icon: HeartPulse, title: t.emotionalResilience },
    { icon: Compass, title: t.outdoorLeadership },
    { icon: ClipboardList, title: t.realWorldPreparedness },
  ];

  return (
    <>
      <section className='section hero-home-simple'>
        <div className='container text-center'>
          <h1 className='hero-title'>{t.heroTitle}</h1>

          <p className='hero-subtitle'>{t.heroSubtitle}</p>

          <div className='hero-actions'>
            <Link to='/wellness' className='btn'>
              {t.exploreWellness}
            </Link>

            <Link to='/training' className='btn btn-outline'>
              {t.viewTraining}
            </Link>

            <Link to='/contact' className='btn btn-outline'>
              {t.contactUs}
            </Link>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='card-grid home-feature-grid'>
            <article className