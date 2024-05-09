import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ThemeWrapper from "./components/ThemeWrapper";
import "./App.css";
import MainContent from "./components/MainContent";


{/* React Router används för att hantera navigeringen på webbsidan. 
Det gör att användare kan gå mellan olika sidor (som 'About', 'Projects', och 'Contact') 
utan att sidan behöver laddas om helt. */}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeWrapper>
          <MainContent>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </MainContent>
        </ThemeWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
