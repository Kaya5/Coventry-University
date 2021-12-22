import React from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import Picture from "../components/Picture";
import Strength from "../components/Strength";
import Weakness from "../components/Weakness";
import Opportunities from "../components/Opportunities";
import Threats from "../components/Threats";

import "../styles/Pages.css";
import "../styles/Table.css";
import { prev, next } from "../components/styles";


import picture1 from "../assets/Picture1.jpg";
import picture2 from "../assets/Picture2.jpg";
import ride from "../assets/ride.png";
import walk from "../assets/walk.jpeg";
import bus from "../assets/bus.jpeg";
import chargepoint from "../assets/chargepoint.png";
import busride from "../assets/ride.jpeg";

import { Link } from "react-router-dom";


function PageTwo() {
  return (
    <div className="page">
      <article className="article">
        <Scroll />
        <div>
          <Header title="Data Collection" />
          <p>
            Considering that the purpose of the research is to identify patterns
            and themes regarding sustainable travel plans at Coventry
            University, a multi-method qualitative data methodology and
            subsequent analysis approaches were be employed to gather
            information and facts from surveys' secondary data, published
            articles, books, and reports.
          </p>
          <p>
            The data for this study was collected using structured literature
            review and secondary data from surveys. The environment team
            provided the data for this study as part of a staff and student
            travel survey conducted in November 2021. Due to the timeframe and
            project deadline, a subset of the survey data (692 responses)
            recorded between 02/11/2021 and 18/11/2021 was used. The survey
            consisted of a travel behaviour section and socioeconomic
            characteristics section. No personal information was disclosed to
            the researcher.
          </p>
          <Picture image={picture1} />
        </div>

        <div>
          <Header title="Sustainable Transport Initiatives at Coventry University" />
          <div>
          <Picture image={picture2} />
          <div className='page2-images'>
            <img src={walk} className='extra-images' alt=''/>
            <img src={ride} className='extra-images' alt=''/>
            <img src={busride} className='extra-images' alt=''/>
            <img src={bus} className='extra-images' alt=''/>
            <img src={chargepoint} className='extra-images' alt=''/>
          </div>
          </div>
        </div>
        <p>
          <div>
            <i>
              <strong>SWOT Analysis of Sustainable Travel Plans</strong>
            </i>
          </div>
          SWOT analysis is a strategic planning approach that examines an
          organization's strengths, weaknesses, opportunities, and threats
          (Gürel, 2017). To align existing travel plans with university
          sustainability goals, a SWOT analysis was performed.
        </p>
<div className ='both-tables'>
        <div className="table">
          <div className="pair">
            <Strength />
          </div> 
          <div className="pair">
            <Weakness />
          </div>
        </div>

        {/* SECOND TABLE */}

        <div className="table">
          <div className="pair">
            <Opportunities />
          </div>
          <div className="pair">
            {" "}
            <Threats />
          </div>
        </div>
        </div>
      </article>
      <div className="buttons">
        <div className="home-button">
          <Link to="/page-one">
            <Button
              style={prev}
            >
              previous
            </Button>
          </Link>
        </div>
        <div className="next-btn">
          <Link to="/page-three">
            <Button href="/page-three" style={next}>
              next
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageTwo;
