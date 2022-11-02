import React from 'react';
import Header from "./NavTabs"

function AboutMe() {

  return (
    <div> 
      <Header />
<div className="card p-5 m-3">
    <h3> About Me</h3>
    <p> I am a self motivated person who likes to run, swim, and hike. I enjoy being outdoors as often as a I can be. I also enjoy experimenting with cooking new food when I get the chance to. I got started programming because I have been passionate about computers and technology from a very young age.</p>
    <p> Currently, my favorite web technologies are javascript React, and MongoDB. I am also very interested in web security.</p>
    <p> I studied programming with Georgia Tech University through their MERN stack bootcamp where I learned to code in HTML, CSS, Javascript. I look forward to learning other popular web development languages including Java, Python, and Ruby.</p>
    <p> Prior to learning web development, I worked for <a href="https://www.tesla.com">Tesla</a> for seven and a half years. While working for Tesla I was a solar energy consultant and project manager.</p>
</div>
</div>
  )

}

export default AboutMe;