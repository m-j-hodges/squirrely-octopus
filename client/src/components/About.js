import React, { useRef } from "react";
import Header from "./NavTabs";
import { Helmet } from "react-helmet-async";
import photo from "../files/recent_photo.jpg";
import Footer from "./footer";
import "animate.css";
import "../About.css"

function AboutMe() {



  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #081A28; }"}</style>
      </Helmet>
      <Header />
      <div>
        <img
          width="20%"
          className="img-thumbnail rounded mx-auto d-block"
          alt="Matthew Hodges"
          src={photo}
        />
      </div>
      <div className="card p-5 m-3 shadow">
        <h3 className="text-center">About Me</h3>
        <br/>
        <p>
          {/* Working in Web Dev */}
          In my current position as a full-stack developer at Clark County District Attorney, I work to improve
          our current web applications, create new web applications, create reports to support other departments, create/maintain MSSQL databases, and write SQL stored procedures. For instance,
          I am currently working on building a .NET 6 HR web application for managing interviews, interview questions and answers, interviewees,
          interviewers, and interview panels. So predicting how all this information <span className="bold-text"><i>might potentially</i></span> be used in the future
          is very important. Restricting access to sensitive information is essential as well. All the technical challenges that come along with this are what pique
          my interest in this area. Writing C# classes that are re-usable, and designing and building
          .NET 4.8, 6, and 7 web applications that are useful is my favorite part about my current job. One example of a .NET (C#) 6 application which I recently built was an application for merging Word Documents, PDFs, Images, and text files
          into a single PDF document. For the front-end of this application I used a combination of CSHTML and Javascript. I enjoy coding in C# the most.
        </p>
        <p>
          {/* Education / bootcamp  */}
          In 2022 I started a bootcamp at Georgia Institute of Techology,
           where I studied full-stack web development. My favorite topic of study during the bootcamp
           was <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>. React is interesting because it can be used to enhance HTML
           and make pageloads quicker and respond by using lifecycle-hooks. I enjoyed studying this topic because
           it allowed me to gain a deeper understanding of Javascript and an appreciation of the flexibility
           of the Javascript language. With Javascript being an interpreted language, you don't need to define variable
           types which speeds up development time, and also makes for more straight-forward code, it seems.
          
        </p>
        <p>
          {/* career @ Tesla */}
          While working for Tesla in 2022 and prior, I enjoyed interacting with customers.
          I learned how to negotiate with people from various walks of life
          and persuade them to purchase solar and backup batteries from Tesla. My job
          entailed everything from contract negotiation to explaining complex technical concepts
          (e.g. battery voltage)
          in easy-to-understand terms. The ultimate goal was always satisfied, happy customer.
          During my time at Tesla, I also garnered a passion for technology 
          including battery construction, electrical engineering, and electric car design.
          I explained to customers about technical concepts including volts, amps, 
          kilowatt-hours, and battery degradation. This deep-knowledge of Tesla translated into greater
          sales of cars and solar products.
        </p>
        <p>
          {/* Hobbies */}
          I enjoy my work, but I also have hobbies outside of work. My hobbies include
          fixing my Mercedes car, cooking, and exercising. What I like most about repairing my car is the technical
          aspect and needing to do every step error-free or else the project fails. This aspect
          of repairing cars appeals greatly to my analytical side. This is because in order to complete
          a certain repair project I must delve deep into the preparation of the project by watching videos
          , reading manuals, and researching different parts
          of the car before I can complete the repair correctly. I have a phrase that I live by,
          which is "preparation is the enemy of failure.". This phrase means 90% of the work
          is done in the preparation phase, and 10% is the execution.
          This approach ensures success because any flaws you find in your planned
          execution happen before you execute. I enjoying cooking because it gives me a chance to
          experiment and try new recipes. I enjoy the freedom and fun that cooking affords as it gives me
          a chance to try new things and taste new food. This is also a budget-friendly way to try new
          food without spending a great deal of money. Exercising has always been a hobby for me because
          I enjoy constantly improving, challenging myself to achieve goals, and great feeling of endorphins
          when I workout. My favorite exercises are hiking, rowing, and running.
        </p>
      </div>
      <div className="card p-5 m-3 shadow" id="projects-sub">
        <h5> Links to completed projects</h5>
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
