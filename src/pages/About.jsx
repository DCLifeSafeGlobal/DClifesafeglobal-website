import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext.jsx';

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1EBUVtp5ed/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/facebook.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dc_lifesafe_global/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/instagram.svg',
  },
  {
  name: "LinkedIn",
  url: "https://www.linkedin.com/company/dclifesafeglobal/",
  icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/linkedin.svg",
 },
];

const content = {
  en: {
    title: 'About DC LifeSafe Global',
    motto: 'Medicine Beyond the Trail.',

    introduction:
      'At DC LifeSafe Global, we believe that healthcare is about more than treating illness or responding to emergencies. It is also about prevention, education, preparation, and helping people live healthier, safer, and more meaningful lives.',

    founder:
      'Founded by Dr. Daniel Caceres Prieto, a medical doctor with international experience in healthcare, emergency response, medical education, and outdoor expeditions, DC LifeSafe Global brings together medicine, emotional wellness, practical training, and outdoor experiences.',

    introductionClosing:
      'Our approach is simple: knowledge can make a difference, preparation can reduce risks, and compassion can change the way we care for ourselves and others.',

    missionTitle: 'Our Mission',

    mission:
      'To promote healthier and safer lives through prevention, education, emergency preparedness, emotional wellness, and meaningful outdoor experiences. We believe that everyone can benefit from understanding their health, developing practical skills, and learning how to recognize and reduce risks before emergencies happen.',

    visionTitle: 'Our Vision',

    vision:
      'To build a world where prevention becomes part of everyday life, where education empowers people, and where individuals and communities have the knowledge and confidence to face challenges. We aspire to make healthcare education, emotional wellness, and outdoor preparedness more accessible while building meaningful connections across cultures and communities.',

    preventionLabel: 'Our Guiding Principle',

    preventionTitle: 'Prevention Begins at Home.',

    preventionText1:
      'We believe that prevention starts long before an emergency occurs.',

    preventionText2:
      'It begins with everyday decisions: taking care of our physical and emotional health, staying active, eating well, getting enough rest, and paying attention to our well-being.',

    preventionText3:
      'It continues when we prepare for a journey, check the weather before heading into the mountains, understand our surroundings, communicate with our team, and recognize when it is safer to change our plans.',

    preventionText4:
      'Prevention does not mean avoiding every risk. It means understanding risks, making informed decisions, and being better prepared for the unexpected.',

    preventionClosing:
      'Because prevention is not simply something we teach. It is something we believe in and practice.',

    valuesTitle: 'Our Core Values',

    valuesSubtitle:
      'The principles that guide how we learn, teach, prepare, and connect with others.',

    values: [
      {
        icon: '🛡️',
        title: 'Prevention',
        text:
          'We believe that education, awareness, healthy habits, and preparation can help prevent many health problems and emergencies or reduce their risks.',
      },
      {
        icon: '❤️',
        title: 'Compassion',
        text:
          'Behind every patient, student, or person we meet is a human being with unique experiences, challenges, and needs. Listening and treating others with kindness matters.',
      },
      {
        icon: '📚',
        title: 'Education',
        text:
          'Knowledge becomes valuable when we can apply it to real situations. We believe in making education practical, understandable, and accessible.',
      },
      {
        icon: '🧭',
        title: 'Preparedness',
        text:
          'Being prepared helps us make informed decisions and respond with greater confidence, whether at home, in our communities, or in the wilderness.',
      },
      {
        icon: '🤝',
        title: 'Integrity',
        text:
          'We value honesty, responsibility, professionalism, and doing what is right, even when no one is watching.',
      },
      {
        icon: '🌎',
        title: 'Connection',
        text:
          'We believe in connecting with ourselves, with others, and with nature. Teamwork, respect, and meaningful relationships help build healthier communities.',
      },
    ],

    servicesTitle: 'What We Do',

    servicesSubtitle:
      'Bringing together healthcare education, wellness, and outdoor experiences.',

    services: [
      {
        icon: '/icon_calm.png',
        title: 'Wellness',
        text:
          'Supporting emotional awareness, resilience, healthy habits, and personal well-being through practical education and initiatives such as SURFVIVING™.',
        button: 'Explore Wellness',
        link: '/wellness',
      },
      {
        icon: '/icon_wilderness.png',
        title: 'Training',
        text:
          'Providing practical education in lifesaving skills, emergency response, and medical preparedness, including BLS, ACLS, and wilderness medicine.',
        button: 'View Training',
        link: '/training',
      },
      {
        icon: '/icon_guided.png',
        title: 'Guided Experiences',
        text:
          'Encouraging outdoor learning, teamwork, risk awareness, and responsible exploration through meaningful experiences in nature.',
        button: 'Explore Outdoor',
        link: '/outdoor',
      },
      {
        icon: '/icon_nature.png',
        title: 'Nature-Based Wellness',
        text:
          'Promoting physical activity, reflection, emotional well-being, and a deeper connection with the natural environment.',
        button: 'Discover More',
        link: '/outdoor',
      },
    ],

    commitmentTitle: 'Our Commitment',

    commitment1:
      'We know that we cannot prevent every illness, accident, or unexpected situation. But we believe that through education, preparation, awareness, and compassion, we can make a meaningful difference.',

    commitment2:
      'Sometimes that difference is knowing how to recognize a medical emergency. Sometimes it is understanding our emotions. Sometimes it is making the decision to turn around before reaching a mountain summit. And sometimes it is simply taking better care of ourselves and the people around us.',

    philosophy:
      'Knowledge Empowers. Preparation Protects. Compassion Connects.',

    documentTitle: 'Learn More About Our Philosophy',

    documentText:
      'Explore our complete Institutional Statement to learn more about our mission, vision, guiding principles, and commitment to the communities we serve.',

    documentButton: 'Download Institutional Statement (PDF)',

    documentUrl:
      '/Documents/DC_LifeSafe_Global_Institutional_Statement_EN.pdf',

    connectTitle: "Let's Stay Connected",

    connectText:
      'Interested in our training programs, wellness initiatives, outdoor experiences, or collaboration opportunities? We would love to hear from you.',

    contactButton: 'Get in Touch',

    socialTitle: 'Follow Us on Social Media',

    socialText:
      'We invite you to join our community, where we share educational resources, prevention tips, wellness initiatives, outdoor experiences, and updates about our projects.',

    socialClosing:
      "Stay connected. Keep learning. Let's grow together.",
  },

  es: {
    title: 'Acerca de DC LifeSafe Global',
    motto: 'Medicina más allá del sendero.',

    introduction:
      'En DC LifeSafe Global creemos que la medicina va más allá de tratar enfermedades o responder ante emergencias. También se trata de prevenir, educar, prepararnos y ayudar a las personas a vivir de manera más saludable, segura y plena.',

    founder:
      'Fundada por el Dr. Daniel Cáceres Prieto, médico con experiencia internacional en atención médica, respuesta ante emergencias, educación médica y expediciones al aire libre, DC LifeSafe Global integra medicina, bienestar emocional, capacitación práctica y experiencias en la naturaleza.',

    introductionClosing:
      'Nuestro enfoque es sencillo: el conocimiento puede marcar la diferencia, la preparación puede reducir riesgos y la compasión puede transformar la manera en que cuidamos de nosotros mismos y de los demás.',

    missionTitle: 'Nuestra misión',

    mission:
      'Promover una vida más saludable y segura mediante la prevención, la educación, la preparación ante emergencias, el bienestar emocional y las experiencias significativas en la naturaleza. Creemos que todos podemos beneficiarnos de comprender mejor nuestra salud, desarrollar habilidades prácticas y aprender a reconocer y reducir riesgos antes de que ocurran emergencias.',

    visionTitle: 'Nuestra visión',

    vision:
      'Construir un mundo donde la prevención forme parte de la vida cotidiana, donde la educación empodere a las personas y donde los individuos y las comunidades cuenten con los conocimientos y la confianza necesarios para enfrentar desafíos. Aspiramos a hacer más accesibles la educación en salud, el bienestar emocional y la preparación para actividades al aire libre, creando conexiones significativas entre culturas y comunidades.',

    preventionLabel: 'Nuestro principio fundamental',

    preventionTitle: 'La prevención comienza en casa.',

    preventionText1:
      'Creemos que la prevención comienza mucho antes de que ocurra una emergencia.',

    preventionText2:
      'Empieza con nuestras decisiones diarias: cuidar nuestra salud física y emocional, mantenernos activos, alimentarnos adecuadamente, descansar lo suficiente y prestar atención a nuestro bienestar.',

    preventionText3:
      'Continúa cuando nos preparamos para un viaje, revisamos el clima antes de salir a la montaña, conocemos nuestro entorno, mantenemos comunicación con nuestro equipo y reconocemos cuándo es más seguro cambiar nuestros planes.',

    preventionText4:
      'Prevenir no significa evitar todos los riesgos. Significa comprenderlos, tomar decisiones informadas y estar mejor preparados para enfrentar situaciones inesperadas.',

    preventionClosing:
      'Porque la prevención no es simplemente algo que enseñamos. Es algo en lo que creemos y que ponemos en práctica.',

    valuesTitle: 'Nuestros valores',

    valuesSubtitle:
      'Los principios que orientan nuestra manera de aprender, enseñar, prepararnos y relacionarnos con los demás.',

    values: [
      {
        icon: '🛡️',
        title: 'Prevención',
        text:
          'Creemos que la educación, la conciencia, los hábitos saludables y la preparación pueden ayudar a prevenir muchos problemas de salud y emergencias, o reducir sus riesgos.',
      },
      {
        icon: '❤️',
        title: 'Compasión',
        text:
          'Detrás de cada paciente, estudiante o persona que conocemos hay un ser humano con experiencias, desafíos y necesidades propias. Escuchar, comprender y tratar a los demás con amabilidad es fundamental.',
      },
      {
        icon: '📚',
        title: 'Educación',
        text:
          'El conocimiento adquiere valor cuando podemos aplicarlo a situaciones reales. Creemos en una educación práctica, comprensible y accesible.',
      },
      {
        icon: '🧭',
        title: 'Preparación',
        text:
          'Estar preparados nos ayuda a tomar decisiones informadas y responder con mayor confianza, ya sea en casa, en nuestras comunidades o en entornos naturales.',
      },
      {
        icon: '🤝',
        title: 'Integridad',
        text:
          'Valoramos la honestidad, la responsabilidad, el profesionalismo y hacer lo correcto, incluso cuando nadie nos observa.',
      },
      {
        icon: '🌎',
        title: 'Conexión',
        text:
          'Creemos en la importancia de conectar con nosotros mismos, con los demás y con la naturaleza. El trabajo en equipo, el respeto y las relaciones humanas contribuyen a construir comunidades más saludables.',
      },
    ],

    servicesTitle: 'Qué hacemos',

    servicesSubtitle:
      'Integramos educación en salud, bienestar y experiencias en la naturaleza.',

    services: [
      {
        icon: '/icon_calm.png',
        title: 'Bienestar',
        text:
          'Promovemos la conciencia emocional, la resiliencia, los hábitos saludables y el bienestar personal mediante educación práctica e iniciativas como SURFVIVING™.',
        button: 'Explorar bienestar',
        link: '/wellness',
      },
      {
        icon: '/icon_wilderness.png',
        title: 'Capacitación',
        text:
          'Ofrecemos educación práctica en habilidades para salvar vidas, respuesta ante emergencias y preparación médica, incluyendo BLS, ACLS y medicina en zonas agrestes.',
        button: 'Ver entrenamientos',
        link: '/training',
      },
      {
        icon: '/icon_guided.png',
        title: 'Experiencias guiadas',
        text:
          'Promovemos el aprendizaje al aire libre, el trabajo en equipo, la identificación de riesgos y la exploración responsable mediante experiencias significativas en la naturaleza.',
        button: 'Explorar Outdoor',
        link: '/outdoor',
      },
      {
        icon: '/icon_nature.png',
        title: 'Bienestar en la naturaleza',
        text:
          'Fomentamos la actividad física, la reflexión, el bienestar emocional y una conexión más profunda con nuestro entorno natural.',
        button: 'Descubrir más',
        link: '/outdoor',
      },
    ],

    commitmentTitle: 'Nuestro compromiso',

    commitment1:
      'Sabemos que no podemos prevenir todas las enfermedades, accidentes o situaciones inesperadas. Sin embargo, creemos que mediante la educación, la preparación, la conciencia y la compasión podemos marcar una diferencia significativa.',

    commitment2:
      'A veces, esa diferencia consiste en saber reconocer una emergencia médica. Otras veces, en comprender nuestras emociones. En ocasiones, significa tomar la decisión de regresar antes de alcanzar la cima de una montaña. Y, muchas veces, simplemente significa cuidar mejor de nosotros mismos y de quienes nos rodean.',

    philosophy:
      'El conocimiento empodera. La preparación protege. La compasión conecta.',

    documentTitle: 'Conoce más sobre nuestra filosofía',

    documentText:
      'Te invitamos a conocer nuestra Declaración Institucional completa, donde compartimos nuestra misión, visión, principios fundamentales y compromiso con las comunidades a las que servimos.',

    documentButton: 'Descargar Declaración Institucional (PDF)',

    documentUrl:
      '/Documents/DC_LifeSafe_Global_Declaracion_Institucional_ES.pdf',

    connectTitle: 'Sigamos conectados',

    connectText:
      '¿Te interesan nuestros programas de capacitación, iniciativas de bienestar, experiencias al aire libre o posibilidades de colaboración? Nos encantará saber de ti.',

    contactButton: 'Contáctanos',

    socialTitle: 'Síguenos en nuestras redes sociales',

    socialText:
      'Te invitamos a formar parte de nuestra comunidad, donde compartimos recursos educativos, consejos de prevención, iniciativas de bienestar, experiencias al aire libre y novedades sobre nuestros proyectos.',

    socialClosing:
      'Sigamos conectados. Sigamos aprendiendo. Crezcamos juntos.',
  },
};

