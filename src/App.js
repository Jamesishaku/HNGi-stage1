import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const name = "James Ishaku"
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home name={ name } />} exact />
        <Route path="/contact" element={<Contact name={name} />} />
        <Route path="*" element={<Home name={ name } />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
