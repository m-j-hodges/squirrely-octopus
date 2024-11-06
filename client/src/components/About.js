import React, { useRef } from "react";
import Header from "./NavTabs";
import { Helmet } from "react-helmet-async";
import photo from "../files/recent_photo.jpg";
import Footer from "./footer";
import "animate.css";

function AboutMe() {
  let animateBox = useRef("");

  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 500) {
      animateBox.current.classList.add("projects-sub-animation");
    }
    if (window.scrollY < 500) {
      animateBox.current.classList.remove("projects-sub-animation");
    }
  });

  return (
    <div>
      <Helmet>
        <style>{"body { background-color: black; }"}</style>
      </Helmet>
      <Header />
      <div>
        {" "}
        <img
          width="20%"
          className="img-thumbnail rounded mx-auto d-block"
          alt="Matthew Hodges"
          src={photo}
        />
      </div>
      <div className="card p-5 m-3 shadow">
        <h3> About Me</h3>
        <p>
          Thank you for visiting my portfolio page. My name is Matthew Hodges,
          and I live in Las Vegas, NV. I enjoy programming because I enjoy
          solving technical problems and I think of programming as solving a
          tough puzzle. It's quite fun! Currently, my favorite web technologies
          are javascript React, and MongoDB. I am also very interested in web
          security.
        </p>
        <p>
          {" "}
          I studied programming with Georgia Tech through their MERN stack
          bootcamp where I learned HTML, CSS, Javascript. I am currently working
          as a full-stack web developer building apps in .NET CORE and C#. I
          really like how easy .NET CORE makes it to develop and deploy
          applications. I am also currently working on getting better at using
          React.
        </p>
        <p>
          {" "}
          Prior to learning web development, I worked for{" "}
          <span class="tesla-text-">Tesla</span> for seven and a half years.
          While working for Tesla I was a solar energy consultant and project
          manager.
        </p>
      </div>
      <div className="card p-5 m-3 shadow" ref={animateBox} id="projects-sub">
        <h5> Projects </h5>
        <a href="https://positive-thoughts-9-28-2022.herokuapp.com">
          <p> Website about Positive Quotes </p>{" "}
        </a>
        <a href="https://real-estate-top-5.herokuapp.com">
          <p> Top investment properties search engine </p>
        </a>
        <a href="https://m-j-hodges.github.io/Weather-Search-engine/">
          <p>Javascript weather forecast search engine</p>
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default AboutMe;
