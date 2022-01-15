import React from 'react'
import "./style.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
     <Home/>
     <AboutUs/>
     <Contact/>
    </div>
  );
}
