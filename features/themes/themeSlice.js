
{/* ThemeSlice med Redux Toolkit håller koll på om temat är mörkt eller ljust. 
Initiala tillståndet är att temat inte är mörkt. Funktionen toggleTheme byter temat mellan mörkt och ljust varje gång den används*/}


import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    }
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;