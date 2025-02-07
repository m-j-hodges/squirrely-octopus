import react from "react";
import Header from "./NavTabs";
import { Helmet } from "react-helmet-async";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";
import imgUrl from "../files/img1.jpg";
import "../portfolio.css"

function Portfolio() {
  const navigate = useNavigate();

  const refreshPage = () => navigate(0);

  let cardInfo = [
    {
      cardLink: "https://positive-thoughts-9-28-2022.herokuapp.com",
      cardTitle: "React App where you can see positive quotes",
      source: "/api/getImage",
    },
    {
      cardLink: "https://myphone-store-251e72aea7b9.herokuapp.com/",
      cardTitle: "Mock Phone Store built using Angular 17/Node.js",
      source: "/api/getImage",
    },
    {
      cardLink: "https://m-j-hodges.github.io/Weather-Search-engine/",
      cardTitle: "Weather search website using Javascript",
      source: "/api/getImage",
    }

  ];

  return (
    <div>
      <Header />
      <Helmet>
        <style>{"body { background-color: #081A28; }"}</style>
      </Helmet>
      <div className="card p-3">
        <h4 className="card-title">My Projects </h4>
        <div className="row p-3">
          {cardInfo &&
            cardInfo.map((card, index) => (
                <a
                  href={card.cardLink}
                  className="card sm-col-3 p-3 m-2"
                  style={{ width: 18 + "rem" }}
                >
                  <img
                    key={`image${index}`}
                    id={`image${index}`}
                    width="100%"
                    src="/api/getImage"
                    className="card-img-top custom-img"
                    alt="coding"
                    title={`${card.title}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ height: 5 + "em" }}>
                      {card.cardTitle}
                    </h5>
                  </div>
                  <div className="card-footer">
                    <a
                      href={card.cardLink}
                      className="btn btn-primary d-flex justify-content-center"
                    >
                      View project
                    </a>
                  </div>
                </a>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
