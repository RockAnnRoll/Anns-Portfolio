import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themes/themeSlice';

   export const store = configureStore({
     reducer: {
       theme: themeReducer,
     },
   });
   

   //Konfigurerar Redux store med configureStore från Redux Toolkit. ThemeReducer registreras som en del av storens reducer.