import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/themes/themeSlice'; // Se till att sökvägen är korrekt

const ToggleButton = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return <button onClick={handleToggle}>Toggle Theme</button>;
};

export default ToggleButton;