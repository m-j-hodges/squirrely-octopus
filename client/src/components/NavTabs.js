import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {Switch} from "react-router";
import Resume from "./Resume"
import Contact from './Contact'
import Portfolio from './Portfolio'
import About from './About'
import hamburger from '../files/hamburger_menu.png'
import {Helmet} from 'react-helmet-async'






function Header({currentPage, handlePageChange}) {
let modIntro = useRef("");
let [welcomeVar, setWelcomeVar] = useState('')
let [count,setCount] = useState(0)





return (
<div className="bg-transparent">
  <nav> 
  <div id="hamburger-dropdown" className="dropdown text-white">
  <div width="70px" height="50px" className="btn btn-secondary dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img width="30px" className="p-2" alt="hamburger_menu" src={hamburger}></img>
  </div>
  <ul className="dropdown-menu text-white" aria-labelledby="dropdownMenuButton1">
    <li className="dropdown-item"><Link to="/About"> About Me</Link></li>
    <li className="dropdown-item"><Link to="/portfolio">Portfolio</Link> </li>
    <li className="dropdown-item"><Link to="/contact">Contact Me</Link></li>
    <li className="dropdown-item"><Link to="/resume"> Resume </Link></li> 
    <li className="dropdown-item"><Link to="/Certs"> Certifications </Link></li> 
  </ul>
  </div>
  <div id="horizontal-nav" className="navbar navbar-expand-lg text-white">
  <div className="container-fluid">
    <a className="navbar-brand bg-transparent text-white" href="/">Matthew Hodges</a>
    <button className="navbar-toggler text-white bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/About">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  </div>
</div>

  </nav> 
  <div className="text-center navtabs rounded-5 shadow pt-3 mb-5 rounded">
    <h1 className="mb-3 text-title">Welcome to my Portfolio</h1>
  </div>
</div>

)
}

export default Header;