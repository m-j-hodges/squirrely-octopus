import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Header from './components/NavTabs'
import PortContainer from './components/portContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import {HelmetProvider} from 'react-helmet-async'
import Certs from './components/certifications'


function App() {


  return (
    <HelmetProvider>
    <Router>
    <div class="container">
    <Routes> 
    <Route
    path="/" 
    element={<About />}/>
    <Route
    path="/certs"
    element={<Certs />}
    />
    <Route
    path="/contact"
    element={<Contact/>}
    />
    <Route
    path="/portfolio"
    element={<Portfolio />}
    />
    <Route
    path="/resume"
    element={<Resume />}
    />
    <Route
    path="/About"
    element={<About />}
    />
    </Routes>
    </div>

    </Router>
    </HelmetProvider>
  );
}

export default App;
