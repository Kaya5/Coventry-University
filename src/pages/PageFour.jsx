import React from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import { prev, next } from "../components/styles";
import Picture from "../components/Picture";

import picture9 from "../assets/Picture9.jpg";

import "../styles/Pages.css";


function PageFour() {
  return (
    <div className="page">
      <article className="article">
        <Scroll />
        <div>
          <Header title="Comparison Between Present and Previous Survey" />
          <p>
            This year's Coventry University survey shows that student adoption
            of sustainable transport has increased from 70% in 2018 to around 86
            % in 2021. As indicated, students choose to walk, cycle, or take the
            train to campus, which is good for the school's sustainable mobility
            plan. The substantial disparity in student and staff adoption of
            eco-friendly transport systems may be connected to disparities in
            distance from the university and individual preferences.
            <Picture image={picture9} />
          </p>
          <p>
            Using this study as a benchmark of progress, some of Coventry
            University's goals have been achieved but others remain unachieved.
            For instance, the university has a target to achieve single staff
            occupancy of car to 35% in 2020 and in 2021 single staff car usage
            stands at 45%, making 10% below target. Similarly, the university
            set targets for staff cycling, walking, bus use, and car sharing at
            14%, 16%, 15%, and 7%. The study found none of these targets have
            been met, as staff cycling is 44% below target (currently at 7.8%),
            walking is 20% below target (currently at 12.8%), and bus usage is
            almost 60% below target (currently at 6.8% compared to 15% target).
            This study found that only 12% of the target train usage was
            achieved given that the current study indicated 15.8% train usage
            among staff. It is also comparable from a student standpoint, as the
            university has only been able to meet its goal of students walking
            to/from the university (target is 57%) since 69% of students have
            adopted walking to/from the university. Furthermore, the study found
            that the university is almost 70% off its target in terms of student
            cycle uptake and 44% off its target in terms of student train
            utilisation.
          </p>
        </div>
        <div>
          <Header title="Recommendations" />
          <p>
            {" "}
            The administration of Coventry University clearly must improve in a
            few areas. Implementing the following recommendations will improve
            uptake of Coventry University's sustainable transport initiatives.
            <ul>
              <li>
                <b>Public awareness</b> of university sustainable travel
                initiatives is crucial. The benefits of sustainable travel must
                be emphasized to students and faculty through various
                activities. Furthermore, campaigns can be launched through
                email, social media, conferences, and seminars.{" "}
              </li>

              <li>
                <b>Enhancements to the built environment,</b>
                including safe cycling routes free of hazards, adequate
                pedestrian pathways to promote walking, and a review of parking
                fees in university lots to reduce congestion.{" "}
              </li>

              <li>
                <b>Developing subsidised staff housing </b> near the university
                could address the problem of distance. Additionally, Coventry
                University should focus on increasing car share adoption through
                improved flexibility in handling emergencies. Alternative
                transportation should be provided for staff and students during
                an emergency.{" "}
              </li>

              <li>
                <b>Limiting on-campus classes</b> to one or two days a week,
                with online courses augmenting them. Fewer commutes will result
                in reduced carbon footprint and a projected increase in student
                attendance. It is imperative to integrate features like digital
                platforms for exchanging materials, debates, and feedback on
                learning experiences.{" "}
              </li>

              <li>
                <b>Involving student and staff representatives</b> on the
                environment team will produce more accurate judgments and more
                effective solutions to meet their needs.
              </li>
            </ul>
          </p>

          <p>
            The reductions in Coventry University's carbon footprint that are
            necessary to prevent climate change will not be achieved by any
            single strategy. Many of these strategies complement each other,
            making combining them the most effective way to reduce
            transportation GHG emissions.
          </p>
        </div>
        <div>
          <Header title="Reflective Account" />
          <p>
            As a business analyst intern, I aided Coventry University's
            environment team in revising existing travel plans. My role, under
            the supervision of my manager, comprised developing the 2021 travel
            survey, researching the sustainable travel plans of comparable
            organisations, engaging stakeholders, promoting the survey, and
            analysing the survey data to generate actionable insights. I am
            grateful for the chance to participate in the consultancy project.
            It made me realise how important sustainable transportation is in
            terms of reducing overall GHG emissions and climate change.
            Furthermore, the consultancy project assisted in honing my
            analytical abilities and putting the theoretical knowledge I
            received throughout the first and second terms to practical use.
          </p>
        </div>
      </article>
      <div className="buttons">
        <div className="home-button">
          <Button
            href="/page-three"
            style={prev}
            // size="large"
            // variant="contained"
            // color="secondary"
          >
            previous
          </Button>
        </div>
        <div className="next-btn">
          <Button
            href="/page-five"
            style={next}
            // disabled
          >
            next
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageFour;
