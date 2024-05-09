import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header"; // Importera Header
import Footer from "./Footer"; // Importera Footer


{/*ThemeWrapper använder useSelector för att hämta darkMode från Redux, 
och beroende på detta värde ställer den in klassen på div-elementet 
för att visa antingen ett mörkt eller ljust tema för innehållet.*/}

const ThemeWrapper = ({ children }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header /> 
      {children} {/* Barnkomponenter som Routes */}
      <Footer />
    </div>
  );
};

export default ThemeWrapper;