export default function About() {
  const { language } = useLanguage();

  const lang = language === 'es' ? 'es' : 'en';
  const t = content[lang];

  const prefix = lang === 'es' ? '/es' : '';

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e3eaf0',
    borderRadius: '16px',
    padding: 'clamp(20px, 3vw, 30px)',
    boxShadow: '0 5px 22px rgba(12, 37, 68, 0.05)',
    height: '100%',
    boxSizing: 'border-box',
  };

  const paragraphStyle = {
    lineHeight: 1.85,
    color: '#43546a',
    fontSize: '16px',
  };

  const sectionSpacing = {
    marginTop: '65px',
  };

  return (
    <>
      {/* ORIGINAL HERO IMAGE */}

      <section className="hero-banner-page">
        <div className="container">
          <div className="page-hero-card">
            <img
              src="/hero_about.png"
              alt={
                lang === 'es'
                  ? 'DC LifeSafe Global - Acerca de nosotros'
                  : 'DC LifeSafe Global - About Us'
              }
              className="page-hero-image"
            />
          </div>
        </div>
      </section>

      <main className="section">
        <div className="container">

          {/* ABOUT INTRODUCTION */}

          <section className="text-center">
            <h1 className="section-title">
              {t.title}
            </h1>

            <p
              style={{
                color: '#24748d',
                fontWeight: 700,
                fontSize: '20px',
                marginBottom: '30px',
              }}
            >
              {t.motto}
            </p>

            <div
              style={{
                maxWidth: '850px',
                margin: '0 auto',
              }}
            >
              <p style={paragraphStyle}>
                {t.introduction}
              </p>

              <p style={paragraphStyle}>
                {t.founder}
              </p>

              <p style={paragraphStyle}>
                {t.introductionClosing}
              </p>
            </div>
          </section>

          {/* MISSION & VISION */}

          <section style={sectionSpacing}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '24px',
              }}
            >
              <article style={cardStyle}>
                <h2
                  className="section-title"
                  style={{ fontSize: '28px' }}
                >
                  {t.missionTitle}
                </h2>

                <p style={paragraphStyle}>
                  {t.mission}
                </p>
              </article>

              <article style={cardStyle}>
                <h2
                  className="section-title"
                  style={{ fontSize: '28px' }}
                >
                  {t.visionTitle}
                </h2>

                <p style={paragraphStyle}>
                  {t.vision}
                </p>
              </article>
            </div>
          </section>

          {/* GUIDING PRINCIPLE */}

          <section
            style={{
              ...sectionSpacing,
              padding: 'clamp(25px, 5vw, 55px)',
              background: '#eef5f8',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                color: '#24748d',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}
            >
              {t.preventionLabel}
            </p>

            <h2
              className="section-title"
              style={{ marginBottom: '25px' }}
            >
              {t.preventionTitle}
            </h2>

            <div
              style={{
                maxWidth: '850px',
                margin: '0 auto',
              }}
            >
              <p style={paragraphStyle}>
                {t.preventionText1}
              </p>

              <p style={paragraphStyle}>
                {t.preventionText2}
              </p>

              <p style={paragraphStyle}>
                {t.preventionText3}
              </p>

              <p style={paragraphStyle}>
                {t.preventionText4}
              </p>

              <p
                style={{
                  ...paragraphStyle,
                  fontWeight: 700,
                  color: '#10294a',
                  marginTop: '25px',
                }}
              >
                {t.preventionClosing}
              </p>
            </div>
          </section>

          {/* CORE VALUES */}

          <section
            className="text-center"
            style={sectionSpacing}
          >
            <h2 className="section-title">
              {t.valuesTitle}
            </h2>

            <p className="section-subtitle">
              {t.valuesSubtitle}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: '22px',
                marginTop: '32px',
              }}
            >
              {t.values.map((value) => (
                <article
                  key={value.title}
                  style={cardStyle}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      fontSize: '35px',
                      marginBottom: '15px',
                    }}
                  >
                    {value.icon}
                  </div>

                  <h3
                    style={{
                      color: '#10294a',
                      fontSize: '21px',
                      marginBottom: '12px',
                    }}
                  >
                    {value.title}
                  </h3>

                  <p style={paragraphStyle}>
                    {value.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* WHAT WE DO */}

          <section
            className="text-center"
            style={sectionSpacing}
          >
            <h2 className="section-title">
              {t.servicesTitle}
            </h2>

            <p className="section-subtitle">
              {t.servicesSubtitle}
            </p>

            <div className="card-grid columns-4 mt-medium">
              {t.services.map((card) => (
                <article
                  className="program-card"
                  key={card.title}
                >
                  <img
                    src={card.icon}
                    alt=""
                    className="program-icon"
                  />

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.text}
                  </p>

                  <Link
                    to={`${prefix}${card.link}`}
                    className="btn small"
                  >
                    {card.button}
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* OUR COMMITMENT */}

          <section
            className="text-center"
            style={{
              ...sectionSpacing,
              maxWidth: '850px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <h2 className="section-title">
              {t.commitmentTitle}
            </h2>

            <p style={paragraphStyle}>
              {t.commitment1}
            </p>

            <p style={paragraphStyle}>
              {t.commitment2}
            </p>

            <p
              style={{
                color: '#10294a',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: 1.7,
                marginTop: '30px',
              }}
            >
              {t.philosophy}
            </p>
          </section>

          {/* INSTITUTIONAL DOCUMENT */}

          <section
            className="text-center"
            style={{
              ...sectionSpacing,
              background: '#f4f7fa',
              borderRadius: '18px',
              padding: '40px 25px',
            }}
          >
            <h2 className="section-title">
              {t.documentTitle}
            </h2>

            <p
              style={{
                ...paragraphStyle,
                maxWidth: '750px',
                margin: '0 auto 25px',
              }}
            >
              {t.documentText}
            </p>

            <a
              href={t.documentUrl}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.documentButton}
            </a>
          </section>

          {/* CONTACT AND SOCIAL MEDIA */}

          <section
            className="center-cta text-center"
            style={sectionSpacing}
          >
            <h2 className="section-title small-gap">
              {t.connectTitle}
            </h2>

            <p
              style={{
                ...paragraphStyle,
                maxWidth: '750px',
                margin: '0 auto 25px',
              }}
            >
              {t.connectText}
            </p>

            <Link
              to={`${prefix}/contact`}
              className="btn"
            >
              {t.contactButton}
            </Link>

            <div
              style={{
                marginTop: '45px',
              }}
            >
              <h3
                style={{
                  color: '#10294a',
                  fontSize: '24px',
                  marginBottom: '15px',
                }}
              >
                {t.socialTitle}
              </h3>

              <p
                style={{
                  ...paragraphStyle,
                  maxWidth: '750px',
                  margin: '0 auto 25px',
                }}
              >
                {t.socialText}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '25px',
                  marginBottom: '20px',
                }}
              >
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '55px',
                      height: '55px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: '1px solid #dce5ed',
                      boxShadow:
                        '0 4px 12px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width="27"
                      height="27"
                      style={{
                        display: 'block',
                        objectFit: 'contain',
                      }}
                    />
                  </a>
                ))}
              </div>

              <p
                style={{
                  color: '#24748d',
                  fontWeight: 600,
                  fontSize: '16px',
                }}
              >
                {t.socialClosing}
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
