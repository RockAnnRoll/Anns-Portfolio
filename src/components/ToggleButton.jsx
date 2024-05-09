

import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { toggleTheme } from "../../features/themes/themeSlice";

const ToggleButton = () => {
  const dispatch = useDispatch();
  // useSelector används för att hämta darkMode från Redux store
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  // Bestäm texten på knappen baserat på om det är mörkt läge eller inte
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <button className="lightDark-Btn" onClick={handleToggle}>
      {buttonText}
    </button>
  );
};

export default ToggleButton;
