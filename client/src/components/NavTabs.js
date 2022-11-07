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
import hamburger from '../files/hamburger_menu.png'
import {Helmet} from 'react-helmet-async'


function Header({currentPage, handlePageChange}) {


return (
<div>
  <nav> 
  <div className="dropdown">
  <div width="70px" height="50px" className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img width="30px" className="p-2" alt="hamburger_menu" src={hamburger}></img>
  </div>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li className="dropdown-item"><Link to="/About"> About Me</Link></li>
    <li className="dropdown-item"><Link to="/portfolio">Portfolio</Link> </li>
    <li className="dropdown-item"><Link to="/contact">Contact Me</Link></li>
    <li className="dropdown-item"><Link to="/resume"> Resume </Link></li> 
  </ul>
</div>

  </nav> 
  <div className="m-3 p-5 text-center navtabs rounded-5 shadow p-3 mb-5 rounded">
    <h1 className="mb-3">Welcome to my Portfolio!</h1>
  </div>
</div>

)
}

export default Header;