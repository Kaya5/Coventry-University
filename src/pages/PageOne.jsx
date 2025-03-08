import React from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import Picture from '../components/Picture';

import { home, next } from "../components/styles";
import { Link } from "react-router-dom";
import covent from '../assets/Covent.png';

import "../styles/Pages.css";

function PageOne() {
  return (
    <div className="page">
      <article className="article">
        <Scroll />
        <div>
        <Header title="The Organisation" />
        <p>
          This study is being conducted on the main campus of Coventry University, which has approximately 35,000 students and 3,500 employees who commute daily, weekly, monthly, or on an ad hoc basis mostly to the main campus (Coventry University, 2018). The university is in the heart of Coventry, which has approximately 371,000 residents (Coventry City Council, 2021). Coventry University gained university status in 1992. It currently operates several campuses and services worldwide, notably the Coventry University Group (Coventry University, n.d.).
        </p>
        <Picture image={covent}/>
        </div>

<div>
        <Header title="Business Issue" />
        <p>
          Coventry University's sustainable travel plan encourages walking, cycling, car sharing, and reduced reliance on automobiles to aid in the transition to sustainable modes of transportation. Automobiles, on the other hand, continue to be the most popular method of transportation, with automobile fleets expanding at the same rate as the population. To gain a better understanding of how staff and students commute to campus, the environment team conducts travel surveys. The findings are critical in determining the trip plan's objectives, targets, and action plan. Over a five-year period, the travel plan intends to reduce travel by private car for staff and students to the site and boost journeys conducted by sustainable modes of transportation (2015-2020).
        </p>
        <p>
          As a result, this study attempts to uncover behavioural tendencies toward sustainable travel plans at Coventry University and give recommendations to strengthen the existing measures.
        </p>
</div>

<div>
        </div>
      </article>
      <div className="buttons">
        <div className="home-button">
          <Link to="/">
            <Button color="primary" variant="contained" style={home}>
              Home
            </Button>
          </Link>
        </div>
        <div className="next-btn">
          <Link to="/page-two">
            <Button style={next}>
              next
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PageOne;
