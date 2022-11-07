import React from 'react';
import Header from "./NavTabs"
import {Helmet} from 'react-helmet-async'
import photo from '../files/recent_photo.jpg'
import Footer from './footer'

function AboutMe() {

  return (
    <div> 
    <Helmet>
      <style>{'body { background-color: #E5E5E5; }'}</style>
    </Helmet>
      <Header />
    <div> <img width="300px" className="img-thumbnail rounded mx-auto d-block" src={photo}/>
    </div>
<div className="card p-5 m-3">
    <h3> About Me</h3>
    <p>Thank you for visiting my portfolio page. My name is Matthew Hodges, and I live in Las Vegas, NV. I enjoy programming because I enjoy solving technical problems and I think if programming as solving a tough puzzle. It's quite fun! Currently, my favorite web technologies are javascript React, and MongoDB. I am also very interested in web security.</p>
    <p> I studied programming with Georgia Tech University through their MERN stack bootcamp where I learned to code in HTML, CSS, Javascript. I look forward to learning other popular web development languages including Java, Python, and Ruby.</p>
    <p> Prior to learning web development, I worked for <a href="https://www.tesla.com">Tesla</a> for seven and a half years. While working for Tesla I was a solar energy consultant and project manager.</p>
</div>

<Footer />
</div>
  )

}

export default AboutMe;