
import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import {
  useLocation,
  useNavigate
} from 'react-router-dom';

const LanguageContext = createContext();

function languageFromPath(pathname) {
  return pathname === '/es' ||
    pathname.startsWith('/es/')
    ? 'es'
    : 'en';
}

export function localizedPath(pathname, language) {
  let basePath = pathname;

  if (basePath === '/es') {
    basePath = '/';
  } else if (basePath.startsWith('/es/')) {
    basePath = basePath.slice(3);
  }

  if (language === 'es') {
    return basePath === '/'
      ? '/es/'
      : `/es${basePath}`;
  }

  return basePath;
}

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [language, setLanguageState] = useState(
    () => languageFromPath(location.pathname)
  );

  useEffect(() => {
    setLanguageState(
      languageFromPath(location.pathname)
    );
  }, [location.pathname]);

  const setLanguage = (nextLanguage) => {
    const selected =
      nextLanguage === 'es' ? 'es' : 'en';

    const nextPath = localizedPath(
      location.pathname,
      selected
    );

    setLanguageState(selected);

    navigate({
      pathname: nextPath,
      search: location.search,
      hash: location.hash
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
