import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThemeWrapper from './components/ThemeWrapper';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper> {/* Använd ThemeWrapper här */}
          <ToggleButton /> {/* Lägg till ToggleButton här */}
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

