import react from 'react';
import Header from './NavTabs'
import {Helmet} from 'react-helmet-async'
import Footer from './footer'

function Portfolio() {
  
  return (
    <div>
    <Helmet>
      <style>{'body { background-color: #E5E5E5; }'}</style>
    </Helmet>
      <Header/>
<div className="card p-3">
    <h4 className="card-title">Projects I have completed </h4>
    <ul> 
      <li className="card-text"> <a href="https://github.com/m-j-hodges/Programming_Quiz"> Programming Quiz using Javascript </a></li>
      <li className="card-text"><a href="https://github.com/m-j-hodges/password_generator"> Password generator using Javascript </a></li>
      <li className="card-text"><a href="https://real-estate-top-5.herokuapp.com"> A website for searching for prime real estate investment markets in the U.S. </a></li>
      <li className="card-text"><a href="https://github.com/m-j-hodges/Weather-Search-engine">A weather search engine using Javascript </a> </li>
      <li className="card-text"><a href=""> A README Generator using Javascript </a></li>
      <li className="card-text"><a href="https://positive-thoughts-9-28-2022.herokuapp.com"> React Project- "Positive Thoughts"</a></li>
    </ul>
</div>
<Footer />
</div>
  )

}

export default Portfolio;
