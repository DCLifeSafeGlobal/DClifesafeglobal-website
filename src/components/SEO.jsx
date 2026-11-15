
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE = 'https://www.dclifesafeglobal.com';
const SITE_NAME = 'DC LifeSafe Global';

const seoPages = {
  '/': {
    en: {
      title: 'DC LifeSafe Global | Medicine Beyond the Trail',
      description:
        'Explore medical training, BLS, ACLS, wilderness medicine, SURFVIVING™ emotional wellness, books, outdoor adventures, and expedition resources.'
    },
    es: {
      title: 'DC LifeSafe Global | Medicina más allá del sendero',
      description:
        'Explora capacitación médica, BLS, ACLS, medicina en entornos naturales, bienestar emocional SURFVIVING™, libros, aventuras y recursos de expedición.'
    }
  },

  '/surfviving': {
    en: {
      title: 'SURFVIVING™ | Ride the Emotional Wave',
      description:
        'Discover SURFVIVING™, an emotional wellness philosophy and educational program, along with books, practical resources, and workshops.'
    },
    es: {
      title: 'SURFVIVING™ | Surfeando la ola emocional',
      description:
        'Descubre SURFVIVING™, una filosofía y programa educativo de bienestar emocional, junto con libros, recursos prácticos y talleres.'
    }
  },

  '/wellness': {
    en: {
      title: 'Emotional Wellness & SURFVIVING™ | DC LifeSafe Global',
      description:
        'Explore emotional wellness education, coping strategies, self-awareness, and the SURFVIVING™ approach to navigating emotional challenges.'
    },
    es: {
      title: 'Bienestar emocional y SURFVIVING™ | DC LifeSafe Global',
      description:
        'Explora educación sobre bienestar emocional, estrategias de afrontamiento, autoconocimiento y el enfoque SURFVIVING™.'
    }
  },

  '/training': {
    en: {
      title: 'BLS, ACLS & Wilderness Medicine Training | DC LifeSafe Global',
      description:
        'Explore BLS, ACLS, first aid, emergency preparedness, and wilderness medicine education through DC LifeSafe Global.'
    },
    es: {
      title: 'Cursos BLS, ACLS y Medicina Wilderness | DC LifeSafe Global',
      description:
        'Conoce la capacitación en BLS, ACLS, primeros auxilios, preparación para emergencias y medicina en entornos naturales.'
    }
  },

  '/outdoor': {
    en: {
      title: 'Outdoor Adventures & Expedition Safety | DC LifeSafe Global',
      description:
        'Explore outdoor adventures, expedition preparation, wilderness safety, and medical awareness beyond the trail.'
    },
    es: {
      title: 'Aventuras y Seguridad en Expediciones | DC LifeSafe Global',
      description:
        'Explora aventuras al aire libre, preparación de expediciones, seguridad en entornos naturales y prevención de riesgos.'
    }
  },

  '/books': {
    en: {
      title: "Books & Children's Adventure Stories | DC LifeSafe Global",
      description:
        'Discover The Adventures of Myles, children’s adventure stories about friendship and teamwork, and the SURFVIVING™ emotional wellness book.'
    },
    es: {
      title: 'Libros y Aventuras Infantiles | DC LifeSafe Global',
      description:
        'Descubre Las Aventuras de Myles, historias infantiles sobre amistad y trabajo en equipo, y el libro de bienestar emocional SURFVIVING™.'
    }
  },

  '/learning-center': {
    en: {
      title: 'Learning Center | Medical & Wellness Resources',
      description:
        'Explore educational resources about BLS, ACLS, wilderness medicine, emergency preparedness, and SURFVIVING™ emotional wellness.'
    },
    es: {
      title: 'Centro de Aprendizaje | Medicina y Bienestar',
      description:
        'Explora recursos educativos sobre BLS, ACLS, medicina wilderness, preparación ante emergencias y bienestar emocional SURFVIVING™.'
    }
  },

  '/learning-center/surfviving': {
    en: {
      title: 'SURFVIVING™ Learning Resources | DC LifeSafe Global',
      description:
        'Explore educational resources and practical concepts for emotional awareness, coping skills, and the SURFVIVING™ philosophy.'
    },
    es: {
      title: 'Recursos Educativos SURFVIVING™ | DC LifeSafe Global',
      description:
        'Explora recursos educativos sobre conciencia emocional, habilidades de afrontamiento y la filosofía SURFVIVING™.'
    }
  },

  '/learning-center/bls': {
    en: {
      title: 'BLS Learning Resources | DC LifeSafe Global',
      description:
        'Explore Basic Life Support educational resources covering CPR awareness, emergency response, and lifesaving skills.'
    },
    es: {
      title: 'Recursos de Soporte Vital Básico BLS | DC LifeSafe Global',
      description:
        'Explora recursos educativos de soporte vital básico, reanimación cardiopulmonar y respuesta ante emergencias.'
    }
  },

  '/learning-center/acls': {
    en: {
      title: 'ACLS Learning Resources | DC LifeSafe Global',
      description:
        'Explore Advanced Cardiovascular Life Support educational resources, emergency cardiovascular care, and clinical learning.'
    },
    es: {
      title: 'Recursos de Soporte Vital Avanzado ACLS | DC LifeSafe Global',
      description:
        'Explora recursos educativos de soporte vital cardiovascular avanzado, emergencias cardiovasculares y aprendizaje clínico.'
    }
  },

  '/learning-center/wilderness': {
    en: {
      title: 'Wilderness Medicine Resources | DC LifeSafe Global',
      description:
        'Explore wilderness medicine education, outdoor emergency response, expedition safety, and remote-environment preparedness.'
    },
    es: {
      title: 'Recursos de Medicina Wilderness | DC LifeSafe Global',
      description:
        'Explora educación en medicina de áreas remotas, respuesta a emergencias, seguridad en expediciones y preparación outdoor.'
    }
  },

  '/workshops': {
    en: {
      title: 'Educational Workshops | DC LifeSafe Global',
      description:
        'Explore educational workshops in emotional wellness, practical coping skills, medical awareness, and personal development.'
    },
    es: {
      title: 'Talleres Educativos | DC LifeSafe Global',
      description:
        'Explora talleres educativos de bienestar emocional, habilidades de afrontamiento, conocimientos médicos y desarrollo personal.'
    }
  },

  '/visuals': {
    en: {
      title: 'Expedition Visuals & Travel Photography | DC LifeSafe Global',
      description:
        'Explore expedition photography, landscapes, wildlife, cities, culture, and visual stories from journeys around the world.'
    },
    es: {
      title: 'Fotografía de Expediciones y Viajes | DC LifeSafe Global',
      description:
        'Explora fotografías de expediciones, paisajes, vida silvestre, ciudades, culturas e historias visuales de viajes.'
    }
  },

  '/network': {
    en: {
      title: 'Global Expedition Network | DC LifeSafe Global',
      description:
        'Discover the Global Expedition Network, an initiative connecting expedition professionals, organizations, and outdoor collaboration.'
    },
    es: {
      title: 'Red Global de Expediciones | DC LifeSafe Global',
      description:
        'Conoce la Red Global de Expediciones, una iniciativa de colaboración entre profesionales y organizaciones del sector outdoor.'
    }
  },

  '/about': {
    en: {
      title: 'About DC LifeSafe Global | Medicine Beyond the Trail',
      description:
        'Learn about DC LifeSafe Global, its medical education, wellness, outdoor experience, and commitment to safety and learning.'
    },
    es: {
      title: 'Acerca de DC LifeSafe Global | Nuestra Misión',
      description:
        'Conoce DC LifeSafe Global, su experiencia en educación médica, bienestar, expediciones y compromiso con la seguridad.'
    }
  },

  '/contact': {
    en: {
      title: 'Contact DC LifeSafe Global',
      description:
        'Contact DC LifeSafe Global for questions about medical training, SURFVIVING™, educational programs, and outdoor initiatives.'
    },
    es: {
      title: 'Contacto | DC LifeSafe Global',
      description:
        'Contacta a DC LifeSafe Global para consultas sobre capacitación médica, SURFVIVING™, programas educativos y expediciones.'
    }
  }
};

