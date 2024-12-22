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
          In my current position as a full-stack developer at Clark County District Attorney,
           I work to create new web applications, improve our current web applications, create reports to support other departments,
           create and maintain <a href="https://en.wikipedia.org/wiki/Microsoft_SQL_Server" rel="noreferrer" target="_blank">MSSQL</a> databases, and write SQL stored procedures. For instance,
          I am currently working on building a .NET 6 HR web application for managing interviews including information on interviewees, 
          interviewers, interview panels, and interview questions and answers. So predicting how all
           this information <span className="bold-text"><i>might potentially</i></span> be used in the future is very important. Restricting access
           to sensitive information is essential as well. All the technical challenges that come along with this are what pique my
           interest in this area. Writing C# classes that are reusable,
           and designing and building .NET 4.8, 6, and 7 web applications that are useful
           is my favorite part about my current job. One example of a .NET (C#) 6 application
           which I recently built was an application for merging Word Documents, PDFs, Images, 
           and text files into a single PDF document. For the front-end of this application I used a combination of CSHTML and Javascript.
           I enjoy coding in C# the most.

        </p>
        <p>
          {/* Education / bootcamp  */}
          In 2022 I started a bootcamp at Georgia Institute of Technology, 
          where I studied full-stack web development. My favorite topic of study 
          during the bootcamp was <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>. 
          React is interesting because it can be used to enhance HTML and make page 
          loads quicker and responsive by using lifecycle-hooks. I enjoyed studying this 
          topic because it allowed me to gain a deeper understanding of Javascript and an 
          appreciation of the flexibility of this language. With Javascript being an 
          interpreted language, you don't need to define variable types that speeds up 
          development time, and also makes for more straight-forward code.
          
        </p>
        <p>
          {/* career @ Tesla */}
          Before my web development career I worked for Tesla in a project management 
          and customer support role. I learned how to negotiate with people 
          from various walks of life and persuade them to purchase solar and 
          backup batteries from Tesla. My job entailed everything from contract 
          negotiation to explaining complex technical concepts (e.g. battery voltage) 
          in easy-to-understand terms. The ultimate goal was always satisfied, happy customers. 
          During my time at Tesla, I also garnered a passion for technology including battery 
          construction, electrical engineering, and electric car design. I explained to customers 
          about technical concepts including volts, amps, kilowatt-hours, and battery degradation. 
          This deep-knowledge of Tesla translated into greater sales of cars and solar products.
        </p>
        <p>
          {/* Hobbies */}
          I enjoy my work, but I also have hobbies outside of work. My hobbies include 
          fixing my Mercedes car and cooking. What I like most about repairing my car is 
          the technical aspect and needing to do every step error-free or else the project 
          fails. This aspect of repairing cars appeals greatly to my analytical side. This 
          is because in order to complete a certain repair project I must delve deep into 
          the preparation of the project by watching videos, reading manuals, and researching 
          different parts of the car before I can complete the repair correctly. I enjoy 
          cooking because it gives me a chance to experiment and try new recipes. I like 
          the freedom and fun that cooking affords as it gives me a chance to try new things 
          and taste new food. This is also a budget-friendly way to try new food without 
          spending a great deal of money. 
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default AboutMe;
