import React from 'react'
import './style.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; 
import {Routes,Route, BrowserRouter as Router} from
 'react-router-dom';
export default function App() {
  return (
    
    <div>
     <Router>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/Contact" element={<Contact />}/>
        <Route path ="/about" element={<AboutUs />}/>
        </Routes>
      </Router>
    </div>
  );
}
