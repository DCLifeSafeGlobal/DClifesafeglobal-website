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

const genBtn =
  language === 'en'
    ? 'Explore GEN'
    : 'Explorar GEN';


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

            <article className='feature-card home-feature-card' style={cardStyle}>
              <h2>{t.wellness}</h2>
              <img src='/card_home_wellness.png' alt={t.wellness} className='feature-thumb' loading='lazy' />
              <p>{t.wellnessText}</p>
              <Link to='/wellness' className='btn' style={buttonStyle}>
                {t.wellnessBtn}
              </Link>
            </article>

            <article className='feature-card home-feature-card' style={cardStyle}>
              <h2>{t.training}</h2>
              <img src='/card_home_training.png' alt={t.training} className='feature-thumb' loading='lazy' />
              <p>{t.trainingText}</p>
              <Link to='/training' className='btn' style={buttonStyle}>
                {t.trainingBtn}
              </Link>
            </article>

            <article className='feature-card home-feature-card' style={cardStyle}>
              <h2>{t.outdoor}</h2>
              <img src='/card_home_outdoor.png' alt={t.outdoor} className='feature-thumb' loading='lazy' />
              <p>{t.outdoorText}</p>
              <Link to='/outdoor' className='btn' style={buttonStyle}>
                {t.outdoorBtn}
              </Link>
            </article>

            <article className='feature-card home-feature-card' style={cardStyle}>
              <h2>{t.visuals}</h2>
              <img
                src='/dcp_visuals/netherlands/amsterdam/dcp_amsterdam_canal_panorama.jpg'
                alt={t.visuals}
                className='feature-thumb'
                loading='lazy'
              />
              <p>{t.visualsText}</p>
              <Link to='/visuals' className='btn' style={buttonStyle}>
                {t.visualsBtn}
              </Link>
            </article>

            <article className='feature-card home-feature-card gen-card' style={cardStyle}>
              <h2>{genTitle}</h2>
              <img
                src='/hero_global_expedition_network.png'
                alt={genTitle}
                className='feature-thumb'
                loading='lazy'
              />
              <p>{genText}</p>
              <Link to='/network' className='btn' style={buttonStyle}>
                {genBtn}
              </Link>
            </article>

          </div>
        </div>
      </section>

      <section className='section soft-section'>
        <div className='container text-center'>
          <h2 className='section-title'>{t.why}</h2>
          <p className='section-subtitle'>{t.whySub}</p>

          <div className='icon-row'>
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className='icon-item'>
                  <div className='icon-circle'>
                    <Icon size={38} />
                  </div>
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id='newsletter' className='section'>
        <div className='container'>
          {language === 'en' ? <NewsletterForm /> : <NewsletterFormES />}
        </div>
      </section>
    </>
  );
}