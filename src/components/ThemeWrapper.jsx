import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header'; // Importera Header
import Footer from './Footer'; // Importera Footer

const ThemeWrapper = ({ children }) => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header /> {/* Header visas överst */}
      {children}  {/* Barnkomponenter som Routes */}
      <Footer /> {/* Footer visas längst ner */}
    </div>
  );
};

export default ThemeWrapper;