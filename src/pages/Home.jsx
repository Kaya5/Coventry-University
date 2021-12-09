import React from "react";
import Button from "@material-ui/core/Button";
import { home } from "../components/styles";

import logo from "../assets/logo.png";
import coventry from "../assets/Coventry.png";
import { Link } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="logo">
        <img src={logo} alt="" />
        </div>
      <h2 className="faculty">FACULTY OF BUSINESS AND LAW</h2>
      <div id="school">SCHOOL OF STRATEGY AND LEADERSHIP</div>
  
      <div className="home-image">
        <img src={coventry} alt=''/>
      </div>
      <section>

        <h1 className="consultancy">
          Consultancy project report on:{" "}
          <span>
            sustainable transport development  in universities: the case of
            coventry university{" "}
          </span>
        </h1>
        <div className="by">by</div>
        <h1 className="name">Tomilade Doris Olawale </h1>
        <div className="details">
          <p className="id-number">
            Student ID № : <span className="number">11176523</span>
          </p>
          <p className="course">"MSc. Business Analytics"</p>
          <p className="tutor">
            Tutor: <span>Dr. Witold Bahr</span>
          </p>
        </div>
      </section>

      <div className="enter-button">
        <Link to="/page-one">
          <Button
            variant="contained"
            style={home}
            color="primary"
          >
            Enter
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