const visualPages = {
  '/visuals/red-rocks-colorado': [
    'Red Rocks Colorado Photography',
    'Fotografía de Red Rocks, Colorado'
  ],
  '/visuals/basel': [
    'Basel Switzerland Travel Photography',
    'Fotografía de Basilea, Suiza'
  ],
  '/visuals/washington-state': [
    'Washington State Nature Photography',
    'Fotografía de Naturaleza en Washington'
  ],
  '/visuals/amsterdam': [
    'Amsterdam Travel Photography',
    'Fotografía de Ámsterdam'
  ],
  '/visuals/barcelona': [
    'Barcelona Travel Photography',
    'Fotografía de Barcelona'
  ],
  '/visuals/wildlife': [
    'Wildlife & Nature Photography',
    'Fotografía de Vida Silvestre y Naturaleza'
  ]
};

Object.entries(visualPages).forEach(([path, titles]) => {
  seoPages[path] = {
    en: {
      title: `${titles[0]} | DC LifeSafe Global`,
      description:
        `Explore ${titles[0].toLowerCase()} in the DC LifeSafe Global Expedition Visuals collection.`
    },
    es: {
      title: `${titles[1]} | DC LifeSafe Global`,
      description:
        `Explora ${titles[1].toLowerCase()} en la colección Expedition Visuals de DC LifeSafe Global.`
    }
  };
});

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLink(rel, href, hreflang = null) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);

    if (hreflang) {
      element.setAttribute('hreflang', hreflang);
    }

    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    const isSpanish =
      pathname === '/es' ||
      pathname.startsWith('/es/');

    const language = isSpanish ? 'es' : 'en';

    let basePath = isSpanish
      ? pathname.slice(3) || '/'
      : pathname;

    if (basePath.length > 1) {
      basePath = basePath.replace(/\/+$/, '');
    }

    const page = seoPages[basePath];

    if (!page) {
      document.title = SITE_NAME;
      setMeta('name', 'robots', 'noindex, follow');

      document.querySelectorAll(
        'link[rel="canonical"], link[rel="alternate"][hreflang]'
      ).forEach((element) => element.remove());

      return;
    }

    const data = page[language];

    const englishURL = SITE + basePath;

    const spanishURL =
      SITE + (basePath === '/' ? '/es/' : `/es${basePath}`);

    const canonicalURL =
      language === 'es' ? spanishURL : englishURL;

    document.documentElement.lang = language;
    document.title = data.title;

    setMeta('name', 'description', data.description);
    setMeta('name', 'robots', 'index, follow');

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:title', data.title);
    setMeta('property', 'og:description', data.description);
    setMeta('property', 'og:url', canonicalURL);
    setMeta(
      'property',
      'og:locale',
      language === 'es' ? 'es_ES' : 'en_US'
    );
    setMeta(
      'property',
      'og:locale:alternate',
      language === 'es' ? 'en_US' : 'es_ES'
    );

    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', data.title);
    setMeta('name', 'twitter:description', data.description);

    setLink('canonical', canonicalURL);

    setLink('alternate', englishURL, 'en');
    setLink('alternate', spanishURL, 'es');
    setLink('alternate', englishURL, 'x-default');

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      description: data.description,
      url: canonicalURL,
      inLanguage: language,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE + '/'
      }
    };

    let script = document.getElementById(
      'dclsg-page-schema'
    );

    if (!script) {
      script = document.createElement('script');
      script.id = 'dclsg-page-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);

  }, [location.pathname]);

  return null;
}
