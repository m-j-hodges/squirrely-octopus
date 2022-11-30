import React, { useEffect, useState, useRef } from 'react';
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
let modIntro = useRef('')
let [welcomeVar, setWelcomeVar] = useState('')
let intro = useRef('Welcome to my Portfolio!')
let i = useRef(0)

useEffect(() => {


const interval = setInterval(() => {
  let newIntro = 'Welcome to my Portfolio!'

    const splitIntro =  newIntro.split('')
    modIntro.current += splitIntro[i.current]
    console.log(modIntro.current)
    console.log(i)
    setWelcomeVar(modIntro.current)
    i.current += 1
  if(modIntro.current.length === splitIntro.length) {
  // modIntro.current = ''
  // setWelcomeVar('')
  // i.current = 0
  clearInterval(interval)
}
  
  // if(i == intro.split('').length) { i= 0}
  
}, 100)

return () => clearInterval(interval)

}, [modIntro, i])

return (
<div>
  <nav> 
  <div id="hamburger-dropdown" className="dropdown">
  <div width="70px" height="50px" className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img width="30px" className="p-2" alt="hamburger_menu" src={hamburger}></img>
  </div>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li className="dropdown-item"><Link to="/About"> About Me</Link></li>
    <li className="dropdown-item"><Link to="/portfolio">Portfolio</Link> </li>
    <li className="dropdown-item"><Link to="/contact">Contact Me</Link></li>
    <li className="dropdown-item"><Link to="/resume"> Resume </Link></li> 
    <li className="dropdown-item"><Link to="/Certs"> Certifications </Link></li> 
  </ul>
  </div>
  <div id="horizontal-nav" className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Matt Hodges</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">Resume</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Certs">Certifications</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  </div>
</div>

  </nav> 
  <div className="m-3 p-5 text-center navtabs rounded-5 shadow p-3 mb-5 rounded">
    <h1 className="mb-3 text-title">{welcomeVar}</h1>
  </div>
</div>

)
}

export default Header;