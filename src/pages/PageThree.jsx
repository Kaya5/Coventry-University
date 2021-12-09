import React from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import Picture from "../components/Picture";

import picture3 from "../assets/Picture3.jpg";
import picture4 from "../assets/Picture4.jpg";
import picture5 from "../assets/Picture5.jpg";
import picture6 from "../assets/Picture6.jpg";
import picture7 from "../assets/Picture7.jpg";
import picture8 from "../assets/Picture8.jpg";

import { prev, next } from "../components/styles";
import "../styles/Pages.css";
import { Link } from "react-router-dom";


function PageThree() {
  return (
    <div className="page">
      <article className="article">
        <Scroll />
        <div>
          <Header title="Thematic Analysis" />
          <p>
            This study followed a theoretical framework employed by Nikitas et al. (2018), which was inspired by Braun and Clarke's (2006) six-step thematic analysis technique. Thematic analysis uncovers and organises patterns or themes in qualitative data to gain insight (Saunders et al., 2019, 651). This process entails getting acquainted with textual data and identifying codes; exploring, evaluating, and defining themes; and, finally, obtaining an assessment. The data was systematically coded and analysed, and lastly linked to broad theoretical notions (Saunders et al., 2019, 652).
          </p>

          <p>
            The commuting behaviours of staff and students to the university, with majority of students walking to campus. Over 35% of the students reside within a mile of the school. On the other hand, most staff drive to campus, with over 20% residing within a 2-to-5-mile radius of campus. This is consistent with the findings of Daisy et al. (2018), who discovered that students walked significantly more than university personnel.
          </p>
          <Picture image={picture3} />
          <Picture image={picture4} />
        </div>

        <div>
          <Header title="Findings" />
          <p>
            This study identified convenience, sustainability commitmen reliability, cost, awareness, and the Covid-19 pandemic as facto influencing the chances of adopting sustainable transport.
            <Picture image={picture5} />
            <ol>
              <li>
                <b>Convenience: </b> (travel time, flexibility, and ease of arrival) has been discovered as the most essential element in uptake of sustainable transportation use (Limanond et al., 2011; Zhou, 2016). 56% of respondents stated ease of travel, while 23% pointed to travel time as a factor determining mode choice, comparable to Fioreze et al. (2019) and Ho et al. (2020), who found that commuters use personal vehicles due to the perceived inconveniency of alternative modes. People prefer to drive because it is faster than other modes of transportation, and they own one. Inability to reach places owing to severe weather was highlighted by some participants as a major deterrent.
              </li>

              <li>
                <b>Sustainability Commitment:</b> Respondents commitment to sustainability affects their willingness to walk or cycle to campus. 42.8% of students value a sustainable environment against 31.7% of staff. Johansson et al. (2006) reported similar findings that a commitment to sustainability functions as a positive justification for taking the bus, rail, or walking to campus. This study builds on previous research, which looked at the effect of a sustainable mindset to a choice between categories of sustainable transportation alternatives in isolation without accounting for lone driving. Students' inherent preferences or views surpassed infrastructure, services, and land use patterns, according to Akar and Clifton (2009) as well as Nkurunziza et al.
                <Picture image={picture6} />
              </li>

              <li>
                <b>Reliability: </b> While reliability appears to be less important than cost, it affects uptake owing to concerns about timely and accurate information, schedules, and other routes in case of disruption. Beyond the erratic schedules, 23% of students and staff were concerned about the capacity and dependability of sustainable transport. These variables have been connected to public transit congestion, access roads, and station sites, all of which influence mode choice (Tirachini et al., 2013; Vedel et al., 2017; Wardman & Whelan, 2011).
              </li>

              <li>
                <b>Cost:</b> While reliability appears to be less important than cost, it affects uptake owing to concerns about timely and accurate information, schedules, and other routes in case of disruption. Beyond the erratic schedules, 23% of students and staff were concerned about the capacity and dependability of sustainable transport. These variables have been connected to public transit congestion, access roads, and station sites, all of which influence mode choice (Tirachini et al., 2013; Vedel et al., 2017; Wardman & Whelan, 2011).
              </li>

              <li>
                <b>Awareness:</b> Another factor influencing the university's sustainable mobility plan is a lack of awareness. According to the survey, 93.5% of respondents have not embraced the university's car-share initiatives, citing lack of awareness as the main reason for this. As seen in Figure 10, awareness a key impediment to numerous initiatives. 27% of respondents were unaware of any university sustainable travel initiative. Previous studies have found that commuters' awareness of carbon emissions impacts their decisions (Cao & Yang, 2017; Jia et al., 2018; Liu et al., 2017).
                <Picture image={picture7} />
              </li>

              <li>
                <b>Covid-19 Pandemic:</b> The CU car share is an eco-friendly effort created by the institution to alleviate the distance issue. With the global Covid-19 outbreak, carpooling became less acceptable to commuters to preserve social distance and prevent virus  exposure. Most respondents said the pandemic influenced their campus commute transportation choices. Majority of the respondents are not confident to use CU car share or public transportation due to the pandemic and have switched to either cycling or lone driving to reduce the chances of contracting or spreading the virus. The findings support prior research that the Covid-19 pandemic impacts user mobility choices, particularly ecologically friendly modes (Beck & Hensher, 2020; De Haas et al., 2020; De Vos, 2020).
                <Picture image={picture8} />
              </li>
            </ol>
          
          </p>
        </div>
      </article>
      <div className="buttons">
        <div className="home-button">
          <Link to="/page-two">
            <Button
              // size="large"
              // variant="outlined"
              // color='secondary'
              style={prev}
            >
              previous
            </Button>
          </Link>
        </div>
        <div className="next-btn">
          <Link to="/page-four">
            <Button style={next}>
              next
            </Button>
          </ Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageThree;
