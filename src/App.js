import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#06214a';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#c6c9db';
      document.body.style.color = 'black';
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={changeMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter text here to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
