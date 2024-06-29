import react from 'react';
import Header from './NavTabs'
import {Helmet} from 'react-helmet-async'
import Footer from './footer'
import axios from 'axios';
import {useEffect, useState, useRef} from 'react'
import Contact from './Contact';
import {useNavigate } from 'react-router-dom'
import imgUrl from '../files/img1.jpg';

function Portfolio() {
const navigate = useNavigate()

const refreshPage = () => navigate(0)





  
let cardInfo = [
  {cardLink: 'https://positive-thoughts-9-28-2022.herokuapp.com', cardTitle: 'React App where you can see positive quotes', source:'http://localhost:3001/api/getImage'},
  {cardLink: 'https://real-estate-top-5.herokuapp.com', cardTitle: 'Web App where you can search for Top real estate investment properties', source:'http://localhost:3001/api/getImage'},
  {cardLink: 'https://m-j-hodges.github.io/Weather-Search-engine/', cardTitle: 'Weather search website using Javascript', source:'http://localhost:3001/api/getImage'},
  {cardLink: 'https://m-j-hodges.github.io/Programming_Quiz/', cardTitle: 'Programming Quiz using Javascript', source: 'http://localhost:3001/api/getImage'},
  {cardLink: 'https://m-j-hodges.github.io/password_generator/', cardTitle: 'Password generator using Javascript', source:'http://localhost:3001/api/getImage'},
  {cardLink: 'https://github.com/m-j-hodges/Readme_Generator', cardText: 'This is programmed in Node.js, so there is no webpage', cardTitle: 'README generator using Node.js', source:'http://localhost:3001/api/getImage'}
]


  return (
    <div>
    <Helmet>
      <style>{'body { background-color: #E5E5E5; }'}</style>
    </Helmet>
      <Header/>
<div className="card p-3">
    <h4 className="card-title">Projects I have completed </h4>
    <div className="row p-3">
      {cardInfo && cardInfo.map((card) => (<div className="card sm-col-3 p-3 m-2" style={{width: 18 + 'rem'}}>
      <img width="100%" src={imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{card.cardTitle}</h5>
    <p className="card-text">{card.cardText || card.cardLink}</p>
    <a href={card.cardLink} className="btn btn-primary d-flex justify-content-center">View project</a>
  </div>
</div>))}
  </div>
    
</div>
<Footer />
</div>
  )

}

export default Portfolio;
