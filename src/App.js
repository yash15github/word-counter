import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('#0dcaf0');

  const handleMode = () => {
    if (mode === '#0dcaf0') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      setMode('#0dcaf0');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Router>
        <div>
          <Navbar title="WordCount" mode={mode} handleMode={handleMode} />
          <Routes>
            <Route path="/AboutUs" element = {<AboutUs mode={mode} />} />
            <Route path="/"
              element = {<TextArea inputText="none" mode={mode} handleMode={handleMode} />}
            />
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
