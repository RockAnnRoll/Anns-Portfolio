import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themes/themeSlice';

   export const store = configureStore({
     reducer: {
       theme: themeReducer,
     },
   });
   