import React from 'react';
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


function Header({currentPage, handlePageChange}) {


return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse border" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className= "nav-link" to='/About'>About Me</Link>
          </li>
          <li className="nav-item">
            <Link className= "nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className= "nav-link" to="/contact">Contact Me</Link>
          </li>
          <li className="nav-item">
            <Link className= "nav-link" to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="p-5 text-center bg-light">
    <h1 className="mb-3">Welcome to my Portfolio!</h1>
  </div>
</div>

)
}

export default Header;