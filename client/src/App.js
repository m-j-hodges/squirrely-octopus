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

function App() {
  return (
    <Router>
    <div class="container">
    <Routes> 
    <Route
    path="/" 
    element={<Home />}/>
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
  );
}

export default App;
