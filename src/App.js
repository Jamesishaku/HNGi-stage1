import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
